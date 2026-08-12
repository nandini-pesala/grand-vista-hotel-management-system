package com.grandvista.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.entity.Employee;
import com.grandvista.hotel.service.EmployeeService;
import com.grandvista.hotel.dto.EmployeeDTO;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public Employee addEmployee(
            @RequestBody EmployeeDTO dto) {

        return employeeService.addEmployee(dto);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {

        return employeeService.getAllEmployees();
    }
}