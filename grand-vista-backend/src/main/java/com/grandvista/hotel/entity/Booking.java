package com.grandvista.hotel.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "Bookings")
public class Booking {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "booking_id")
	    private Integer bookingId;

	    @ManyToOne
	    @JoinColumn(name = "customer_id")
	    private Customer customer;

	    @ManyToOne
	    @JoinColumn(name = "room_id")
	    private Room room;

	    @Column(name = "booking_date")
	    private LocalDateTime bookingDate;

	    @Column(name = "check_in_date")
	    private LocalDate checkInDate;

	    @Column(name = "check_out_date")
	    private LocalDate checkOutDate;

	    @Column(name = "total_guests")
	    private Integer totalGuests;

	    @Column(name = "booking_status")
	    private String bookingStatus;

	    public Booking() {
	    }

		public Integer getBookingId() {
			return bookingId;
		}

		public void setBookingId(Integer bookingId) {
			this.bookingId = bookingId;
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

		public LocalDateTime getBookingDate() {
			return bookingDate;
		}

		public void setBookingDate(LocalDateTime bookingDate) {
			this.bookingDate = bookingDate;
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

		public String getBookingStatus() {
			return bookingStatus;
		}

		public void setBookingStatus(String bookingStatus) {
			this.bookingStatus = bookingStatus;
		}

}
