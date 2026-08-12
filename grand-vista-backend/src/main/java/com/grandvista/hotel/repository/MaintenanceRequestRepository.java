package com.grandvista.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.MaintenanceRequest;

import java.util.List;

public interface MaintenanceRequestRepository extends JpaRepository<MaintenanceRequest, Integer> {

	 List<MaintenanceRequest> findByStatus(String status);

	    long countByStatus(String status);
}
