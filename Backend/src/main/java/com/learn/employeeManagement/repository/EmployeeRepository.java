package com.learn.employeeManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.employeeManagement.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	

}
