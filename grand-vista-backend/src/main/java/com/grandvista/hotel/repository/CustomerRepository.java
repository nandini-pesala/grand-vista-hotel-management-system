package com.grandvista.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.Customer;

public interface CustomerRepository  extends JpaRepository<Customer, Integer> {

	long count();
	Customer findByUserUserId(Integer userId);
	
}
