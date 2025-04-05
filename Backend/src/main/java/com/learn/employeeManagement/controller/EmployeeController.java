package com.learn.employeeManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.learn.employeeManagement.exception.ResourceNotFoundException;
import com.learn.employeeManagement.model.Employee;
import com.learn.employeeManagement.repository.EmployeeRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	@GetMapping("/test")
	public String test() {
		return "api testing";
	}
	
	@PostMapping("/addEmployee")
    public Employee saveEmployee(@RequestBody Employee emp) {
    	return employeeRepository.save(emp);	
    }
	
	//get employee by id 
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("employee not exist with id:"+id));
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails){
		Employee updateEmployee=employeeRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("employee not exist with id:"+id));
		updateEmployee.setFirstName(employeeDetails.getFirstName());
		updateEmployee.setEmail(employeeDetails.getLastName());
		updateEmployee.setEmail(employeeDetails.getEmail());
		employeeRepository.save(updateEmployee);
		return ResponseEntity.ok(updateEmployee);
	}
	
	@DeleteMapping("/employees/{id} ")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("employee not exist with id:"+id));
		System.out.println("runs");
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
