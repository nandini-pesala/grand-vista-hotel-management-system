package com.grandvista.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
