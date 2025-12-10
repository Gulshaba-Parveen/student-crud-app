import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
            <div className="card p-5 shadow-lg text-center bg-light" style={{ width: "500px" }}>
                <h3 className="mb-4">Student Records Dashboard 📚</h3>

                <button
                    className="btn btn-success w-100 mb-3"
                    onClick={() => navigate("/create-student")}
                >
                    ➕ Create Student
                </button>

                <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate("/student-list")}
                >
                    📄 View Student List
                </button>
            </div>
        </div>
    );
}

export default Landing;
