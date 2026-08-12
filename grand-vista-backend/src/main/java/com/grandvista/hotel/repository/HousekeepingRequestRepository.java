package com.grandvista.hotel.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.HousekeepingRequest;

public interface HousekeepingRequestRepository extends JpaRepository<HousekeepingRequest, Integer>{

	List<HousekeepingRequest>
	findByStatus(String status);
	
	long countByStatus(String status);
	
	long countByEmployeeEmployeeId(
	        String employeeId);
}
