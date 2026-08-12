package com.grandvista.hotel.controller;

import java.util.Map;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.dto.DashboardDTO;
import com.grandvista.hotel.entity.Employee;
import com.grandvista.hotel.service.ManagerService;

@RestController
@RequestMapping("/api/manager")
public class ManagerController {

    @Autowired
    private ManagerService managerService;

    @GetMapping("/dashboard")
    public DashboardDTO getDashboard() {

        return managerService.getDashboard();
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees() {

        return managerService.getEmployees();
    }

    @GetMapping("/food-statistics")
    public Map<String, Long> foodStatistics() {

        return managerService.foodStatistics();
    }

    @GetMapping("/housekeeping-statistics")
    public Map<String, Long> housekeepingStatistics() {

        return managerService.housekeepingStatistics();
    }

    @GetMapping("/maintenance-statistics")
    public Map<String, Long> maintenanceStatistics() {

        return managerService.maintenanceStatistics();
    }
    
}