package com.grandvista.hotel.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.dto.FeedbackDTO;
import com.grandvista.hotel.entity.Customer;
import com.grandvista.hotel.entity.Feedback;
import com.grandvista.hotel.repository.CustomerRepository;
import com.grandvista.hotel.repository.FeedbackRepository;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private CustomerRepository customerRepository;

    public Feedback addFeedback(FeedbackDTO dto) {

        Customer customer = customerRepository
                .findById(dto.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Feedback feedback = new Feedback();

        feedback.setCustomer(customer);
        feedback.setRating(dto.getRating());
        feedback.setComments(dto.getComments());
        feedback.setFeedbackDate(LocalDateTime.now());

        return feedbackRepository.save(feedback);
    }

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

}