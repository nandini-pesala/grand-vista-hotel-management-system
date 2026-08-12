package com.grandvista.hotel.dto;

public class LoginResponseDTO {

	 private Integer userId;
	 private Integer customerId;
	 private String email;
     private String role;
     private String employeeId;

     public String getEmployeeId() {
         return employeeId;
     }

     public void setEmployeeId(String employeeId) {
         this.employeeId = employeeId;
     }
     public Integer getCustomerId() {
 		return customerId;
 	}
 	 public void setCustomerId(Integer customerId) {
 		 this.customerId = customerId;
 	 }
     public Integer getUserId() {
		return userId;
	}
	 public void setUserId(Integer userId) {
		 this.userId = userId;
	 }
	 public String getEmail() {
		 return email;
	 }
	 public void setEmail(String email) {
		 this.email = email;
	 }
	 public String getRole() {
		 return role;
	 }
	 public void setRole(String role) {
		 this.role = role;
	 }
	 public String getMessage() {
		 return message;
	 }
	 public void setMessage(String message) {
		 this.message = message;
	 }
	 private String message;
}
