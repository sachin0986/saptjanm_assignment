import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { SIGNIN_IMG } from "../Utils/Constants";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("Login successful");
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-300 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl md:rounded-4xl overflow-hidden">
        {/* Left Side Image (Hidden on Mobile) */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={SIGNIN_IMG}
            alt="Sign In"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 text-center">
            Sign In
          </h2>
          <form onSubmit={handleSignIn} className="mt-4 sm:mt-6">
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm sm:text-base">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">Wrong Email or Password!</p>
            )}
            <button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;