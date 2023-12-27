import PropTypes from "prop-types";
// import React from "react";

export const TestimonialsCard = ({
    // property1,
    className,
    vector = "vector.svg",
    image = "image.png",
    rating = "rating.svg",
}) => {
    return (
        <div
            className={`inline-flex flex-col items-start gap-[16px] p-[24px] relative bg-gray-scalewhite rounded-[8px] shadow-[0px_10px_20px_#00000003] ${className}`}
        >
            <img className="relative w-[32px] h-[26px]" alt="Vector" src={vector} />
            <p className="relative w-[376px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-700 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum,
                bibendum cursus velit sodales. Donec sed neque eget
            </p>
            <div className="flex w-[376px] items-center justify-between pt-[8px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="flex w-[168px] items-center gap-[12px] relative">
                    <img className="relative w-[56px] h-[56px] object-cover" alt="Image" src={image} />
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-medium-body-medium-500 font-[number:var(--body-medium-body-medium-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-medium-body-medium-500-font-size)] text-center tracking-[var(--body-medium-body-medium-500-letter-spacing)] leading-[var(--body-medium-body-medium-500-line-height)] whitespace-nowrap [font-style:var(--body-medium-body-medium-500-font-style)]">
                            Robert Fox
                        </div>
                        <div className="relative w-fit font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-400 text-[length:var(--body-small-body-small-400-font-size)] text-center tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
                            Customer
                        </div>
                    </div>
                </div>
                
                    <div>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <img className="relative flex-[0_0_auto]" alt="Rating" src={rating} />
                        ))}
                    </div>
         

            </div>
        </div>
    );
};

TestimonialsCard.propTypes = {
    // property1: PropTypes.oneOf(["default"]),
    className: PropTypes.string,
    vector: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.string,
};
