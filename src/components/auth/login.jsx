import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Import assets (place these in `src/assets` or `public` folder)
import Illustration from "../../assets/images/Illustration.png"; // Adjust path as needed
import Mail from "../../assets/icons/email.svg";
import Eye from "../../assets/icons/eye.svg";
import Lock from "../../assets/icons/lock1.svg";
// import Google from "../assets/icons/google.svg";
// import Facebook from "../assets/icons/facebook.svg";


function SignIn() {
  const navigate = useNavigate(); // Replaced useRouter with useNavigate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle actual sign-in logic here
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Left Side - Illustration */}
      <div className="w-1/2 h-full flex justify-center items-center bg-signupGradient p-10">
        <div className="flex flex-col justify-center items-center text-white text-center space-y-6">
          <img
            src={Illustration}
            width={400}
            height={400}
            alt="Illustration"
            className="max-w-full h-auto"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-start">
              Sign In to BMDL
            </h2>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Welcome Back to BMDL
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="relative">
              {/* Mail/ID Icon */}
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={Mail} width={20} height={20} alt="email or student ID" />
              </div>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Enter your email or student ID"
                className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none"
                {...register("emailOrStudentId", {
                  required: "Email or Student ID is required",
                  validate: (value) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const studentIdRegex = /^[A-Za-z0-9]{6,12}$/;
                    if (!emailRegex.test(value) && !studentIdRegex.test(value)) {
                      return "Please enter a valid email or student ID (6-12 alphanumeric characters)";
                    }
                    return true;
                  },
                })}
              />

              {/* Error Message */}
              {errors.emailOrStudentId && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.emailOrStudentId.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={Lock} width={20} height={20} alt="lock" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className={`w-full px-10 py-3 border rounded-md focus:outline-none ${
                  errors.password ? "border-pink-500" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Use at least 8 characters",
                  },
                })}
              />

              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={Eye} width={20} height={20} alt="eye" />
              </div>
              {errors.password && (
                <p className="text-sm text-pink-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-pink-100 text-black font-semibold rounded-md hover:bg-pink-200 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          {/* <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">Or Login with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div> */}

          {/* Social Buttons */}
          {/* <div className="flex justify-between gap-4">
            <button className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100">
              <div>
                <img src={Google} width={20} height={20} alt="google" />
              </div>
              <div className="text-sm font-semibold ml-2">Google</div>
            </button>
            <button className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100">
              <div>
                <img src={Facebook} width={20} height={20} alt="facebook" />
              </div>
              <div className="text-sm font-semibold ml-2">Facebook</div>
            </button>
          </div> */}

          <div className="text-sm text-center mt-6">
            Not a member?{" "}
            <span
              className="text-pink-600 font-semibold cursor-pointer"
              onClick={() => navigate("/signup")} // Replaced router.push with navigate
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;