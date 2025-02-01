import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { SIGNIN_IMG } from "../Utils/Constants";
import { Link } from "react-router-dom";


const SignInStyle = {
  mainDiv: `flex items-center justify-center min-h-screen bg-yellow-300 p-4`,
  container: `flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl md:rounded-4xl overflow-hidden`,
  leftSide: `hidden md:block md:w-1/2`,
  leftImage: `w-full h-full object-cover`,
  rightSide: `w-full md:w-1/2 p-6 sm:p-8`,
  rightHeading: `text-2xl sm:text-3xl font-semibold text-gray-700 text-center`,
  form: `mt-4 sm:mt-6`,
  label: `block text-gray-700 text-sm sm:text-base`,
  emailPass: `w-full px-3 py-2 sm:px-4 sm:py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`,
  wrong: `text-red-500 text-sm mt-2`,
  button: `w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200`,
  para: `text-center text-gray-600 mt-4 text-sm sm:text-base`,
  link: `text-blue-600 font-semibold hover:underline`,
}

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
    <div className={SignInStyle.mainDiv}>
      <div className={SignInStyle.container}>
        <div className={SignInStyle.leftSide}>
          <img
            src={SIGNIN_IMG}
            alt="Sign In"
            className={SignInStyle.leftImage}
          />
        </div>

        <div className={SignInStyle.rightSide}>
          <h2 className={SignInStyle.rightHeading}>
            Sign In
          </h2>
          <form onSubmit={handleSignIn} className={SignInStyle.form}>
            <div>
              <label className={SignInStyle.label}>Email</label>
              <input
                type="email"
                placeholder="Email"
                className={SignInStyle.emailPass}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className={SignInStyle.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                className={SignInStyle.emailPass}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className={SignInStyle.wrong}>Wrong Email or Password!</p>
            )}
            <button
              type="submit"
              className={SignInStyle.button}
            >
              Sign In
            </button>
          </form>
          <p className={SignInStyle.para}>
            Don't have an account?{" "}
            <Link to="/signup" className={SignInStyle.link}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;