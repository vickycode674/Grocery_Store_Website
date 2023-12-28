// import React from 'react';
import About1 from "./Images/About1.png";
import BG from "./Images/BG.png";
import About2 from "./Images/About2.png";
import leaf2 from "./Images/leaf2.png";
import delivery from "./Images/delivery-truck 1.png";
import Headphones from "./Images/Headphones 1.png";
import Package from "./Images/package.png";
import Shoppingbag from "./Images/shopping-bag.png";
import stars from "./Images/stars 1.png";

import { WeDelvieredYou } from "./WeDeliver";
// // import { Box } from "./Box/Box1";
import { Team } from "./Team";
import { Testimonial1 } from "./Testimonials/Testimonial1";
const About = () => {
    return (

        <div>

            <div className='relative w-[1164px] h-[492px] ml-40 mt-20 overflow-x-hidden'>

                <p className='absolute w-[607px] top-[36px] text-#000000 text-5xl font-bold text-left'>100% Trusted <br />Organic Food Store</p>

                <p className="absolute w-[390px] top-[180px] justify left-0 font-body-large-body-large-400 font-[number:var(--body-large-body-large-400-font-weight)] text-gray-scalegray-600 text-[length:var(--body-large-body-large-400-font-size)] tracking-[var(--body-large-body-large-400-letter-spacing)] leading-[var(--body-large-body-large-400-line-height)] [font-style:var(--body-large-body-large-400-font-style)] text-left">
                    Welcome to our Organic Vegetable Store, where taste meets purity! We take pride in offering a curated selection of 100% organic
                    vegetables that not only nourish your body but also tantalize your taste buds with unrivaled flavors. From vibrant tomatoes to crisp
                    leafy greens, our commitment to organic farming practices

                </p>
                <img src={About1} alt="image" className="absolute w-[550x] h-[400px] top-0 left-[650px]" />

            </div>


            <div className="w-[820px] h-[985px]  top-4 relative ">
                <div className=" w-[1545px] h-[1485px] top-1 object-cover  [background:linear-gradient(180deg,rgb(249.9,249.9,249.9)_0%,rgb(255,255,255)_100%)]">
                    <img className=" w-[725px] h-[585px] top-0 left-0 object-cover absolute " alt="Bg" src={BG} />
                    <img className=" w-[545px] h-[585px] top-0 left-0   absolute" alt="Image" src={About2} />

                    <p className=" absolute w-[607px] top-[4px] text-#000000 text-5xl font-bold  left-[95%] ">100% Trusted <br />Organic Food Store</p>

                    <p className="absolute  w-[570px] top-36  font-body-medium-body-medium-400 font-[number:var(--body-medium-body-medium-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-medium-body-medium-400-font-size)] tracking-[var(--body-medium-body-medium-400-letter-spacing)] leading-[var(--body-medium-body-medium-400-line-height)] [font-style:var(--body-medium-body-medium-400-font-style)] text-left left-[95%]">
                        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est
                        luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
                    </p>

                    <div className="grid-cols-2 ">
                        <div>
                            <div className="inline-flex flex-wrap gap-[1px]  bg-gray-scalewhite relative left-[48%]  mt-[17%] ">
                                <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
                                    <img className="relative flex-[0_0_auto]" alt="Icon" src={leaf2} />
                                </div>
                                <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
                                    <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
                                        100% Organic food
                                    </div>
                                    <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
                                        100% healthy &amp; Fresh food.
                                    </p>
                                </div>
                            </div>


                            <div className="relative mt-[-112px] inline-flex left-[55%] bg-white">
                                <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
                                    <img className="relative flex-[0_0_auto]" alt="Icon" src={Headphones} />
                                </div>
                                <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
                                    <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
                                        Great Support 24/7
                                    </div>
                                    <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
                                        Instant access to Contact
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="flex-col relative mt-[-240px]" >
                            <div>
                                <div className="inline-flex flex-wrap gap-[1px]  bg-gray-scalewhite relative left-[48%]  mt-[17%] ">
                                    <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
                                        <img className="relative flex-[0_0_auto]" alt="Icon" src={stars} />
                                    </div>
                                    <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
                                        <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
                                            Customer Feedback
                                        </div>
                                        <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
                                            Our happy customer
                                        </p>
                                    </div>
                                </div>


                                <div className="relative mt-[-112px] inline-flex left-[55%] bg-white">
                                    <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
                                        <img className="relative flex-[0_0_auto]" alt="Icon" src={Shoppingbag} />
                                    </div>
                                    <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
                                        <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
                                            100% Sucure Payment
                                        </div>
                                        <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
                                            We ensure your money is save                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-col relative mt-[-240px]" >
                            <div>
                                <div className="inline-flex flex-wrap gap-[1px]  bg-gray-scalewhite relative left-[48%]  mt-[17%] ">
                                    <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
                                        <img className="relative flex-[0_0_auto]" alt="Icon" src={delivery} />
                                    </div>
                                    <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
                                        <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
                                            Free Shipping                                        </div>
                                        <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
                                            Free shipping with discount                                        </p>
                                    </div>
                                </div>


                                <div className="relative mt-[-112px] inline-flex left-[55%] bg-white">
                                    <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
                                        <img className="relative flex-[0_0_auto]" alt="Icon" src={Package} />
                                    </div>
                                    <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
                                        <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
                                            100% Organic food
                                        </div>
                                        <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
                                            100% healthy &amp; Fresh food.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>






                        {/* part 3 delivery agent */}
                    </div>
                </div>
                <WeDelvieredYou />
                <Team />
                <Testimonial1 />

            </div>
        </div>


    )
}

export default About;
