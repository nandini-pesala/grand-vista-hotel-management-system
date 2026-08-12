package com.grandvista.hotel.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "Employees")

public class Employee {
	 @Id
	 @Column(name = "employee_id")
	 private String employeeId;

	    @OneToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    @Column(name = "employee_name")
	    private String employeeName;

	    private String phone;

	    @ManyToOne
	    @JoinColumn(name = "department_id")
	    private Department department;

	    private BigDecimal salary;

	    @Column(name = "joining_date")
	    private LocalDate joiningDate;

	    private String status;
	    
	    private String role;

	    public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}

		public Employee() {
	    }

		public String getEmployeeId() {
			return employeeId;
		}

		public void setEmployeeId(String employeeId) {
			this.employeeId = employeeId;
		}

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public String getEmployeeName() {
			return employeeName;
		}

		public void setEmployeeName(String employeeName) {
			this.employeeName = employeeName;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public Department getDepartment() {
			return department;
		}

		public void setDepartment(Department department) {
			this.department = department;
		}

		public BigDecimal getSalary() {
			return salary;
		}

		public void setSalary(BigDecimal salary) {
			this.salary = salary;
		}

		public LocalDate getJoiningDate() {
			return joiningDate;
		}

		public void setJoiningDate(LocalDate joiningDate) {
			this.joiningDate = joiningDate;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

}
