package com.grandvista.hotel.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Customers")
public class Customer {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "customer_id")
	    private Integer customerId;

	    @OneToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    @Column(name = "customer_name")
	    private String customerName;

	    private String phone;

	    private String address;

	    @Column(name = "registration_date")
	    private LocalDateTime registrationDate;

	    public Customer() {
	    }

		public Integer getCustomerId() {
			return customerId;
		}

		public void setCustomerId(Integer customerId) {
			this.customerId = customerId;
		}

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public String getCustomerName() {
			return customerName;
		}

		public void setCustomerName(String customerName) {
			this.customerName = customerName;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public LocalDateTime getRegistrationDate() {
			return registrationDate;
		}

		public void setRegistrationDate(LocalDateTime registrationDate) {
			this.registrationDate = registrationDate;
		}

}
