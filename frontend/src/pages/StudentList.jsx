import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await fetch(`http://localhost:4000/students?search=${debouncedSearch}`);
                const data = await res.json();
                setStudents(data);
            } catch (err) {
                console.error("Failed to fetch students:", err);
            }
        };

        fetchStudents();
    }, [debouncedSearch]);

    const deleteStudent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this student?")) return;

        try {
            const res = await fetch(`http://localhost:4000/students/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errorData = await res.json();
                alert(errorData.message || "Failed to delete student");
            } else {
                setStudents((prev) => prev.filter((s) => s.id !== id));
            }
        } catch (err) {
            console.error("Error deleting student:", err);
            alert("Error deleting student");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Students List</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((s) => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.age}</td>
                            <td>{s.address}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm me-2"
                                    onClick={() => navigate(`/view-student/${s.id}`)}
                                >
                                    View
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteStudent(s.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {students.length === 0 && (
                <p className="text-center mt-3">No students found!</p>
            )}
        </div>
    );
}

export default StudentList;
