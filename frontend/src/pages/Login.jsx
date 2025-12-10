import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("All fields are required");
            return;
        }
        navigate("/landing");
    };

    return (
        <div className="login-container">
            <div className="login-card shadow-lg">
                <h2 className="text-center mb-4 login-title">Welcome Back 👋</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        className="form-control mb-3 input-field"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="form-control mb-4 input-field"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn btn-info w-100 login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
