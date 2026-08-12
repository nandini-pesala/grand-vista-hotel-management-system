package com.grandvista.hotel.entity;

import java.util.List;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Food_Orders")
public class FoodOrder {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "kitchen_employee_id")
    private Employee kitchenEmployee;

    @ManyToOne
    @JoinColumn(name = "delivery_employee_id")
    private Employee deliveryEmployee;

    @Column(name = "order_date")
    private LocalDateTime orderDate;

    @Column(name = "total_amount")
    private BigDecimal totalAmount;

    @Column(name = "order_status")
    private String orderStatus;
    
    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
    
    @Column(name = "payment_status")
    private String paymentStatus;
    
    @OneToMany(
            mappedBy = "foodOrder",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    @JsonManagedReference
    private List<FoodOrderDetail> orderDetails;
    
    public List<FoodOrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<FoodOrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}
    
    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
    
    public FoodOrder() {
    }

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	public Employee getKitchenEmployee() {
		return kitchenEmployee;
	}

	public void setKitchenEmployee(Employee kitchenEmployee) {
		this.kitchenEmployee = kitchenEmployee;
	}

	public Employee getDeliveryEmployee() {
		return deliveryEmployee;
	}

	public void setDeliveryEmployee(Employee deliveryEmployee) {
		this.deliveryEmployee = deliveryEmployee;
	}

	public LocalDateTime getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}

	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

}
