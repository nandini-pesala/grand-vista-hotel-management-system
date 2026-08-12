package com.grandvista.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.entity.Department;
import com.grandvista.hotel.service.DepartmentService;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
	
	 @Autowired
	    private DepartmentService departmentService;

	    @PostMapping
	    public Department addDepartment(
	            @RequestBody Department department) {

	        return departmentService.addDepartment(department);
	    }

	    @GetMapping
	    public List<Department> getAllDepartments() {

	        return departmentService.getAllDepartments();
	    }

}
