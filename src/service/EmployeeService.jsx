import axios from 'axios';

const API_URL = 'http://localhost:8081/api/v1/employees';

const API_URL2 = 'http://localhost:8081/api/v1/addEmployee';

class EmployeeService {
  getEmployees() {
    return axios.get(API_URL);
  }

  createEmployee(employee) {
    return axios.post(API_URL2, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${API_URL}/${employeeId}`);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(`${API_URL}/${employeeId}`, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(`${API_URL}/${employeeId}`);
  }
}

export default new EmployeeService();
// This code defines a service class for managing employee data using Axios to make HTTP requests.
