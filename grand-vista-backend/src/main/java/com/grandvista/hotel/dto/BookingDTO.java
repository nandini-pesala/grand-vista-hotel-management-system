package com.grandvista.hotel.dto;

import java.time.LocalDate;

public class BookingDTO {

    private Integer customerId;

    private Integer roomId;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private Integer totalGuests;

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public Integer getRoomId() {
		return roomId;
	}

	public void setRoomId(Integer roomId) {
		this.roomId = roomId;
	}

	public LocalDate getCheckInDate() {
		return checkInDate;
	}

	public void setCheckInDate(LocalDate checkInDate) {
		this.checkInDate = checkInDate;
	}

	public LocalDate getCheckOutDate() {
		return checkOutDate;
	}

	public void setCheckOutDate(LocalDate checkOutDate) {
		this.checkOutDate = checkOutDate;
	}

	public Integer getTotalGuests() {
		return totalGuests;
	}

	public void setTotalGuests(Integer totalGuests) {
		this.totalGuests = totalGuests;
	}
}