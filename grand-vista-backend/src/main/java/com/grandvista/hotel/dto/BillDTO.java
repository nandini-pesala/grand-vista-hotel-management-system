package com.grandvista.hotel.dto;

import java.math.BigDecimal;

public class BillDTO {

    private Integer bookingId;
    private String customerName;
    private String roomNumber;

    private BigDecimal roomCharges;
    private BigDecimal foodCharges;
    private BigDecimal otherCharges;

    private BigDecimal totalAmount;
    
    private boolean paid;

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}

	public BigDecimal getRoomCharges() {
		return roomCharges;
	}

	public void setRoomCharges(BigDecimal roomCharges) {
		this.roomCharges = roomCharges;
	}

	public BigDecimal getFoodCharges() {
		return foodCharges;
	}

	public void setFoodCharges(BigDecimal foodCharges) {
		this.foodCharges = foodCharges;
	}

	public BigDecimal getOtherCharges() {
		return otherCharges;
	}

	public void setOtherCharges(BigDecimal otherCharges) {
		this.otherCharges = otherCharges;
	}

	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}

    
}