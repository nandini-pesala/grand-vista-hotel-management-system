package com.grandvista.hotel.service;

import java.util.List;
import java.util.ArrayList;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.entity.FoodOrder;
import com.grandvista.hotel.entity.FoodOrderDetail;
import com.grandvista.hotel.entity.Customer;
import com.grandvista.hotel.entity.Room;
import com.grandvista.hotel.entity.Booking;
import com.grandvista.hotel.repository.CustomerRepository;
import com.grandvista.hotel.repository.MenuItemRepository;
import com.grandvista.hotel.repository.FoodOrderRepository;
import com.grandvista.hotel.repository.FoodOrderDetailRepository;
import com.grandvista.hotel.repository.RoomRepository;
import com.grandvista.hotel.repository.BookingRepository;
import com.grandvista.hotel.entity.MenuItem;
import com.grandvista.hotel.dto.FoodOrderDTO;
import com.grandvista.hotel.dto.FoodOrderResponseDTO;

@Service
public class FoodOrderService {

	@Autowired
    private RoomRepository roomRepository;
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
    private CustomerRepository customerRepository;
	
	@Autowired
    private MenuItemRepository menuItemRepository;
	
	@Autowired
    private FoodOrderRepository foodOrderRepository;
	
	@Autowired
	private FoodOrderDetailRepository foodOrderDetailRepository;
	
	public FoodOrder placeOrder(FoodOrderDTO dto){

	    Customer customer =
	            customerRepository
	            .findById(dto.getCustomerId())
	            .orElseThrow();

	    Room room =
	    	    roomRepository
	    	        .findByRoomNumber(dto.getRoomNumber())
	    	        .orElseThrow(() ->
	    	            new RuntimeException("Room not found"));

	    MenuItem food =
	            menuItemRepository
	            .findById(dto.getFoodId())
	            .orElseThrow();

	    Booking booking =
	    	    bookingRepository
	    	        .findTopByCustomerCustomerIdAndBookingStatusInOrderByBookingDateDesc(
	    	            dto.getCustomerId(),
	    	            List.of("BOOKED", "CHECKED_IN"))
	    	        .orElse(null);


	    	if (booking == null) {
	    	    throw new RuntimeException("Customer has no active booking");
	    	}

	    FoodOrder order = new FoodOrder();

	    order.setBooking(booking);
	    order.setCustomer(customer);
	    order.setRoom(room);

	    order.setOrderDate(LocalDateTime.now());

	    order.setOrderStatus("PENDING");
	    order.setPaymentStatus("PENDING");

	    BigDecimal total =
	            food.getPrice()
	                    .multiply(BigDecimal.valueOf(dto.getQuantity()));

	    order.setTotalAmount(total);
	    order.setPaymentStatus("PENDING");

	    FoodOrder savedOrder =
	            foodOrderRepository.save(order);

	    FoodOrderDetail detail =
	            new FoodOrderDetail();

	    detail.setFoodOrder(savedOrder);
	    detail.setMenuItem(food);
	    detail.setQuantity(dto.getQuantity());
	    detail.setSubtotal(total);

	    foodOrderDetailRepository.save(detail);

	    return savedOrder;
	}
	
	public String startPreparing(Integer orderId) {

	    FoodOrder order =
	            foodOrderRepository
	            .findById(orderId)
	            .orElseThrow();

	    order.setOrderStatus("PREPARING");

	    foodOrderRepository.save(order);

	    return "Food Preparation Started";
	}
	
	public String markReady(Integer orderId) {

	    FoodOrder order =
	            foodOrderRepository
	            .findById(orderId)
	            .orElseThrow();

	    order.setOrderStatus("READY");

	    foodOrderRepository.save(order);

	    return "Food Ready";
	}
	
	public String deliverOrder(Integer orderId) {

	    FoodOrder order =
	            foodOrderRepository
	            .findById(orderId)
	            .orElseThrow();

	    order.setOrderStatus("DELIVERED");

	    foodOrderRepository.save(order);

	    return "Food Delivered";
	}
	
	public List<FoodOrder> getCustomerOrders(
	        Integer customerId){

	    return foodOrderRepository
	            .findByCustomerCustomerId(
	                    customerId);
	}
	
	public List<FoodOrderResponseDTO> getOrdersByStatus(String status) {

	    List<FoodOrder> orders =
	            foodOrderRepository.findByOrderStatus(status);

	    List<FoodOrderResponseDTO> response =
	            new ArrayList<>();

	    for (FoodOrder order : orders) {

	        List<FoodOrderDetail> details =
	                foodOrderDetailRepository.findByFoodOrderOrderId(
	                        order.getOrderId());

	        for (FoodOrderDetail detail : details) {

	            FoodOrderResponseDTO dto =
	                    new FoodOrderResponseDTO();

	            dto.setOrderId(order.getOrderId());
	            dto.setCustomerName(order.getCustomer().getCustomerName());
	            dto.setRoomNumber(order.getRoom().getRoomNumber());
	            dto.setFoodName(detail.getMenuItem().getFoodName());
	            dto.setQuantity(detail.getQuantity());
	            dto.setTotalAmount(order.getTotalAmount());
	            dto.setOrderStatus(order.getOrderStatus());

	            response.add(dto);
	        }
	    }

	    return response;
	}
}