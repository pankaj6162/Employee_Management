package com.learn.employeeManagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.learn.employeeManagement.model.Employee;
import com.learn.employeeManagement.repository.EmployeeRepository;

@SpringBootApplication
public class EmployeeManagementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementApplication.class, args);
	}

	private EmployeeRepository employeeRepository;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//		Employee e=new Employee();
//		e.setFirstName("Ramesh");
//		e.setLastName("Singh");
//		e.setEmail("ramesh@gmail.com");
//		employeeRepository.save(e);

		
	}

}
