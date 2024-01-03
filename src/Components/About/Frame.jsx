// import React from 'react'
import leaf2 from "./Images/leaf2.png";
import delivery from "./Images/delivery-truck 1.png";
import Headphones from "./Images/Headphones 1.png";
import Package from "./Images/package.png";
import Shoppingbag from "./Images/shopping-bag.png";
import stars from "./Images/stars 1.png";
import About2 from "./Images/About2.png"
const  Frame=() => {
  return (
    <div className="shadow-sm self-stretch w-full mt-20 max-md:max-w-full max-md:mt-10">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
        <div className="overflow-hidden grow max-md:max-w-full max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src={About2}
                className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>
            <div className="flex flex-col items-stretch w-[35%] mt-[-10%] ml-2 max-md:w-full max-md:ml-0">
              <div className="z-[1] flex flex-col items-stretch mt-80 max-md:mt-10">
                <div className="items-stretch bg-white flex justify-between gap-4">
                  <div className="items-center bg-green-600 bg-opacity-10 flex aspect-square flex-col justify-center w-[72px] h-[72px] px-4 rounded-[5000px]">
                    <img
                      loading="lazy"
                      src={leaf2}
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-lg font-medium leading-7 whitespace-nowrap">
                      100% Organic food
                    </div>
                    <div className="text-zinc-500 text-sm leading-5 whitespace-nowrap mt-2">
                      100% healthy & Fresh food.
                    </div>
                  </div>
                </div>
                <div className="items-stretch bg-white flex justify-between gap-4 mt-6">
                  <div className="items-center bg-green-600 bg-opacity-10 flex aspect-square flex-col justify-center w-[72px] h-[72px] px-4 rounded-[5000px]">
                    <img
                      loading="lazy"
                      src={stars}
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-lg font-medium leading-7 whitespace-nowrap">
                      Customer Feedback
                    </div>
                    <div className="text-red-600 text-sm leading-5 whitespace-nowrap mt-2">
                      Our happy customer
                    </div>
                  </div>
                </div>
                <div className="items-stretch bg-white flex justify-between gap-4 mt-6">
                  <div className="items-center bg-green-600 bg-opacity-10 flex aspect-square flex-col justify-center w-[72px] h-[72px] px-4 rounded-[5000px]">
                    <img
                      loading="lazy"
                      src={delivery}
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-lg font-medium leading-7 whitespace-nowrap">
                      Free Shipping
                    </div>
                    <div className="text-red-600 text-sm leading-5 whitespace-nowrap mt-2">
                      Free shipping with discount
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[46%] mt-[-6%] ml-8 max-md:w-full max-md:ml-0">
        <div className="flex flex-col mt-20 px-7 items-end max-md:max-w-full max-md:mt-10">
          <div className="text-green-950 text-6xl font-semibold leading-[67px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            100% Trusted
            <br />
            Organic Food Store
          </div>
          <div className="text-zinc-500 text-base leading-6 self-stretch mt-5 max-md:max-w-full">
            Pellentesque a ante vulputate leo porttitor luctus sed eget
            eros. Nulla et rhoncus neque. Duis non diam eget est luctus
            tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
            feugiat.{" "}
          </div>
          <div className="flex w-[612px] max-w-full flex-col items-stretch mt-6">
            <div className="items-stretch bg-white flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-green-600 bg-opacity-10 flex flex-col justify-center pl-5 pr-7 py-5 rounded-[5000px] items-start max-md:pr-5">
                <img
                  loading="lazy"
                  src={Headphones}
                  className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
                />
              </div>
              <div className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
                <div className="text-black text-lg font-medium leading-7 max-md:max-w-full">
                  Great Support 24/7
                </div>
                <div className="text-red-600 text-sm leading-5 mt-2 max-md:max-w-full">
                  Instant access to Contact
                </div>
              </div>
            </div>
            <div className="items-stretch bg-white flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-green-600 bg-opacity-10 flex flex-col justify-center pl-5 pr-7 py-5 rounded-[5000px] items-start max-md:pr-5">
                <img
                  loading="lazy"
                  src={Shoppingbag}
                  className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
                />
              </div>
              <div className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
                <div className="text-black text-lg font-medium leading-7 max-md:max-w-full">
                  100% Sucure Payment
                </div>
                <div className="text-red-600 text-sm leading-5 mt-2 max-md:max-w-full">
                  We ensure your money is save
                </div>
              </div>
            </div>
            <div className="items-stretch bg-white flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-green-600 bg-opacity-10 flex flex-col justify-center pl-5 pr-7 py-5 rounded-[5000px] items-start max-md:pr-5">
                <img
                  loading="lazy"
                  src={Package}
                  className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
                />
              </div>
              <div className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
                <div className="text-black text-lg font-medium leading-7 max-md:max-w-full">
                  100% Organic Food
                </div>
                <div className="text-red-600 text-sm leading-5 mt-2 max-md:max-w-full">
                  100% healthy & Fresh food.
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default  Frame;
