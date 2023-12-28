import React from "react";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-16">
      <div
        style={{ boxShadow: "0 0 3px 0 rgba(0, 38, 3, 0.5)" }}
        className="rounded-lg"
      >
        <h3 className="font-semibold text-3xl flex justify-center pt-3">
          Sign In
        </h3>
        <div className="flex flex-col w-96">
          <input
            type="email"
            placeholder="Email"
            className="border-2 placeholder-red-400 outline-none p-2 m-5 mb-0 rounded-lg"
          />
          <input
            type="Password"
            placeholder="Password"
            className="border-2 placeholder-red-400 outline-none p-2 m-5 rounded-lg"
          />
        </div>
        <div className="flex pl-5 justify-between pr-5 mb-3">
          <div className="flex">
            <input type="checkbox" className="" />
            <p className="text-[#666666] text-sm">Remember me</p>
          </div>
          <p className="text-[#666666] text-sm">Forget Password</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#FF6316] rounded-full text-sm font-semibold w-[90%] p-2 text-white">
            Login
          </button>
        </div>
        <p className="text-[#666666] text-sm flex justify-center m-3">
          Don't have account?
          <span className="font-semibold text-black pl-1"> Register</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
