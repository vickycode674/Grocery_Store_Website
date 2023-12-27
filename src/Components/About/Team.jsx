// import React from "react";
import { TeamCard } from "./TeamCard";

export const Team = () => {
    return (
        <div className="w-[1920px] h-[576px] -mt-80 ">
            <div className=" w-[1820px] h-[436px]  ml-[-118px] left-0 [background:linear-gradient(180deg,rgb(242.25,242.25,242.25)_0%,rgb(255,255,255)_100%)]">
                <div className="inline-flex flex-col ml-[-212px] items-center gap-[12px] relative top-9">
                    <div className="relative  w-fit mt-[-1.00px] font-heading-02-heading-02-600 font-[number:var(--heading-02-heading-02-600-font-weight)] text-gray-scalegray-900 text-[length:var(--heading-02-heading-02-600-font-size)] text-center tracking-[var(--heading-02-heading-02-600-letter-spacing)] leading-[var(--heading-02-heading-02-600-line-height)] whitespace-nowrap [font-style:var(--heading-02-heading-02-600-font-style)]">
                        Our Awesome Team
                    </div>
                    <p className="relative  w-[640px] font-body-medium-body-medium-400 font-[number:var(--body-medium-body-medium-400-font-weight)] text-gray-scalegray-600 text-[length:var(--body-medium-body-medium-400-font-size)] text-center tracking-[var(--body-medium-body-medium-400-letter-spacing)] leading-[var(--body-medium-body-medium-400-line-height)] [font-style:var(--body-medium-body-medium-400-font-style)]">
                        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est
                        luctus tincidunt a a mi.
                    </p>

                    <div className="flex gap-4">
                        <TeamCard
                            image="./Images/ceo.png"
                            imageClassName="![object-fit:unset]"
                            property1="default"
                            text="Jenny Wilson"
                            text1="Ceo & Founder"
                        />
                        <TeamCard
                            image="./Images/worker.png"
                            imageClassName="![object-fit:unset]"
                            property1="default"
                            text="Jane Cooper"
                            text1="Worker"
                        />

                        <TeamCard
                            image="./Images/Security.png"
                            imageClassName="![object-fit:unset]"
                            property1="default"
                            text="Cody Fisher"
                            text1="Security Guard"
                        />

                        <TeamCard
                            image="./Images/Manager.png"
                            imageClassName="![object-fit:unset]"
                            property1="default"
                            text="Robert Fox"
                            text1="Senior Farmer Manager"
                        />

                        {/* <TeamCard className="!rounded-[10px]" imageClassName="bg-[url(pininterest 1.svg)]" property1="hover" />; */}
                    </div>

                </div>
            </div>

            {/* </div> */}
        </div>
    );
};
