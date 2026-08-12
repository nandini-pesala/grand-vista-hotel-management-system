import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { getAllEmployees, addEmployee } from "../../services/employeeService";

function Employees() {

    const [employees, setEmployees] = useState([]);

    const [search, setSearch] = useState("");

    const [employee, setEmployee] = useState({
        employeeName: "",
        email: "",
        password: "",
        phone: "",
        salary: "",
        role: "",
        departmentId: ""
    });

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const response = await getAllEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addEmployee(employee);

            alert("Employee Added Successfully");

            loadEmployees();

            setEmployee({
                employeeName: "",
                email: "",
                password: "",
                phone: "",
                salary: "",
                role: "",
                departmentId: ""
            });

        } catch (error) {
            console.error(error);
        }
    };

    const filteredEmployees = employees.filter(emp =>
        emp.employeeName?.toLowerCase().includes(search.toLowerCase()) ||
        emp.phone?.includes(search) ||
        emp.email?.toLowerCase().includes(search.toLowerCase()) ||
        emp.role?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <Layout>

            {/* Page Heading */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2 className="fw-bold mb-1">
                        Employee Management
                    </h2>

                    <p className="text-muted">
                        Manage hotel employees and staff records
                    </p>

                </div>

                <div className="card shadow-sm border-0 px-4 py-3">

                    <h6 className="text-muted mb-1">
                        Total Employees
                    </h6>

                    <h3 className="text-primary fw-bold mb-0">
                        {employees.length}
                    </h3>

                </div>

            </div>

            {/* Add Employee */}

            <div className="card shadow border-0 mb-5">

                <div className="card-header bg-dark text-white">

                    <h5 className="mb-0">
                        Add New Employee
                    </h5>

                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Employee Name
                                </label>

                                <input
                                    type="text"
                                    name="employeeName"
                                    className="form-control"
                                    placeholder="Enter employee name"
                                    value={employee.employeeName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={employee.email}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={employee.password}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    value={employee.phone}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Salary
                                </label>

                                <input
                                    type="number"
                                    name="salary"
                                    className="form-control"
                                    placeholder="Salary"
                                    value={employee.salary}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Department ID
                                </label>

                                <input
                                    type="number"
                                    name="departmentId"
                                    className="form-control"
                                    placeholder="Department ID"
                                    value={employee.departmentId}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Depatment
                                </label>

                                <select
                                    name="role"
                                    className="form-select"
                                    value={employee.role}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Department
                                    </option>

                                    <option value="RECEPTION">
                                        RECEPTION
                                    </option>

                                     <option value="HOUSEKEEPING">
                                        HOUSE KEEPING
                                    </option>

                                     <option value="KITCHEN">
                                        KITCHEN
                                    </option>

                                    <option value="ROOM_SERVICE">
                                        ROOM SERVICE
                                    </option>

                                    <option value="MAINTENANCE">
                                        MAINTENANCE
                                    </option>

                                     <option value="MANAGER">
                                        MANAGER
                                    </option>

                                </select>

                            </div>

                        </div>

                        <button
                            className="btn btn-warning fw-semibold px-4"
                            type="submit"
                        >
                            Add Employee
                        </button>

                    </form>

                </div>

            </div>

            {/* Search */}

            <div className="card shadow border-0">

                <div className="card-header bg-white">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <h5 className="fw-bold mb-0">
                                Employee List
                            </h5>

                        </div>

                        <div className="col-md-6">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Name, Email, Phone or Role..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </div>

                    </div>

                </div>

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Password</th>
                                <th>Department</th>
                                <th>Salary</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredEmployees.length > 0 ? (

                                filteredEmployees.map((employee) => (

                                    <tr key={employee.employeeId}>

                                        <td>
                                            #{employee.employeeId}
                                        </td>

                                        <td className="fw-semibold">
                                            {employee.employeeName}
                                        </td>

                                        <td>
                                            {employee.user.email}
                                        </td>

                                        <td>
                                            {employee.user.password}
                                        </td>

                                        <td>
                                            {employee.phone}
                                        </td>

                                        <td>

                                            <span className="badge bg-primary">
                                                {employee.role}
                                            </span>

                                        </td>

                                        <td>

                                            <span className="badge bg-success fs-6">
                                                ₹{employee.salary}
                                            </span>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center py-4 text-muted"
                                    >
                                        No employees found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </Layout>

    );
}

export default Employees;