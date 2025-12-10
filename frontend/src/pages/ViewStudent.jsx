import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewStudent() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/students/${id}`)
            .then((res) => res.json())
            .then((data) => setStudent(data));
    }, [id]);

    if (!student) return <div className="text-center mt-4">Loading...</div>;

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow col-md-6 mx-auto">
                <h3 className="text-center mb-3">Student Details</h3>

                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Address:</strong> {student.address}</p>
            </div>
        </div>
    );
}

export default ViewStudent;
