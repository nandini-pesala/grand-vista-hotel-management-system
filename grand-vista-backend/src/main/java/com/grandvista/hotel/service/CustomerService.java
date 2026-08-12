package com.grandvista.hotel.service;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.grandvista.hotel.repository.UserRepository;
import com.grandvista.hotel.repository.CustomerRepository;
import com.grandvista.hotel.entity.User;
import com.grandvista.hotel.entity.Customer;
import com.grandvista.hotel.dto.ReceptionCustomerDTO;

@Service
public class CustomerService {


@Autowired
private CustomerRepository customerRepository;

@Autowired
private UserRepository userRepository;

public String registerCustomerByReception(
        ReceptionCustomerDTO dto){

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

    customer.setUser(savedUser);

    customerRepository.save(customer);

    return "Customer Registered Successfully";
}

public Customer getCustomerById(Integer userId) {

    Customer customer =
            customerRepository.findByUserUserId(userId);

    if (customer == null) {
        throw new RuntimeException("Customer not found");
    }

    return customer;
}

public Customer updateCustomer(Integer userId,
        Customer updatedCustomer) {

Customer customer =
customerRepository.findByUserUserId(userId);

if (customer == null) {
throw new RuntimeException("Customer not found");
}

customer.setCustomerName(updatedCustomer.getCustomerName());
customer.setPhone(updatedCustomer.getPhone());
customer.setAddress(updatedCustomer.getAddress());

return customerRepository.save(customer);
}

public List<Customer> getAllCustomers() {
    return customerRepository.findAll();
}

}
