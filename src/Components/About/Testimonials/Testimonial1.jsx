// import React from "react";
// import { Aoorw } from "./Aoorw";
// import { Property1Hover } from "./Property1Hover";
// import { TestimonialCard } from "./TestimonialCard";
import Group from "../Images/testimonials/Group.svg";
import Group2 from "../Images/testimonials/Group2.svg";
import Image1 from "../Images/testimonials/Image-1.svg";
import Image2 from "../Images/testimonials/Image-2.svg";
import Image3 from "../Images/testimonials/Image-3.svg";
import rating from "../Images/testimonials/star 10.svg";
import Vector from "../Images/testimonials/Vector.svg";



import { TestimonialsCard } from "../Testimonials/TestimonialsCard";

export const Testimonial1 = () => {
    return (
        <div className="inline-flex flex-col overflow-x-hidden mt-[-1px] items-center justify-center gap-[40px] px-0 py-[100px] relative bg-gray-scalegray-50">
            <div className="flex w-[980px]  ml-[-28px] items-center justify-between px-[300px] py-0 relative flex-[0_0_auto]">
                <div className="relative  mt-[-1.00px] font-heading-02-heading-02-600 font-[number:var(--heading-02-heading-02-600-font-weight)] text-gray-scalegray-900 text-[length:var(--heading-02-heading-02-600-font-size)] text-center tracking-[var(--heading-02-heading-02-600-letter-spacing)] leading-[var(--heading-02-heading-02-600-line-height)] whitespace-nowrap [font-style:var(--heading-02-heading-02-600-font-style)]">
                    Client Testimonail
                </div>
                <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
                    <div className="relative w-[45px] h-[45px] bg-gray-scalewhite rounded-[22.5px]">
                        <img className="absolute w-[16px] h-[14px] top-[15px] left-[15px]" alt="Group" src={Group2} />
                    </div> 
                    <div className="relative w-[45px] h-[45px] bg-brandingsuccess rounded-[22.5px]">
                    <img className="absolute w-[16px] h-[14px] top-[15px] left-[14px] " alt="Group" src={Group}/>
                    </div>    
                    
                 {/* <Property1Hover className="!relative !w-[45px] !h-[45px]" /> */}
                </div>
            </div>
            <div className="gap-[24px] inline-flex items-start relative flex-[0_0_auto]">
                <TestimonialsCard
                    className="!flex-[0_0_auto]"
                    image={Image1}
                    property1="default"
                    rating={rating}
                    vector={Vector}
                />
                <TestimonialsCard
                    className="!flex-[0_0_auto]"
                    image={Image2}
                    infoClassName="!mr-[-18.00px]"
                    property1="default"
                    rating={rating}
                    text="Dianne Russell"
                    vector={Vector}
                />
                <TestimonialsCard
                    className="!flex-[0_0_auto]"
                    image={Image3}
                    infoClassName="!mr-[-5.00px]"
                    property1="default"
                    rating={rating}
                    text="Eleanor Pena"
                    vector={Vector}
                />
            </div>
        </div>
    );
};
