// import React from "react";
import check1 from "./Images/check 1.png";
import group1 from "./Images/group1.png";
import delivery from "./Images/delivery.png";
// import { useThemeHook } from "../GlobalComponents/ThemeProvider";



export const WeDelvieredYou = () => {
    // const [theme] = useThemeHook()

    return (
        <div className="self-center w-full ml-[10%] max-w-[1476px] mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
                        <div className="text-black text-5xl font-semibold leading-[58px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                            We Delivered, You Enjoy Your Order.
                        </div>
                        <div className="text-stone-500 text-base leading-6 self-stretch mt-7 max-md:max-w-full">
                            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                            ultrices consectetur velit dapibus eu. Mauris sollicitudin
                            dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                            auctor bibendum nunc eget elementum.
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-2 mt-6 max-md:max-w-full max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src={check1}
                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-stone-500 text-sm leading-5 grow max-md:max-w-full">
                                Sed in metus pellentesque.
                            </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-2 mt-4 max-md:max-w-full max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src={check1}
                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-stone-500 text-sm leading-5 grow max-md:max-w-full">
                                Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                            </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-2 mt-4 max-md:max-w-full max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src={check1}
                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-stone-500 text-sm leading-5 grow max-md:max-w-full">
                                Maecenas ut nunc fringilla erat varius.
                            </div>
                        </div>
                        <div className="justify-center items-stretch bg-orange-500 flex gap-4 mt-8 px-10 py-4 rounded-[43px] self-start max-md:px-5">
                            <div className="text-white text-base font-semibold leading-5">
                                Shop Now
                            </div>
                            <img
                                loading="lazy"
                                src={group1}
                                className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[63%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                        loading="lazy"
                        src={delivery}
                        className="aspect-[1.48] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                    />
                </div>
            </div>
        </div>
        // <div className="relative w-screen top-[-378px] left-[10%] ">
        //     <div className="relative w-screen h-[211px] top-[80px] left-0 text-left">
        //         <p  style={{ color: theme ? "#fff" : "" }} className="relative w-[558px]  left-0 font-heading-02-heading-02-600 font-[number:var(--heading-02-heading-02-600-font-weight)] text-gray-scalegray-900 text-[length:var(--heading-02-heading-02-600-font-size)] tracking-[var(--heading-02-heading-02-600-letter-spacing)] leading-[var(--heading-02-heading-02-600-line-height)] [font-style:var(--heading-02-heading-02-600-font-style)]">
        //             We Deliver, <br/> You Enjoy Your Order.
        //         </p>
        //         <p  style={{ color: theme ? "#fff" : "" }} className="absolute w-[536px] top-[160px]  font-body-medium-body-medium-400 font-[number:var(--body-medium-body-medium-400-font-weight)] text-gray-scalegray-600 text-[length:var(--body-medium-body-medium-400-font-size)] tracking-[var(--body-medium-body-medium-400-letter-spacing)] leading-[var(--body-medium-body-medium-400-line-height)] [font-style:var(--body-medium-body-medium-400-font-style)]">
        //             Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris
        //             sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
        //         </p>

        //         <div className="inline-flex flex-col items-start gap-[8px] absolute top-[260px] left-0 text-left">
        //             <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
        //                 <div className="relative w-[20px] h-[20px]">
        //                     <div className="relative h-[20px] rounded-[100px]">
        //                         <div className="absolute w-[20px] h-[20px] top-0 left-0 bg-brandingsuccess rounded-[100px] opacity-10" />
        //                         <img className="absolute w-[12px] h-[12px] top-[4px] left-[4px]" alt="Check" src={check1} />
        //                     </div>
        //                 </div>
        //                 <div style={{ color: theme ? "#fff" : "" }}  className="relative w-[508px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-scalegray-600 text-[14px] tracking-[0] leading-[19.6px]">
        //                     Sed in metus pellentesque.
        //                 </div>
        //             </div>

        //             <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto] ">
        //                 <div className="relative w-[20px] h-[20px]">
        //                     <div className="relative h-[20px] rounded-[100px]">
        //                         <div className="absolute w-[20px] h-[20px] top-0 left-0 bg-brandingsuccess rounded-[100px] opacity-10" />
        //                         <img className="absolute w-[12px] h-[12px] top-[4px] left-[4px]" alt="Check" src={check1}  />
        //                     </div>
        //                 </div>
        //                 <p  style={{ color: theme ? "#fff" : "" }}  className="relative w-[508px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-scalegray-600 text-[14px] tracking-[0] leading-[19.6px]">
        //                     Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
        //                 </p>
        //             </div>

        //             <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto] top-[-12px]">
        //                 <div className="relative w-[20px] h-[20px]">
        //                     <div className="relative h-[20px] rounded-[100px]">
        //                         <div className="absolute w-[20px] h-[20px] top-0 left-0 bg-brandingsuccess rounded-[100px] opacity-10" />
        //                         <img className="absolute w-[12px] h-[12px] top-[4px] left-[4px]" alt="Check" src={check1}  />
        //                     </div>
        //                 </div>
        //                 <p  style={{ color: theme ? "#fff" : "" }} className="relative w-[508px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-scalegray-600 text-[14px] tracking-[0] leading-[19.6px]">
        //                     Maecenas ut nunc fringilla erat varius.
        //                 </p>
        //             </div>
        //         </div>

        //         <button className="inline-flex items-center justify-center gap-[16px] px-[40px] py-[16px] absolute top-[380px] left-0 bg-brandingsuccess rounded-[43px] all-[unset] box-border">
        //             <div className="relative w-fit mt-[-0.50px] font-body-medium-body-medium-600 font-[number:var(--body-medium-body-medium-600-font-weight)] text-gray-scalewhite text-[length:var(--body-medium-body-medium-600-font-size)] tracking-[var(--body-medium-body-medium-600-letter-spacing)] leading-[var(--body-medium-body-medium-600-line-height)] whitespace-nowrap [font-style:var(--body-medium-body-medium-600-font-style)]">
        //                 <a href="#" >Shop Now </a>
        //             </div>
        //             <img className="relative w-[16.5px] h-[13.55px] mr-[-0.75px]" alt="Group" src={group1} />
        //         </button>
        //     </div>
        //     <img className="absolute w-[815px] h-[580px] top-0 left-[690px]" alt="Image" src={delivery} />
        // </div>

    );
};
