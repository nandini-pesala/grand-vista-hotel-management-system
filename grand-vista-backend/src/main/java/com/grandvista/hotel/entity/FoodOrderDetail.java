package com.grandvista.hotel.entity;

import java.math.BigDecimal;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "Food_Order_Details")
public class FoodOrderDetail {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "order_detail_id")
	    private Integer orderDetailId;

	 @ManyToOne
	 @JoinColumn(name = "order_id")
	 @JsonBackReference
	 private FoodOrder foodOrder;

	    @ManyToOne
	    @JoinColumn(name = "food_id")
	    private MenuItem menuItem;

	    private Integer quantity;

	    private BigDecimal subtotal;

	    public FoodOrderDetail() {
	    }

		public Integer getOrderDetailId() {
			return orderDetailId;
		}

		public void setOrderDetailId(Integer orderDetailId) {
			this.orderDetailId = orderDetailId;
		}

		public FoodOrder getFoodOrder() {
			return foodOrder;
		}

		public void setFoodOrder(FoodOrder foodOrder) {
			this.foodOrder = foodOrder;
		}

		public MenuItem getMenuItem() {
			return menuItem;
		}

		public void setMenuItem(MenuItem menuItem) {
			this.menuItem = menuItem;
		}

		public Integer getQuantity() {
			return quantity;
		}

		public void setQuantity(Integer quantity) {
			this.quantity = quantity;
		}

		public BigDecimal getSubtotal() {
			return subtotal;
		}

		public void setSubtotal(BigDecimal subtotal) {
			this.subtotal = subtotal;
		}

}
