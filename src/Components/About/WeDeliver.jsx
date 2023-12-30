// import React from "react";
import check1 from "./Images/check 1.png";
import group1 from "./Images/group1.png";
import delivery from "./Images/delivery.png";


export const WeDelvieredYou = () => {
    return (
        <div className="relative w-screen top-[-378px] left-[10%] ">
            <div className="relative w-screen h-[211px] top-[80px] left-0 text-left">
                <p className="relative w-[558px]  left-0 font-heading-02-heading-02-600 font-[number:var(--heading-02-heading-02-600-font-weight)] text-gray-scalegray-900 text-[length:var(--heading-02-heading-02-600-font-size)] tracking-[var(--heading-02-heading-02-600-letter-spacing)] leading-[var(--heading-02-heading-02-600-line-height)] [font-style:var(--heading-02-heading-02-600-font-style)]">
                    We Deliver, <br/> You Enjoy Your Order.
                </p>
                <p className="absolute w-[536px] top-[160px]  font-body-medium-body-medium-400 font-[number:var(--body-medium-body-medium-400-font-weight)] text-gray-scalegray-600 text-[length:var(--body-medium-body-medium-400-font-size)] tracking-[var(--body-medium-body-medium-400-letter-spacing)] leading-[var(--body-medium-body-medium-400-line-height)] [font-style:var(--body-medium-body-medium-400-font-style)]">
                    Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris
                    sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                </p>

                <div className="inline-flex flex-col items-start gap-[8px] absolute top-[260px] left-0 text-left">
                    <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                        <div className="relative w-[20px] h-[20px]">
                            <div className="relative h-[20px] rounded-[100px]">
                                <div className="absolute w-[20px] h-[20px] top-0 left-0 bg-brandingsuccess rounded-[100px] opacity-10" />
                                <img className="absolute w-[12px] h-[12px] top-[4px] left-[4px]" alt="Check" src={check1} />
                            </div>
                        </div>
                        <div className="relative w-[508px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-scalegray-600 text-[14px] tracking-[0] leading-[19.6px]">
                            Sed in metus pellentesque.
                        </div>
                    </div>

                    <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto] ">
                        <div className="relative w-[20px] h-[20px]">
                            <div className="relative h-[20px] rounded-[100px]">
                                <div className="absolute w-[20px] h-[20px] top-0 left-0 bg-brandingsuccess rounded-[100px] opacity-10" />
                                <img className="absolute w-[12px] h-[12px] top-[4px] left-[4px]" alt="Check" src={check1}  />
                            </div>
                        </div>
                        <p className="relative w-[508px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-scalegray-600 text-[14px] tracking-[0] leading-[19.6px]">
                            Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                        </p>
                    </div>

                    <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto] top-[-12px]">
                        <div className="relative w-[20px] h-[20px]">
                            <div className="relative h-[20px] rounded-[100px]">
                                <div className="absolute w-[20px] h-[20px] top-0 left-0 bg-brandingsuccess rounded-[100px] opacity-10" />
                                <img className="absolute w-[12px] h-[12px] top-[4px] left-[4px]" alt="Check" src={check1}  />
                            </div>
                        </div>
                        <p className="relative w-[508px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-scalegray-600 text-[14px] tracking-[0] leading-[19.6px]">
                            Maecenas ut nunc fringilla erat varius.
                        </p>
                    </div>
                </div>

                <button className="inline-flex items-center justify-center gap-[16px] px-[40px] py-[16px] absolute top-[380px] left-0 bg-brandingsuccess rounded-[43px] all-[unset] box-border">
                    <div className="relative w-fit mt-[-0.50px] font-body-medium-body-medium-600 font-[number:var(--body-medium-body-medium-600-font-weight)] text-gray-scalewhite text-[length:var(--body-medium-body-medium-600-font-size)] tracking-[var(--body-medium-body-medium-600-letter-spacing)] leading-[var(--body-medium-body-medium-600-line-height)] whitespace-nowrap [font-style:var(--body-medium-body-medium-600-font-style)]">
                        <a href="#" >Shop Now </a>
                    </div>
                    <img className="relative w-[16.5px] h-[13.55px] mr-[-0.75px]" alt="Group" src={group1} />
                </button>
            </div>
            <img className="absolute w-[815px] h-[580px] top-0 left-[690px]" alt="Image" src={delivery} />
        </div>
    );
};
