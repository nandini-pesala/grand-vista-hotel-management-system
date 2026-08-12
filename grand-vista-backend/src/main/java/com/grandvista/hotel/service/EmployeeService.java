package com.grandvista.hotel.service;

import java.util.List;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.entity.Employee;
import com.grandvista.hotel.entity.User;
import com.grandvista.hotel.entity.Department;
import com.grandvista.hotel.repository.EmployeeRepository;
import com.grandvista.hotel.repository.UserRepository;
import com.grandvista.hotel.repository.DepartmentRepository;
import com.grandvista.hotel.dto.EmployeeDTO;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private DepartmentRepository departmentRepository;

    public Employee addEmployee(EmployeeDTO dto) {

        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole("EMPLOYEE");
        user.setStatus("ACTIVE");

        userRepository.save(user);

        Department department = departmentRepository
                .findById(dto.getDepartmentId())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        Employee employee = new Employee();

        employee.setEmployeeId(generateEmployeeId());
        employee.setEmployeeName(dto.getEmployeeName());
        employee.setPhone(dto.getPhone());
        employee.setSalary(dto.getSalary());
        employee.setRole(dto.getRole());
        employee.setDepartment(department);
        employee.setUser(user);
        employee.setStatus("ACTIVE");
        employee.setJoiningDate(LocalDate.now());

        return employeeRepository.save(employee);
    }
    
    private String generateEmployeeId() {

        String lastId = employeeRepository.findLastEmployeeId();

        if (lastId == null) {
            return "EMP001";
        }

        int number = Integer.parseInt(lastId.substring(3));

        number++;

        return String.format("EMP%03d", number);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}