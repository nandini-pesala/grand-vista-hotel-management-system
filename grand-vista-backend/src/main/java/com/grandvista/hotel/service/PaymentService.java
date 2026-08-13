package com.grandvista.hotel.service;

import java.time.LocalDateTime;
import java.util.List;
import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.dto.PaymentDTO;
import com.grandvista.hotel.dto.BillDTO;
import com.grandvista.hotel.entity.Booking;
import com.grandvista.hotel.entity.Customer;
import com.grandvista.hotel.entity.Payment;
import com.grandvista.hotel.entity.FoodOrder;
import com.grandvista.hotel.repository.BookingRepository;
import com.grandvista.hotel.repository.CustomerRepository;
import com.grandvista.hotel.repository.PaymentRepository;
import com.grandvista.hotel.repository.FoodOrderRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private FoodOrderRepository foodOrderRepository;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public BigDecimal getRevenue() {

    BigDecimal revenue =
            paymentRepository.getTotalRevenue();

    if (revenue == null) {
        return BigDecimal.ZERO;
    }

    return revenue;
    }

    public Payment makePayment(PaymentDTO dto){
    	
    	Payment existingPayment =
    	        paymentRepository
    	        .findByBookingBookingId(dto.getBookingId())
    	        .orElse(null);
    	

    	if(existingPayment != null){
    	    throw new RuntimeException("Payment already completed.");
    	}
    	
        Booking booking =
                bookingRepository
                .findById(dto.getBookingId())
                .orElseThrow();

        Customer customer =
                customerRepository
                .findById(dto.getCustomerId())
                .orElseThrow();

        BillDTO bill = generateFinalBill(dto.getBookingId());

        Payment payment = new Payment();

        payment.setBooking(booking);

        payment.setCustomer(customer);

        payment.setAmount(bill.getTotalAmount());

        payment.setPaymentMethod(dto.getPaymentMethod());

        payment.setPaymentStatus("SUCCESS");

        payment.setPaymentDate(LocalDateTime.now());

        List<FoodOrder> orders =
                foodOrderRepository
                .findByBookingBookingIdAndPaymentStatus(
                        booking.getBookingId(),
                        "PENDING");

        for(FoodOrder order : orders){
            order.setPaymentStatus("PAID");
        }

        foodOrderRepository.saveAll(orders);
        
        return paymentRepository.save(payment);
    }
    
    public List<Payment>
    getPaymentHistory(
    Integer customerId){

        return paymentRepository
                .findByCustomerCustomerId(
                        customerId);
    }
    
    public String generateBill(
    		Integer bookingId){

    		    Booking booking =
    		            bookingRepository
    		            .findById(bookingId)
    		            .orElseThrow();

    		    return "Booking ID : "
    		            + booking.getBookingId()
    		            + "\nRoom : "
    		            + booking.getRoom().getRoomNumber()
    		            + "\nCustomer : "
    		            + booking.getCustomer()
    		                     .getCustomerName()
    		            + "\nStatus : "
    		            + booking.getBookingStatus();
    		}
    
    public BillDTO generateFinalBill(Integer bookingId){

        Booking booking =
                bookingRepository
                .findById(bookingId)
                .orElseThrow();

        BillDTO bill = new BillDTO();

        bill.setBookingId(booking.getBookingId());

        bill.setCustomerName(
                booking.getCustomer().getCustomerName());

        bill.setRoomNumber(
                booking.getRoom().getRoomNumber());

        long days =
                java.time.temporal.ChronoUnit.DAYS.between(
                        booking.getCheckInDate(),
                        booking.getCheckOutDate());

        if(days <= 0){
            days = 1;
        }

        BigDecimal roomCharges =
                booking.getRoom()
                .getPricePerNight()
                .multiply(BigDecimal.valueOf(days));

        Payment payment =
                paymentRepository
                .findByBookingBookingId(bookingId)
                .orElse(null);

        BigDecimal foodCharges;

        if(payment == null){

            // Customer has not paid yet
            foodCharges =
                    foodOrderRepository
                    .getPendingFoodAmountByBooking(bookingId);

        }else{

            // Customer already paid
            foodCharges =
                    foodOrderRepository
                    .getTotalFoodAmountByBooking(bookingId);
        }

        if(foodCharges == null){
            foodCharges = BigDecimal.ZERO;
        }

        BigDecimal otherCharges = BigDecimal.ZERO;

        BigDecimal total =
                roomCharges
                .add(foodCharges)
                .add(otherCharges);

        bill.setRoomCharges(roomCharges);
        bill.setFoodCharges(foodCharges);
        bill.setOtherCharges(otherCharges);
        bill.setTotalAmount(total);

        bill.setPaid(payment != null);

        return bill;
    }
}
