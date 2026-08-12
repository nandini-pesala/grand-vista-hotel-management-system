package com.grandvista.hotel.dto;

import java.math.BigDecimal;

public class DashboardDTO {

    private Long totalRooms;
    private Long availableRooms;
    private Long occupiedRooms;

    private Long totalCustomers;
    private Long totalEmployees;
    
    private Long totalBookings;
    private Long checkedInBookings;
    private Long checkedOutBookings;
    
    private Long pendingOrders;
    private Long deliveredOrders;
    
    private Long pendingCleaning;
    private Long completedCleaning;
    
    private Long pendingMaintenance;
    private Long completedMaintenance;
    
    public Long getPendingMaintenance() {
		return pendingMaintenance;
	}

	public void setPendingMaintenance(Long pendingMaintenance) {
		this.pendingMaintenance = pendingMaintenance;
	}

	public Long getCompletedMaintenance() {
		return completedMaintenance;
	}

	public void setCompletedMaintenance(Long completedMaintenance) {
		this.completedMaintenance = completedMaintenance;
	}

	public Long getPendingCleaning() {
		return pendingCleaning;
	}

	public void setPendingCleaning(Long pendingCleaning) {
		this.pendingCleaning = pendingCleaning;
	}

	public Long getCompletedCleaning() {
		return completedCleaning;
	}

	public void setCompletedCleaning(Long completedCleaning) {
		this.completedCleaning = completedCleaning;
	}

	public Long getPendingOrders() {
		return pendingOrders;
	}

	public void setPendingOrders(Long pendingOrders) {
		this.pendingOrders = pendingOrders;
	}

	public Long getDeliveredOrders() {
		return deliveredOrders;
	}

	public void setDeliveredOrders(Long deliveredOrders) {
		this.deliveredOrders = deliveredOrders;
	}

    public Long getTotalBookings() {
		return totalBookings;
	}

	public void setTotalBookings(Long totalBookings) {
		this.totalBookings = totalBookings;
	}

	public Long getCheckedInBookings() {
		return checkedInBookings;
	}

	public void setCheckedInBookings(Long checkedInBookings) {
		this.checkedInBookings = checkedInBookings;
	}

	public Long getCheckedOutBookings() {
		return checkedOutBookings;
	}

	public void setCheckedOutBookings(Long checkedOutBookings) {
		this.checkedOutBookings = checkedOutBookings;
	}
    
    private BigDecimal totalRevenue;

	public Long getTotalRooms() {
		return totalRooms;
	}

	public void setTotalRooms(Long totalRooms) {
		this.totalRooms = totalRooms;
	}

	public Long getAvailableRooms() {
		return availableRooms;
	}

	public void setAvailableRooms(Long availableRooms) {
		this.availableRooms = availableRooms;
	}

	public Long getOccupiedRooms() {
		return occupiedRooms;
	}

	public void setOccupiedRooms(Long occupiedRooms) {
		this.occupiedRooms = occupiedRooms;
	}

	public Long getTotalCustomers() {
		return totalCustomers;
	}

	public void setTotalCustomers(Long totalCustomers) {
		this.totalCustomers = totalCustomers;
	}

	public Long getTotalEmployees() {
		return totalEmployees;
	}

	public void setTotalEmployees(Long totalEmployees) {
		this.totalEmployees = totalEmployees;
	}

	public BigDecimal getTotalRevenue() {
		return totalRevenue;
	}

	public void setTotalRevenue(BigDecimal totalRevenue) {
		this.totalRevenue = totalRevenue;
	}

  
}