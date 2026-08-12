package com.grandvista.hotel.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.dto.ReceptionCustomerDTO;
import com.grandvista.hotel.service.CustomerService;
import com.grandvista.hotel.entity.Customer;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

	 @Autowired
	 private CustomerService customerService;
	
	 @GetMapping
	 public List<Customer> getAllCustomers() {
	     return customerService.getAllCustomers();
	 }
	 
	@PostMapping("/reception/register")
	public String registerCustomerByReception(
	        @RequestBody
	        ReceptionCustomerDTO dto){

	    return customerService
	            .registerCustomerByReception(dto);
	}
	
	@GetMapping("/{customerId}")
	public Customer getCustomerById(
	        @PathVariable Integer customerId){

	    return customerService
	            .getCustomerById(customerId);
	}
	
	@PutMapping("/{customerId}")
	public Customer updateCustomer(
	        @PathVariable Integer customerId,
	        @RequestBody Customer customer){

	    return customerService
	            .updateCustomer(
	                    customerId,
	                    customer);
	}
	
}
