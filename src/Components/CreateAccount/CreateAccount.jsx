import React from "react";

const CreateAccount = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-16">
      <div
        style={{ boxShadow: "0 0 3px 0 rgba(0, 38, 3, 0.5)" }}
        className="rounded-lg"
      >
        <h3 className="font-semibold text-3xl flex justify-center pt-3">
          Create Account
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
            className="border-2 placeholder-red-400 outline-none mb-0 p-2 m-5 rounded-lg"
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            className="border-2 placeholder-red-400 outline-none p-2 m-5 rounded-lg"
          />
        </div>
        <div className="flex pl-5 mb-3">
          <input type="checkbox" />
          <p className="text-[#666666] text-sm pl-2">
            Accept all terms & conditions
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#FF6316] rounded-full text-sm font-semibold w-[90%] p-2 text-white mt-2 mb-1">
            Create Account
          </button>
        </div>
        <p className="text-[#666666] text-sm flex justify-center m-3 pb-1 ">
          Already have account?
          <span className="font-semibold text-black pl-1"> Login</span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
