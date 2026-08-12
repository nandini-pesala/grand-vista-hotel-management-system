package com.grandvista.hotel.entity;

import java.math.BigDecimal;
import jakarta.persistence.*;

@Entity
@Table(name = "Rooms")
public class Room {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "room_id")
	    private Integer roomId;

	    @Column(name = "room_number")
	    private String roomNumber;

	    @Column(name = "room_type")
	    private String roomType;

	    private Integer capacity;

	    @Column(name = "price_per_night")
	    private BigDecimal pricePerNight;

	    @Column(name = "room_status")
	    private String roomStatus;

	    private String description;

	    public Room() {
	    }

		public Integer getRoomId() {
			return roomId;
		}

		public void setRoomId(Integer roomId) {
			this.roomId = roomId;
		}

		public String getRoomNumber() {
			return roomNumber;
		}

		public void setRoomNumber(String roomNumber) {
			this.roomNumber = roomNumber;
		}

		public String getRoomType() {
			return roomType;
		}

		public void setRoomType(String roomType) {
			this.roomType = roomType;
		}

		public Integer getCapacity() {
			return capacity;
		}

		public void setCapacity(Integer capacity) {
			this.capacity = capacity;
		}

		public BigDecimal getPricePerNight() {
			return pricePerNight;
		}

		public void setPricePerNight(BigDecimal pricePerNight) {
			this.pricePerNight = pricePerNight;
		}

		public String getRoomStatus() {
			return roomStatus;
		}

		public void setRoomStatus(String roomStatus) {
			this.roomStatus = roomStatus;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

}
