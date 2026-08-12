package com.grandvista.hotel.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.dto.BookingDTO;
import com.grandvista.hotel.entity.Booking;
import com.grandvista.hotel.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Booking bookRoom(
            @RequestBody BookingDTO dto){

        return bookingService.bookRoom(dto);
    }
    
    @GetMapping("/customer/{customerId}")
    public List<Booking> getCustomerBookings(
            @PathVariable Integer customerId){

        return bookingService
                .getCustomerBookings(
                        customerId);
    }
    
    @PutMapping("/cancel/{bookingId}")
    public String cancelBooking(
            @PathVariable Integer bookingId){

        return bookingService
                .cancelBooking(bookingId);
    }
    
    @PutMapping("/checkin/{bookingId}")
    public String checkIn(
            @PathVariable Integer bookingId) {

        return bookingService.checkIn(bookingId);
    }
    
    @PutMapping("/checkout/{bookingId}")
    public String checkOut(
            @PathVariable Integer bookingId) {

        return bookingService.checkOut(bookingId);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }
    
    @GetMapping("/arrivals/today")
    public List<Booking> getTodaysArrivals() {

        return bookingService.getTodaysArrivals();
    }

    @GetMapping("/departures/today")
    public List<Booking> getTodaysDepartures() {

        return bookingService.getTodaysDepartures();
    }
    
    @GetMapping("/customer/{customerId}/current")
    public List<Booking> currentBookings(
            @PathVariable Integer customerId){

        return bookingService
                .getCurrentBookings(customerId);
    }

    @GetMapping("/customer/{customerId}/past")
    public List<Booking> pastBookings(
            @PathVariable Integer customerId){

        return bookingService
                .getPastBookings(customerId);
    }

    @GetMapping("/customer/{customerId}/cancelled")
    public List<Booking> cancelledBookings(
            @PathVariable Integer customerId){

        return bookingService
                .getCancelledBookings(customerId);
    }
}