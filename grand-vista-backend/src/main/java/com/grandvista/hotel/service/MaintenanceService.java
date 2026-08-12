package com.grandvista.hotel.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.entity.MaintenanceRequest;
import com.grandvista.hotel.repository.MaintenanceRequestRepository;

@Service
public class MaintenanceService {

    @Autowired
    private MaintenanceRequestRepository maintenanceRepository;

    public MaintenanceRequest createRequest(
            MaintenanceRequest request) {

        request.setStatus("PENDING");
        request.setRequestDate(LocalDateTime.now());

        return maintenanceRepository.save(request);
    }

    public List<MaintenanceRequest> getAllRequests() {

        return maintenanceRepository.findAll();
    }

    public List<MaintenanceRequest> getPendingRequests() {

        return maintenanceRepository.findByStatus("PENDING");
    }

    public List<MaintenanceRequest> getInProgressRequests() {

        return maintenanceRepository.findByStatus("IN_PROGRESS");
    }

    public List<MaintenanceRequest> getCompletedRequests() {

        return maintenanceRepository.findByStatus("COMPLETED");
    }

    public String startMaintenance(
            Integer maintenanceId) {

        MaintenanceRequest request =
                maintenanceRepository
                .findById(maintenanceId)
                .orElseThrow();

        request.setStatus("IN_PROGRESS");

        maintenanceRepository.save(request);

        return "Maintenance Started Successfully";
    }

    public String resolveIssue(
            Integer maintenanceId) {

        MaintenanceRequest request =
                maintenanceRepository
                .findById(maintenanceId)
                .orElseThrow();

        request.setStatus("COMPLETED");

        maintenanceRepository.save(request);

        return "Issue Resolved Successfully";
    }

}