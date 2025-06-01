import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Illustration from "../../assets/images/Illustration.png";
import Mail from "../../assets/icons/email.svg";
import Eye from "../../assets/icons/eye.svg";
import Lock from "../../assets/icons/lock1.svg";
import User from "../../assets/icons/user.svg";
// import Google from "../../../public/assests/icons/google.svg";
// import Facebook from "../../../public/assests/icons/facebook.svg";

function SignUp() {
 const navigate = useNavigate(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // handle actual signup here
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
          />
          <div>
           <h2 className="text-2xl font-semibold mb-6 ">Sign Up for BMDL</h2>

            <p> Create your FoodSensor account</p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white px-6 ">
        <div className="w-full max-w-md space-y-6 text-center">
          <h2 className="text-2xl font-semibold mb-6 ">
            JOIN US
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={User} width={20} height={20} alt="User" />
              </div>
              <input
                type="text"
                placeholder="username"
                className="w-full px-10 py-3 border rounded-md focus:outline-none"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              {/* Mail Icon */}
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={Mail} width={20} height={20} alt="email" />
              </div>

              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none"
                {...register("email", { required: "Email is required" })}
              />

              {/* Error Message */}
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
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

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src={Eye} width={20} height={20} alt="eye" />
              </div>
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* Toggle icon here if needed */}
              </div>
              {errors.password && (
                <p className="text-sm text-pink-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* confpassword */}

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={Lock} width={20} height={20} alt="lock" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="confirm password"
                className={`w-full px-10 py-3 border rounded-md focus:outline-none ${
                  errors.password ? "border-pink-500" : ""
                }`}
                {...register("password", {
                  required: "confirm Password is required",
                  minLength: {
                    value: 8,
                    message: "Use at least 8 characters",
                  },
                })}
              />

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src={Eye} width={20} height={20} alt="eye" />
              </div>
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* Toggle icon here if needed */}
              </div>
              {errors.password && (
                <p className="text-sm text-pink-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>


              {/* Institution Name */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={User} width={20} height={20} alt="User" />
              </div>
              <input
                type="text"
                placeholder=" Institution Name"
                className="w-full px-10 py-3 border rounded-md focus:outline-none"
                {...register("name", { required: "Institution name is required" })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>




            {/* institiID */}

              {/* Name */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={User} width={20} height={20} alt="User" />
              </div>
              <input
                type="text"
                placeholder="Institution Id"
                className="w-full px-10 py-3 border rounded-md focus:outline-none"
                {...register("name", { required: "Student Id is required" })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                className="mt-1"
                {...register("terms", {
                  required: "You must agree to the terms",
                })}
              />
              <p className="text-sm">
                By creating an account you agree to the{" "}
                <span className="font-semibold underline cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and our{" "}
                <span className="font-semibold underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
            {errors.terms && (
              <p className="text-sm text-red-500">{errors.terms.message}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-pink-100 text-black font-semibold rounded-md hover:bg-pink-200 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          {/* <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">Or sign up with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div> */}

          {/* Social Buttons */}
          {/* <div className="flex justify-between gap-4">
            <button className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100">
              <div className="div">
                <img src={Google} width={20} height={20} alt="google" />
              </div>
              <div className="text-sm font-semibold ml-2">

                Google
              </div>
            </button>
            <button className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100">
              <div className="div">
                <img src={Facebook} width={20} height={20} alt="facebook" />
              </div>
              <div className="text-sm font-semibold ml-2">Facebook</div>
            </button>
          </div> */}

          <div className="text-sm text-center mt-6">
            Already have an account?{" "}
            <span
              className="text-pink-600 font-semibold cursor-pointer"
              onClick={() =>navigate("/login")}
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
