package com.grandvista.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.grandvista.hotel.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String> {

    long count();

    @Query(value = "SELECT employee_id FROM employees ORDER BY employee_id DESC LIMIT 1",
           nativeQuery = true)
    String findLastEmployeeId();

    Employee findByUserUserId(Integer userId);

}