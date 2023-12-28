// import React from "react";
import { Heading } from "./Heading";
import VectorUp from "../Images/Vectorup.png";
export const SidePrice = () => {
  return (
    <div className="flex-col gap-[30px] pt-0 pb-[24px] px-0 relative mt-28 ">
      <Heading className="!flex-[0_0_auto] !shadow-[0px_-1px_0px_#e5e5e5] !pt-[20px] !pb-[4px] !px-0 ml-12" text="Price" vector={VectorUp} />
      <div className="relative w-[312px] h-[18px]">
        <div className="relative h-[18px] mt-4" >
          <div className="absolute w-[312px] h-[6px] top-[6px] left-0 bg-gray-scalegray-100 rounded-[15px]  ml-8" />
          <div className="absolute w-[200px] h-[6px] top-[6px] left-[42px] bg-brandingsuccess rounded-[15px]  ml-5 " />
          <div className="absolute w-[18px] h-[18px] top-0 left-[33px] bg-gray-scalewhite rounded-[9px] border-2 border-solid border-brandingsuccess  ml-5" />
          <div className="absolute w-[18px] h-[18px] top-0 left-[231px] bg-gray-scalewhite rounded-[9px] border-2 border-solid border-brandingsuccess  ml-5" />
        </div>
      </div>
      <p className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[21px] whitespace-nowrap  mt-4">
        <span className="text-[#4c4c4c] font-body-small-body-small-400 [font-style:var(--body-small-body-small-400-font-style)] font-[number:var(--body-small-body-small-400-font-weight)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] text-[length:var(--body-small-body-small-400-font-size)]  ml-5">
          Price:
        </span>
        <span className="font-body-small-body-small-500 font-[number:var(--body-small-body-small-500-font-weight)] text-black [font-style:var(--body-small-body-small-500-font-style)] tracking-[var(--body-small-body-small-500-letter-spacing)] leading-[var(--body-small-body-small-500-line-height)] text-[length:var(--body-small-body-small-500-font-size)]">
          {" "} 50 — 1,500
        </span>
      </p>
    </div>
  );
};
