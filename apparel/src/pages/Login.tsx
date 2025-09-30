import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = (role: "user" | "admin") => {
    login(role);
    navigate(role === "admin" ? "/admin" : "/products");
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat bg-center md:bg-left flex items-center justify-end"
      style={{ backgroundImage: "url('/images/login-bg-bw.png')" }}
    >
      <div className="relative z-10 bg-white/20 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-md mr-20">
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="ECサイトロゴ" className="h-12" />
        </div>

        <h2 className="text-2xl font-playfair text-gray-900 text-center mb-8">
          Welcome Back
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-400 rounded-lg p-3 bg-white/40 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-400 rounded-lg p-3 bg-white/40 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              type="button"
              onClick={() => handleLogin("user")}
              className="w-full bg-black/90 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Login（user）
            </button>

            <button
              type="button"
              onClick={() => handleLogin("admin")}
              className="w-full bg-gray-300 text-black py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
            >
              Login（admin）
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-black hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
