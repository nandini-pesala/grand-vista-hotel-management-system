package com.grandvista.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.entity.MaintenanceRequest;
import com.grandvista.hotel.service.MaintenanceService;

@RestController
@RequestMapping("/api/maintenance")
public class MaintenanceController {

    @Autowired
    private MaintenanceService maintenanceService;

    @PostMapping
    public MaintenanceRequest createRequest(
            @RequestBody MaintenanceRequest request) {

        return maintenanceService.createRequest(request);
    }

    @GetMapping
    public List<MaintenanceRequest> getAllRequests() {

        return maintenanceService.getAllRequests();
    }

    @GetMapping("/pending")
    public List<MaintenanceRequest> getPendingRequests() {

        return maintenanceService.getPendingRequests();
    }

    @GetMapping("/inprogress")
    public List<MaintenanceRequest> getInProgressRequests() {

        return maintenanceService.getInProgressRequests();
    }

    @GetMapping("/completed")
    public List<MaintenanceRequest> getCompletedRequests() {

        return maintenanceService.getCompletedRequests();
    }

    @PutMapping("/start/{maintenanceId}")
    public String startMaintenance(
            @PathVariable Integer maintenanceId) {

        return maintenanceService.startMaintenance(maintenanceId);
    }

    @PutMapping("/resolve/{maintenanceId}")
    public String resolveIssue(
            @PathVariable Integer maintenanceId) {

        return maintenanceService.resolveIssue(maintenanceId);
    }

}