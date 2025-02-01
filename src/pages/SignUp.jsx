import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../Utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SIGNUP_IMG } from "../Utils/Constants";

const SignUpStyle = {
  mainDiv: `flex justify-center items-center min-h-screen bg-red-300 p-4`,
  container: `flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl md:rounded-4xl overflow-hidden`,
  leftSide: `hidden md:block md:w-1/2`,
  leftImage: `w-full h-full object-cover`,
  rightSide: `w-full md:w-1/2 p-6 sm:p-8`,
  signUpText: `text-2xl sm:text-3xl font-semibold text-gray-700 text-center`,
  form: `mt-4 sm:mt-6`,
  label: `block text-gray-700 text-sm sm:text-base`,
  inputField: `w-full px-3 py-2 sm:px-4 sm:py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`,
  button: `w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200`,
  para: `text-center text-gray-600 mt-4 text-sm sm:text-base`,
  link: `text-center text-gray-600 mt-4 text-sm sm:text-base`,
  margin: `mt-4`
}


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all required fields!", { position: "top-center" });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          uid: user.uid,
          email: user.email,
          name: name,
        });

        toast.success("User Registered Successfully!", { position: "top-center" });
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className={SignUpStyle.mainDiv}>
      <div className={SignUpStyle.container}>
        <div className={SignUpStyle.leftSide}>
          <img
            src={SIGNUP_IMG}
            alt="Sign Up"
            className={SignUpStyle.leftImage}
          />
        </div>

        {/* Right Side Form */}
        <div className={SignUpStyle.rightSide}>
          <h2 className={SignUpStyle.signUpText}>
            Sign Up
          </h2>
          <form onSubmit={handleRegister} className={SignUpStyle.form}>
            <div>
              <label className={SignUpStyle.label}>Full Name</label>
              <input
                type="text"
                className={SignUpStyle.inputField}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={SignUpStyle.margin}>
              <label className={SignUpStyle.label}>Email</label>
              <input
                type="email"
                className={SignUpStyle.inputField}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={SignUpStyle.margin}>
              <label className={SignUpStyle.label}>Password</label>
              <input
                type="password"
                className={SignUpStyle.inputField}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={SignUpStyle.button}
            >
              Sign Up
            </button>
          </form>
          <p className={SignUpStyle.para}>
            Already have an account?{" "}
            <Link to="/signIn" className={SignUpStyle.link}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;