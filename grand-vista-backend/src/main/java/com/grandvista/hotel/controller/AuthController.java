package com.grandvista.hotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.dto.CustomerRegistrationDTO;
import com.grandvista.hotel.dto.LoginDTO;
import com.grandvista.hotel.dto.LoginResponseDTO;
import com.grandvista.hotel.service.AuthService;
import com.grandvista.hotel.entity.User;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String registerCustomer(
            @RequestBody
            CustomerRegistrationDTO dto) {

        return authService
                .registerCustomer(dto);
    }
    
    @PostMapping("/login")
    public User login(
    @RequestBody LoginDTO dto){

        return authService.login(dto);
    }
    
    @PostMapping("/customer/login")
    public LoginResponseDTO customerLogin(
            @RequestBody LoginDTO dto){

        return authService.customerLogin(dto);
    }
    
    @PostMapping("/employee/login")
    public LoginResponseDTO employeeLogin(
            @RequestBody LoginDTO dto){

        return authService.employeeLogin(dto);
    }
    
    @PostMapping("/admin/login")
    public LoginResponseDTO adminLogin(
            @RequestBody LoginDTO dto){

        return authService.adminLogin(dto);
    }
}