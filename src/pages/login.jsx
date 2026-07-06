import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await login(email, password);

            console.log(data);

            navigate("/admin");

        } catch (error) {
            console.error(error);

            alert("Email atau Password salah");
        }
    };

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-zinc-700 rounded-xl shadow-lg p-8">

            <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
                Admin Login
            </h1>

            <p className="text-white/50 mt-2">
                Silakan masuk untuk mengelola portofolio
            </p>
            </div>

            <form
            onSubmit={handleLogin}
            className="space-y-5"
            >

                <div>
                    <label className="block mb-2 font-medium text-white">
                    Email
                    </label>

                    <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium text-white">
                    Password
                    </label>

                    <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-600 transition"
                >
                    Login
                </button>

            </form>
        </div>
        </div>
    );
};

export default Login;