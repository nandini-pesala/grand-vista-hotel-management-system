package com.grandvista.hotel.service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.entity.Employee;
import com.grandvista.hotel.dto.DashboardDTO;
import com.grandvista.hotel.repository.CustomerRepository;
import com.grandvista.hotel.repository.EmployeeRepository;
import com.grandvista.hotel.repository.PaymentRepository;
import com.grandvista.hotel.repository.RoomRepository;
import com.grandvista.hotel.repository.BookingRepository;
import com.grandvista.hotel.repository.FoodOrderRepository;
import com.grandvista.hotel.repository.HousekeepingRequestRepository;
import com.grandvista.hotel.repository.MaintenanceRequestRepository;

@Service
public class ManagerService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PaymentRepository paymentRepository;
    
    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired
    private FoodOrderRepository foodOrderRepository;
    
    @Autowired
    private HousekeepingRequestRepository housekeepingRepository;
    
    
    @Autowired
    private MaintenanceRequestRepository maintenanceRepository;

    public DashboardDTO getDashboard() {

        DashboardDTO dto =
                new DashboardDTO();

        dto.setTotalRooms(
                roomRepository.count());

        dto.setAvailableRooms(
                roomRepository.countByRoomStatus(
                        "AVAILABLE"));

        dto.setOccupiedRooms(
                roomRepository.countByRoomStatus(
                        "OCCUPIED"));

        dto.setTotalCustomers(
                customerRepository.count());

        dto.setTotalEmployees(
                employeeRepository.count());
        
        dto.setTotalBookings(
                bookingRepository.count());

        dto.setCheckedInBookings(
                bookingRepository
                .countByBookingStatus(
                        "CHECKED_IN"));

        dto.setCheckedOutBookings(
                bookingRepository
                .countByBookingStatus(
                        "CHECKED_OUT"));
        
        dto.setPendingOrders(
                foodOrderRepository
                .countByOrderStatus(
                        "PENDING"));

        dto.setDeliveredOrders(
                foodOrderRepository
                .countByOrderStatus(
                        "DELIVERED"));
        
        dto.setPendingCleaning(
                housekeepingRepository
                .countByStatus("PENDING"));

        dto.setCompletedCleaning(
                housekeepingRepository
                .countByStatus("COMPLETED"));
        
        dto.setPendingMaintenance(
                maintenanceRepository
                .countByStatus("PENDING"));

        dto.setCompletedMaintenance(
                maintenanceRepository
                .countByStatus("COMPLETED"));

        BigDecimal revenue =
                paymentRepository
                .getTotalRevenue();

        dto.setTotalRevenue(revenue);

        return dto;
    }
    
    
    public List<Employee> getEmployees() {

        return employeeRepository.findAll();
    }

    public Map<String, Long> foodStatistics() {

        Map<String, Long> map = new HashMap<>();

        map.put("PENDING",
                foodOrderRepository.countByOrderStatus("PENDING"));

        map.put("PREPARING",
                foodOrderRepository.countByOrderStatus("PREPARING"));

        map.put("READY",
                foodOrderRepository.countByOrderStatus("READY"));

        map.put("DELIVERED",
                foodOrderRepository.countByOrderStatus("DELIVERED"));

        return map;
    }

    public Map<String, Long> housekeepingStatistics() {

        Map<String, Long> map = new HashMap<>();

        map.put("PENDING",
                housekeepingRepository.countByStatus("PENDING"));

        map.put("COMPLETED",
                housekeepingRepository.countByStatus("COMPLETED"));

        return map;
    }

    public Map<String, Long> maintenanceStatistics() {

        Map<String, Long> map = new HashMap<>();

        map.put("PENDING",
                maintenanceRepository.countByStatus("PENDING"));

        map.put("COMPLETED",
                maintenanceRepository.countByStatus("COMPLETED"));

        return map;
    }
    
}