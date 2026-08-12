package com.grandvista.hotel.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.service.HousekeepingService;
import com.grandvista.hotel.entity.HousekeepingRequest;

@RestController
@RequestMapping("/api/housekeeping")
public class HousekeepingController {

    @Autowired
    private HousekeepingService
            housekeepingService;

    @GetMapping("/pending")
    public List<HousekeepingRequest>
    getPendingRequests() {

        return housekeepingService
                .getPendingRequests();
    }
    
    @PutMapping("/complete/{requestId}")
    public String completeCleaning(
    @PathVariable Integer requestId){

        return housekeepingService
                .completeCleaning(
                        requestId);
    }
}