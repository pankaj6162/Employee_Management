import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from './service/EmployeeService';

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams(); // ✅ Get ID from the URL
  const navigate = useNavigate(); // ✅ For navigation

  useEffect(() => {
    if (id && id !== 'undefined') {
      // ✅ Ensure id is valid
      EmployeeService.getEmployeeById(id)
        .then((response) => {
          const employee = response.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmail(employee.email);
        })
        .catch((error) => {
          console.error('Error fetching employee:', error);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };

    if (id) {
      // ✅ Update existing employee
      EmployeeService.updateEmployee(id, employee)
        .then(() => navigate('/employees'))
        .catch((error) => console.log(error));
    } else {
      // ✅ Create new employee
      EmployeeService.createEmployee(employee)
        .then(() => navigate('/employees'))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <h2 className="text-center">{id ? 'Update Employee' : 'Add Employee'}</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={handleSubmit}>
          {id ? 'Update' : 'Save'}
        </button>
        <Link
          to="/employees"
          className="btn btn-danger"
          style={{ marginLeft: '10px' }}
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddEmployeeComponent;
