import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import {
    getAllDepartments,
    addDepartment
} from "../../services/departmentService";

function Departments() {

    const [departments, setDepartments] = useState([]);
    const [search, setSearch] = useState("");

    const [department, setDepartment] = useState({
        departmentName: "",
        description: ""
    });

    useEffect(() => {
        loadDepartments();
    }, []);

    const loadDepartments = async () => {

        try {

            const response = await getAllDepartments();
            setDepartments(response.data);

        } catch (error) {

            console.error(error);
        }
    };

    const handleChange = (e) => {

        setDepartment({
            ...department,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addDepartment(department);

            alert("Department Added Successfully");

            loadDepartments();

            setDepartment({
                departmentName: "",
                description: ""
            });

        } catch (error) {

            console.error(error);

        }

    };

    const filteredDepartments = departments.filter((dept) =>
        dept.departmentName
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
        dept.description
            ?.toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <Layout>

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            Department Management
                        </h2>

                        <p className="text-muted">
                            Manage all hotel departments
                        </p>

                    </div>

                    <div className="card shadow-sm border-0 bg-warning text-dark">

                        <div className="card-body text-center">

                            <h3 className="fw-bold mb-0">
                                {departments.length}
                            </h3>

                            <small>Total Departments</small>

                        </div>

                    </div>

                </div>

                {/* Add Department */}

                <div className="card shadow border-0 mb-4">

                    <div className="card-header bg-dark text-white">

                        <h5 className="mb-0">
                            Add New Department
                        </h5>

                    </div>

                    <div className="card-body">

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                <div className="col-md-5 mb-3">

                                    <label className="form-label fw-semibold">
                                        Department Name
                                    </label>

                                    <input
                                        type="text"
                                        name="departmentName"
                                        className="form-control"
                                        placeholder="Enter Department Name"
                                        value={department.departmentName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-5 mb-3">

                                    <label className="form-label fw-semibold">
                                        Description
                                    </label>

                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        placeholder="Department Description"
                                        value={department.description}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-2 d-grid mb-3">

                                    <label className="form-label">&nbsp;</label>

                                    <button
                                        className="btn btn-warning fw-bold"
                                        type="submit"
                                    >
                                        Add
                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

                {/* Search */}

                <div className="card shadow border-0">

                    <div className="card-header bg-white">

                        <div className="row align-items-center">

                            <div className="col-md-6">

                                <h5 className="mb-0">
                                    Department List
                                </h5>

                            </div>

                            <div className="col-md-6">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search department..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                    </div>

                    <div className="card-body p-0">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle mb-0">

                                <thead className="table-dark">

                                    <tr>

                                        <th width="100">ID</th>
                                        <th>Department</th>
                                        <th>Description</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredDepartments.length > 0 ? (

                                        filteredDepartments.map((dept) => (

                                            <tr key={dept.departmentId}>

                                                <td>

                                                    <span className="badge bg-secondary fs-6">
                                                        #{dept.departmentId}
                                                    </span>

                                                </td>

                                                <td className="fw-semibold">
                                                    {dept.departmentName}
                                                </td>

                                                <td className="text-muted">
                                                    {dept.description}
                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="3"
                                                className="text-center py-5 text-muted"
                                            >
                                                No Departments Found
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );
}

export default Departments;