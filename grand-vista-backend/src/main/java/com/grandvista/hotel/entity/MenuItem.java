package com.grandvista.hotel.entity;

import java.math.BigDecimal;
import jakarta.persistence.*;

@Entity
@Table(name = "Menu_Items")
public class MenuItem {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "food_id")
	    private Integer foodId;

	    @Column(name = "food_name")
	    private String foodName;

	    private String category;

	    private BigDecimal price;

	    private Boolean availability;

	    private String description;

	    public MenuItem() {
	    }

		public Integer getFoodId() {
			return foodId;
		}

		public void setFoodId(Integer foodId) {
			this.foodId = foodId;
		}

		public String getFoodName() {
			return foodName;
		}

		public void setFoodName(String foodName) {
			this.foodName = foodName;
		}

		public String getCategory() {
			return category;
		}

		public void setCategory(String category) {
			this.category = category;
		}

		public BigDecimal getPrice() {
			return price;
		}

		public void setPrice(BigDecimal price) {
			this.price = price;
		}

		public Boolean getAvailability() {
			return availability;
		}

		public void setAvailability(Boolean availability) {
			this.availability = availability;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}
}
