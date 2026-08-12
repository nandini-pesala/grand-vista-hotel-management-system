package com.grandvista.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.dto.FeedbackDTO;
import com.grandvista.hotel.entity.Feedback;
import com.grandvista.hotel.service.FeedbackService;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public Feedback addFeedback(
            @RequestBody FeedbackDTO dto) {

        return feedbackService.addFeedback(dto);
    }

    @GetMapping
    public List<Feedback> getAllFeedback() {

        return feedbackService.getAllFeedback();
    }

}