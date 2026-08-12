package com.grandvista.hotel.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

	List<Booking> findByCustomerCustomerId(
	        Integer customerId);
	
	long countByBookingStatus(String bookingStatus);

	List<Booking> findByCheckInDate(LocalDate checkInDate);

	List<Booking> findByCheckOutDate(LocalDate checkOutDate);
	
	List<Booking>
	findByCustomerCustomerIdAndBookingStatus(
	        Integer customerId,
	        String bookingStatus);
	
	List<Booking> findByCustomerCustomerIdAndBookingStatusIn(
	        Integer customerId,
	        List<String> status);

	Optional<Booking> findTopByCustomerCustomerIdAndBookingStatusInOrderByBookingDateDesc(
	        Integer customerId,
	        List<String> bookingStatus);
	
}
