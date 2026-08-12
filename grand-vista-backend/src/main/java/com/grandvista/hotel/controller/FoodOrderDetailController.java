package com.grandvista.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.entity.FoodOrderDetail;
import com.grandvista.hotel.service.FoodOrderDetailService;

@RestController
@RequestMapping("/api/order-details")
@CrossOrigin("*")
public class FoodOrderDetailController {

    @Autowired
    private FoodOrderDetailService service;

    @GetMapping("/{orderId}")
    public List<FoodOrderDetail> getOrderDetails(
            @PathVariable Integer orderId) {

        return service.getOrderDetails(orderId);
    }

}