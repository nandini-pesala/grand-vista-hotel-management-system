package com.grandvista.hotel.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.FoodOrderDetail;

public interface FoodOrderDetailRepository extends JpaRepository<FoodOrderDetail, Integer>{

	List<FoodOrderDetail> findByFoodOrderOrderId(Integer orderId);
	
}
