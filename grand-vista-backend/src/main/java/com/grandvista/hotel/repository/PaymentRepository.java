package com.grandvista.hotel.repository;

import java.util.List;
import java.math.BigDecimal;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.grandvista.hotel.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

	List<Payment>
	findByCustomerCustomerId(
	Integer customerId);

	Optional<Payment> findByBookingBookingId(Integer bookingId);
	
	@Query(
			"SELECT SUM(p.amount) FROM Payment p WHERE p.paymentStatus='SUCCESS'")
			BigDecimal getTotalRevenue();
}
