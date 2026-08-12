package com.grandvista.hotel.service;

import java.util.List;
import java.time.LocalDate;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.grandvista.hotel.repository.BookingRepository;
import com.grandvista.hotel.repository.CustomerRepository;
import com.grandvista.hotel.repository.RoomRepository;
import com.grandvista.hotel.repository.HousekeepingRequestRepository;
import com.grandvista.hotel.entity.Booking;
import com.grandvista.hotel.entity.Customer;
import com.grandvista.hotel.entity.Room;
import com.grandvista.hotel.entity.HousekeepingRequest;
import com.grandvista.hotel.dto.BookingDTO;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private RoomRepository roomRepository;
    
    @Autowired
    private HousekeepingRequestRepository housekeepingRequestRepository;

    public Booking bookRoom(BookingDTO dto){

        Customer customer =
                customerRepository
                .findById(dto.getCustomerId())
                .orElseThrow();

        Room room =
                roomRepository
                .findById(dto.getRoomId())
                .orElseThrow();

        Booking booking = new Booking();

        booking.setCustomer(customer);
        booking.setRoom(room);
        booking.setCheckInDate(dto.getCheckInDate());
        booking.setCheckOutDate(dto.getCheckOutDate());
        booking.setTotalGuests(dto.getTotalGuests());
        booking.setBookingDate(
                java.time.LocalDateTime.now());

        booking.setBookingStatus("BOOKED");

        room.setRoomStatus("BOOKED");
        roomRepository.save(room);

        return bookingRepository.save(booking);
    }
    
    public List<Booking> getCustomerBookings(Integer customerId) {

        List<Booking> bookings =
                bookingRepository.findByCustomerCustomerId(customerId);

        LocalDate today = LocalDate.now();

        for (Booking booking : bookings) {

            if ((booking.getBookingStatus().equals("BOOKED")
                    || booking.getBookingStatus().equals("CHECKED_IN"))
                    && booking.getCheckOutDate().isBefore(today)) {

                booking.setBookingStatus("CHECKED_OUT");

                Room room = booking.getRoom();

                room.setRoomStatus("CLEANING_PENDING");

                roomRepository.save(room);

                HousekeepingRequest request =
                        new HousekeepingRequest();

                request.setRoom(room);
                request.setRequestDate(LocalDateTime.now());
                request.setStatus("PENDING");
                request.setRemarks("Auto generated after checkout date");

                housekeepingRequestRepository.save(request);

                bookingRepository.save(booking);
            }
        }

        return bookings;
    }
    
    public String cancelBooking(Integer bookingId) {

        Booking booking =
                bookingRepository.findById(bookingId).orElseThrow();

        if (booking.getCheckOutDate().isBefore(LocalDate.now())) {

            return "Booking cannot be cancelled after checkout date.";
        }

        if (booking.getBookingStatus().equals("CHECKED_OUT")
                || booking.getBookingStatus().equals("CANCELLED")) {

            return "Booking cannot be cancelled.";
        }

        booking.setBookingStatus("CANCELLED");

        Room room = booking.getRoom();

        room.setRoomStatus("AVAILABLE");

        roomRepository.save(room);

        bookingRepository.save(booking);

        return "Booking Cancelled";
    }
    public String checkIn(Integer bookingId) {

        Booking booking = bookingRepository
                .findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        // Already checked in
        if ("CHECKED_IN".equals(booking.getBookingStatus())) {
            return "Customer is already checked in.";
        }

        // Already checked out
        if ("CHECKED_OUT".equals(booking.getBookingStatus())) {
            return "Customer has already checked out.";
        }

        // Cancelled booking
        if ("CANCELLED".equals(booking.getBookingStatus())) {
            return "Cancelled bookings cannot be checked in.";
        }

        // Only confirmed bookings can check in
        if (!"BOOKED".equals(booking.getBookingStatus())) {
            return "Only confirmed bookings can be checked in.";
        }

        booking.setBookingStatus("CHECKED_IN");

        Room room = booking.getRoom();
        room.setRoomStatus("OCCUPIED");

        roomRepository.save(room);
        bookingRepository.save(booking);

        return "Customer Checked In Successfully";
    }
    
    public String checkOut(Integer bookingId) {

        Booking booking = bookingRepository
                .findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        // Customer hasn't checked in yet
        if (!"CHECKED_IN".equals(booking.getBookingStatus())) {
            return "Only checked-in customers can check out.";
        }

        booking.setBookingStatus("CHECKED_OUT");

        Room room = booking.getRoom();
        room.setRoomStatus("CLEANING_PENDING");

        roomRepository.save(room);

        HousekeepingRequest request = new HousekeepingRequest();
        request.setRoom(room);
        request.setRequestDate(LocalDateTime.now());
        request.setStatus("PENDING");
        request.setRemarks("Room needs cleaning after checkout");

        housekeepingRequestRepository.save(request);

        bookingRepository.save(booking);

        return "Customer Checked Out Successfully";
    }
    
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    
    public List<Booking> getTodaysArrivals() {

        return bookingRepository
                .findByCheckInDate(LocalDate.now());
    }

    public List<Booking> getTodaysDepartures() {

        return bookingRepository
                .findByCheckOutDate(LocalDate.now());
    }
    
    public List<Booking> getCurrentBookings(Integer customerId){

        return bookingRepository
                .findByCustomerCustomerIdAndBookingStatusIn(
                        customerId,
                        List.of("BOOKED", "CHECKED_IN"));
    }
    
    public List<Booking> getCancelledBookings(
            Integer customerId){

        return bookingRepository
                .findByCustomerCustomerIdAndBookingStatus(
                        customerId,
                        "CANCELLED");
    }
    
    public List<Booking> getPastBookings(Integer customerId){

        return bookingRepository
                .findByCustomerCustomerIdAndBookingStatusIn(
                        customerId,
                        List.of("CHECKED_OUT","CANCELLED"));
    }
    
}
