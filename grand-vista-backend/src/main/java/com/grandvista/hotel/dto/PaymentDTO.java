package com.grandvista.hotel.dto;

import java.math.BigDecimal;

public class PaymentDTO {

	 private Integer bookingId;
	 private Integer customerId;
     private BigDecimal amount;
     private String paymentMethod;
	 public Integer getBookingId() {
		 return bookingId;
	 }
	 public void setBookingId(Integer bookingId) {
		 this.bookingId = bookingId;
	 }
	 public Integer getCustomerId() {
		 return customerId;
	 }
	 public void setCustomerId(Integer customerId) {
		 this.customerId = customerId;
	 }
	 public BigDecimal getAmount() {
		 return amount;
	 }
	 public void setAmount(BigDecimal amount) {
		 this.amount = amount;
	 }
	 public String getPaymentMethod() {
		 return paymentMethod;
	 }
	 public void setPaymentMethod(String paymentMethod) {
		 this.paymentMethod = paymentMethod;
	 }
	
}
