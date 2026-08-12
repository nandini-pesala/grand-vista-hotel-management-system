package com.grandvista.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.Department;

public interface DepartmentRepository  extends JpaRepository<Department, Integer>{

}
