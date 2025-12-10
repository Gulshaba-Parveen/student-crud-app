import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
    const [form, setForm] = useState({
        name: "",
        age: "",
        email: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:4000/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert("Student created successfully!");
            navigate("/student-list");
        } else {
            alert("Error creating student!");
        }
    };

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow col-md-6 mx-auto">
                <h3 className="text-center">Create Student</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        className="form-control mb-3"
                        placeholder="Student Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        name="age"
                        type="number"
                        className="form-control mb-3"
                        placeholder="Age"
                        value={form.age}
                        onChange={handleChange}
                    />

                    <input
                        name="email"
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <textarea
                        name="address"
                        className="form-control mb-3"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                    />

                    <button className="btn btn-success w-100">Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudent;
