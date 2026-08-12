package com.grandvista.hotel.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.entity.FoodOrder;
import com.grandvista.hotel.service.FoodOrderService;
import com.grandvista.hotel.dto.FoodOrderDTO;
import com.grandvista.hotel.dto.FoodOrderResponseDTO;

@RestController
@RequestMapping("/api/orders")
public class FoodOrderController {

    @Autowired
    private FoodOrderService foodOrderService;

    @PostMapping
    public FoodOrder placeOrder(
            @RequestBody FoodOrderDTO dto){

        return foodOrderService
                .placeOrder(dto);
    }
    
    @GetMapping("/pending")
    public List<FoodOrderResponseDTO> getPendingOrders() {
        return foodOrderService.getOrdersByStatus("PENDING");
    }
    
    @PutMapping("/prepare/{orderId}")
    public String prepareFood(
            @PathVariable Integer orderId) {

        return foodOrderService
                .startPreparing(orderId);
    }
    
    @GetMapping("/preparing")
    public List<FoodOrderResponseDTO> getPreparingOrders() {
        return foodOrderService.getOrdersByStatus("PREPARING");
    }
    
    @PutMapping("/ready/{orderId}")
    public String markReady(
            @PathVariable Integer orderId) {

        return foodOrderService.markReady(orderId);
    }
    
    @GetMapping("/ready")
    public List<FoodOrderResponseDTO> getReadyOrders() {
        return foodOrderService.getOrdersByStatus("READY");
    }
    
    @PutMapping("/deliver/{orderId}")
    public String deliverOrder(
            @PathVariable Integer orderId) {

        return foodOrderService.deliverOrder(orderId);
    }
    
    @GetMapping("/delivered")
    public List<FoodOrderResponseDTO> getDeliveredOrders() {
        return foodOrderService.getOrdersByStatus("DELIVERED");
    }
    
    @GetMapping("/customer/{customerId}")
    public List<FoodOrder> getCustomerOrders(
            @PathVariable Integer customerId){

        return foodOrderService
                .getCustomerOrders(customerId);
    }
}