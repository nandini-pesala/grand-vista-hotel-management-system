package com.grandvista.hotel.repository;

import java.util.List;
import java.math.BigDecimal;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.grandvista.hotel.entity.FoodOrder;

public interface FoodOrderRepository extends JpaRepository<FoodOrder, Integer>{

	List<FoodOrder> findByOrderStatus(String orderStatus);
	
	
	long countByOrderStatus(
	        String orderStatus);

	
	List<FoodOrder>
	findByCustomerCustomerId(
	        Integer customerId);
	
	@Query("""
			SELECT COALESCE(SUM(f.totalAmount),0)
			FROM FoodOrder f
			WHERE f.booking.bookingId = :bookingId
			AND f.paymentStatus = 'PENDING'
			""")
			BigDecimal getPendingFoodAmountByBooking(Integer bookingId);
	
	List<FoodOrder> findByBookingBookingIdAndPaymentStatus(
	        Integer bookingId,
	        String paymentStatus);
	
	@Query("""
			SELECT COALESCE(SUM(f.totalAmount),0)
			FROM FoodOrder f
			WHERE f.booking.bookingId = :bookingId
			""")
			BigDecimal getTotalFoodAmountByBooking(Integer bookingId);
	
}
