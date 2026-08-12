package com.grandvista.hotel.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.dto.CustomerRegistrationDTO;
import com.grandvista.hotel.dto.LoginDTO;
import com.grandvista.hotel.dto.LoginResponseDTO;
import com.grandvista.hotel.entity.Customer;
import com.grandvista.hotel.entity.User;
import com.grandvista.hotel.repository.CustomerRepository;
import com.grandvista.hotel.repository.UserRepository;
import com.grandvista.hotel.entity.Employee;
import com.grandvista.hotel.repository.EmployeeRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomerRepository customerRepository;
    
    @Autowired
    private EmployeeRepository employeeRepository;

    public String registerCustomer(
            CustomerRegistrationDTO dto) {

        User user = new User();

        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole("CUSTOMER");
        user.setStatus("ACTIVE");

        User savedUser =
                userRepository.save(user);

        Customer customer =
                new Customer();

        customer.setCustomerName(
                dto.getCustomerName());

        customer.setPhone(
                dto.getPhone());

        customer.setAddress(
                dto.getAddress());

        customer.setRegistrationDate(
                LocalDateTime.now());

        customer.setUser(savedUser);

        customerRepository.save(customer);

        return "Customer Registered Successfully";
    }
    
    public User login(LoginDTO dto){

        User user =
        userRepository.findByEmail(
        dto.getEmail()).orElse(null);

        if(user == null){
            return null;
        }

        if(!user.getPassword()
           .equals(dto.getPassword())){

            return null;
        }

        return user;
    }
    
    public LoginResponseDTO customerLogin(LoginDTO dto){

        LoginResponseDTO response =
                new LoginResponseDTO();

        User user = userRepository
                .findByEmail(dto.getEmail())
                .orElse(null);

        if(user == null){
            response.setMessage("Invalid Email");
            return response;
        }

        if(!user.getPassword()
                .equals(dto.getPassword())){

            response.setMessage("Invalid Password");
            return response;
        }

        if(!user.getRole()
                .equals("CUSTOMER")){

            response.setMessage(
            "You are not authorized as Customer");

            return response;
        }

        Customer customer =
                customerRepository.findByUserUserId(
                        user.getUserId());

        response.setUserId(user.getUserId());
        response.setCustomerId(customer.getCustomerId());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setMessage("Login Success");


        return response;
    }
    
    public LoginResponseDTO employeeLogin(LoginDTO dto) {

        LoginResponseDTO response = new LoginResponseDTO();

        User user = userRepository.findByEmail(dto.getEmail()).orElse(null);

        if (user == null) {
            response.setMessage("Invalid Email");
            return response;
        }

        if (!user.getPassword().equals(dto.getPassword())) {
            response.setMessage("Invalid Password");
            return response;
        }

        // Only employees can login here
        if (!"EMPLOYEE".equals(user.getRole())) {
            response.setMessage("You are not authorized as Employee");
            return response;
        }

        Employee employee =
                employeeRepository.findByUserUserId(user.getUserId());

        if (employee == null) {
            response.setMessage("Employee Record Not Found");
            return response;
        }

        response.setUserId(user.getUserId());
        response.setEmail(user.getEmail());

        // Employee id
        response.setEmployeeId(employee.getEmployeeId());

        // Department role
        response.setRole(employee.getRole());

        response.setMessage("Login Success");

        return response;
    }
    
    public LoginResponseDTO adminLogin(LoginDTO dto){

        LoginResponseDTO response =
                new LoginResponseDTO();

        User user = userRepository
                .findByEmail(dto.getEmail())
                .orElse(null);

        if(user == null){
            response.setMessage("Invalid Email");
            return response;
        }

        if(!user.getPassword()
                .equals(dto.getPassword())){

            response.setMessage("Invalid Password");
            return response;
        }

        if(!user.getRole()
                .equals("ADMIN")){

            response.setMessage(
            "You are not authorized as Admin");

            return response;
        }

        response.setUserId(user.getUserId());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setMessage("Login Success");

        return response;
    }
}