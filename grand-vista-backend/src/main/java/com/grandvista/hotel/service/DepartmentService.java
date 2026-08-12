package com.grandvista.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.entity.Department;
import com.grandvista.hotel.repository.DepartmentRepository;

@Service
public class DepartmentService {
	
	@Autowired
    private DepartmentRepository departmentRepository;

    public Department addDepartment(Department department) {
        return departmentRepository.save(department);
    }

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

}
