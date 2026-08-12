package com.grandvista.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.entity.FoodOrderDetail;
import com.grandvista.hotel.repository.FoodOrderDetailRepository;

@Service
public class FoodOrderDetailService {

    @Autowired
    private FoodOrderDetailRepository repository;

    public List<FoodOrderDetail> getOrderDetails(Integer orderId) {

        return repository.findByFoodOrderOrderId(orderId);
    }

}