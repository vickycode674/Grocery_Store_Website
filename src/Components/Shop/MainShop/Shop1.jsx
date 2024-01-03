// import React from 'react';
// import "../MainShop/shop1.css" ;
// import ShopFilter from "./ShopFilter";
import AllCategories from '../Cateogries/AllCategories';
// import Bannar from '../ShopProduct/Bannar';
// import PagesChang from './PagesChang';
// import breadcrumbs from "../components/shop1/breadcrumbs";
// import { Product } from '../ShopProduct/Product';
// import { SidePrice } from '../ShopProduct/SidePrice';
// import {Rating} from '../ShopProduct/Rating';
// import PopularTag from '../ShopProduct/PopularTag';
// import {HotDeals} from '../ShopProduct/HotDeals';

// import home1 from "../Images/home-1.png";
// import vector from "../Images/Vector.png";
// import group from "../Images/Group.png";
// import star from "../Images/Star 1.png";



// import Banner from "../Images/Banner3.png";


// import { useThemeHook } from "../../GlobalComponents/ThemeProvider";
// import {MainProducts} from "./ProductsMain";
// const Shop1 = () => {
//   const [theme] = useThemeHook()

//   return (
//     <div style={{ background: theme ? "black" : "" }} className="h-[2340px]">
//           <img src={Banner} alt='banner'/>

      {/* <NavigationBar/> */}
      {/* <div className="breadcrumbs"> 
      <div className="location"> 
       < a href="/" ><img className="home" alt="Home" src={home1} /> </a>
       <img className="vector" alt="Vector" src={vector} />
          <div style={{ color: theme ? "#fff" : "" }}  className="text-wrapper"><a href="/"> Categories</a></div> 
            <img className="vector" alt="Vector" src={vector} /> 
         <div style={{ color: theme ? "#fff" : "" }} className="div"><a href="/"> Vegetables</a></div> 
         </div>  */}
         {/* /*filter*/ }
    {/* </div>  */}
    {/* <ShopFilter/>

    <div className="sort-by">
      <div style={{ color: theme ? "#fff" : "" }} className="text-wrapper">Sort by:</div>
      <div className="dropdown">
        <div style={{ color: theme ? "#fff" : "" }}  className="div">Latest</div>
        <div className='ChevronDown'>
          <div  className="chevron-down-screen"> 
          <img className="group" alt="Group" src={group} />
          </div>
         </div>
      </div>
    </div> */}
    {/* <PagesChang/> */}
//     <AllCategories/>

//    <SidePrice/>
  
//   <Rating/>

//   <PopularTag/>

//   <Bannar/>

//   <HotDeals/>

//   <MainProducts/>
//   </div>
 
    
//   )
// }

// export default Shop1;

// import React from 'react'

export const Shop1 = () => {
  return (
    // import * as React from "react";
        <div className="self-center w-full max-w-[1320px] mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col px-5 max-md:mt-6">
                
               
              <AllCategories/>

                
                <div className="bg-neutral-200 shrink-0 h-px mt-6 self-start max-md:max-w-full" />
                <div className="justify-between items-stretch shadow-sm self-stretch flex gap-5 pt-5 pb-1">
                  <div className="text-black text-xl font-medium leading-8">
                    Price
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/53ef0c42f864eeec72152b2f66de90ec687a01c6f6503b09d4c95f863047e20d?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[2] object-contain object-center w-3 stroke-[2px] stroke-black overflow-hidden shrink-0 max-w-full mt-3 self-start"
                  />
                </div>
                <div className="self-center flex gap-0 mt-4 items-start">
                  <div className="stroke-[2px] self-stretch flex w-[18px] shrink-0 h-[18px] flex-col rounded-[50%]" />
                  <div className="bg-orange-500 flex w-full shrink-0 h-1.5 flex-col mt-1.5 rounded-2xl" />
                  <div className="stroke-[2px] self-stretch flex w-[18px] shrink-0 h-[18px] flex-col rounded-[50%]" />
                </div>
                <div className="text-black text-sm leading-5 self-stretch mt-4">
                  <span className="text-neutral-600">Price:</span>
                  <span className="font-medium"> 50 — 1,500</span>
                </div>
                <div className="bg-neutral-200 self-stretch shrink-0 h-px mt-6" />
                <div className="justify-between items-stretch bg-white self-stretch flex gap-5 py-5">
                  <div className="text-black text-xl font-medium leading-8">
                    Rating
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/53ef0c42f864eeec72152b2f66de90ec687a01c6f6503b09d4c95f863047e20d?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[2] object-contain object-center w-3 stroke-[2px] stroke-black overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="justify-between self-stretch flex gap-2 py-2.5 items-start">
                  <div className="border border-[color:var(--Gray-Scale-Gray-200,#CCC)] bg-white flex w-5 shrink-0 h-5 flex-col rounded border-solid" />
                  <div className="items-start self-stretch flex gap-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/933fe81ff5576fd766ef588e2eb39cef76af76fc1b65075f06e1b2c3dc7e3140?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <div className="text-black text-sm leading-5"> 5.0</div>
                  </div>
                </div>
                <div className="justify-between self-stretch flex gap-2 py-2.5 items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cec65a6d409a33ccc25d22546414362223187caa155fac069704d8ffd22adc5?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="items-start self-stretch flex gap-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/933fe81ff5576fd766ef588e2eb39cef76af76fc1b65075f06e1b2c3dc7e3140?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <div className="text-black text-sm leading-5"> 4.0 & up</div>
                  </div>
                </div>
                <div className="justify-between self-stretch flex gap-2 py-2.5 items-start">
                  <div className="border border-[color:var(--Gray-Scale-Gray-200,#CCC)] bg-white flex w-5 shrink-0 h-5 flex-col rounded border-solid" />
                  <div className="items-start self-stretch flex gap-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/933fe81ff5576fd766ef588e2eb39cef76af76fc1b65075f06e1b2c3dc7e3140?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <div className="text-black text-sm leading-5"> 3.0 & up</div>
                  </div>
                </div>
                <div className="justify-between self-stretch flex gap-2 py-2.5 items-start">
                  <div className="border border-[color:var(--Gray-Scale-Gray-200,#CCC)] bg-white flex w-5 shrink-0 h-5 flex-col rounded border-solid" />
                  <div className="items-start self-stretch flex gap-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/933fe81ff5576fd766ef588e2eb39cef76af76fc1b65075f06e1b2c3dc7e3140?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f77a36a4b9b8588891ae9a75a2a8223d1118a9b3be52be09aff13cde84599f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <div className="text-black text-sm leading-5"> 2.0 & up</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2.5 self-start items-start max-md:max-w-full max-md:flex-wrap">
                  <div className="border border-[color:var(--Gray-Scale-Gray-200,#CCC)] bg-white flex w-5 shrink-0 h-5 flex-col rounded border-solid" />
                  <div className="items-start self-stretch flex gap-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/933fe81ff5576fd766ef588e2eb39cef76af76fc1b65075f06e1b2c3dc7e3140?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <div className="text-black text-sm leading-5 self-stretch grow shrink basis-auto">
                      {" "}
                      1.0 & up
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-6 self-start max-md:max-w-full" />
                <div className="justify-between items-stretch shadow-sm self-stretch flex gap-5 py-5">
                  <div className="text-black text-xl font-medium leading-8">
                    Popular Tag
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/53ef0c42f864eeec72152b2f66de90ec687a01c6f6503b09d4c95f863047e20d?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[2] object-contain object-center w-3 stroke-[2px] stroke-black overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-2 pr-5">
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Healthy
                  </div>
                  <div className="text-white text-sm leading-5 whitespace-nowrap items-stretch bg-orange-500 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Low fat
                  </div>
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Vegetarian
                  </div>
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-2 mt-2 pr-8 max-md:pr-5">
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Kid foods
                  </div>
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Vitamins
                  </div>
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[2.242424242424242] justify-center px-4 py-1.5 rounded-[30px]">
                    Bread
                  </div>
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-2 mt-2 pr-20 max-md:pr-5">
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[2.0606060606060606] justify-center px-4 py-1.5 rounded-[30px]">
                    Meat
                  </div>
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Snacks
                  </div>
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[1.9696969696969697] justify-center px-4 py-1.5 rounded-[30px]">
                    Tiffin
                  </div>
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-2 mt-2 pr-7 max-md:pr-5">
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Launch
                  </div>
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Dinner
                  </div>
                  <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-4 py-1.5 rounded-[30px]">
                    Breackfast
                  </div>
                </div>
                <div className="text-black text-sm leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[1.878787878787879] justify-center mt-2 px-4 py-1.5 rounded-[30px] self-start">
                  Fruit
                </div>
                <div className="flex-col items-center overflow-hidden self-stretch relative flex aspect-[1.0576271186440678] w-full mt-7 pt-5 pb-12">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-black text-center text-3xl font-semibold leading-10 self-stretch whitespace-nowrap">
                    <span className="text-orange-500">79%</span>{" "}
                    <span className=" text-2xl leading-9">Discount</span>
                  </div>
                  <div className="relative text-neutral-600 text-center text-base leading-6 self-stretch whitespace-nowrap">
                    on your first order
                  </div>
                  <div className="relative items-stretch flex gap-3 mt-3 mb-24 rounded-[43px] max-md:mb-10">
                    <div className="text-orange-500 text-base font-semibold leading-5">
                      Shop Now
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/78135b25b13c206682a7f0d805124ef30c8fff547b6d0bd5961a07584dde4b13?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
                <div className="text-black text-xl font-medium leading-8 self-stretch mt-5">
                  Sale Products
                </div>
                <div className="items-center border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch flex justify-between gap-1.5 mt-3 pl-1.5 rounded-md border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d839ea6e6aad7d8b33ae9ba8845818f9c64cb0143aad127cfcf59a2cc457e964?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-square object-contain object-center w-[102px] fill-[url(<path-to-image>),lightgray_50%_/_contain_no-repeat] overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="justify-center self-stretch flex grow basis-[0%] flex-col px-3 py-6 items-start">
                    <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                      Red Capsicum
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-0.5">
                      <div className="text-black text-base font-medium leading-6">
                        $32.00
                      </div>
                      <div className="text-red-600 text-base leading-6">$20.99</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/661338522f281d17bb0d7e623e119ed645f07b1955f1ca6bc61d7027988eb20b?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                    />
                  </div>
                </div>
                <div className="items-center border border-[color:var(--Branding-Success,#FF6316)] shadow-sm bg-white self-stretch flex justify-between gap-1.5 mt-4 pl-1.5 rounded-md border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07d49444d56ad3623819e73a9edba18334ab4e18b8ee42de74b04222e09a1cd2?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-square object-contain object-center w-[102px] fill-[url(<path-to-image>),lightgray_50%_/_cover_no-repeat] overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="justify-center self-stretch flex grow basis-[0%] flex-col px-3 py-6 items-start">
                    <div className="text-orange-500 text-sm leading-5 self-stretch whitespace-nowrap">
                      Chanise Cabbage
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-0.5">
                      <div className="text-black text-base font-medium leading-6">
                        $24.00
                      </div>
                      <div className="text-red-600 text-base leading-6">$20.99</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/661338522f281d17bb0d7e623e119ed645f07b1955f1ca6bc61d7027988eb20b?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                    />
                  </div>
                </div>
                <div className="items-center border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch flex justify-between gap-1.5 mt-4 pl-1.5 rounded-md border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/54614e49a388bc0d55a266320eb27a0b6cfea1402ce645af606d66491aad2dc9?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-square object-contain object-center w-[102px] fill-[url(<path-to-image>),lightgray_50%_/_cover_no-repeat] overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="justify-center self-stretch flex grow basis-[0%] flex-col px-3 py-6 items-start">
                    <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                      Green Capsicum
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-0.5">
                      <div className="text-black text-base font-medium leading-6">
                        $32.00
                      </div>
                      <div className="text-red-600 text-base leading-6">$20.99</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/661338522f281d17bb0d7e623e119ed645f07b1955f1ca6bc61d7027988eb20b?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-6">
                <div className="px-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee108548d5793d87d620329fddf0dff443a9fb4e26e4b2aeb2c7e4a24db6e781?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Big Potatos
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Branding-Success-Dark,#FF6316)] shadow-sm bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <div className="flex-col overflow-hidden relative flex aspect-[1.033112582781457] w-full pl-16 pr-6 pt-4 pb-12 items-end max-md:px-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70a1f243f990a308c7b6a8c639278a1fffa31142b1085469d12ed9e0141ad4be?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="absolute h-full w-full object-cover object-center inset-0"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcac2a8b9f4964fdfffc53a20de64dfa828030e59618884338916e44e0d60d73?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[0.47] object-contain object-center w-10 overflow-hidden max-w-full mb-28 max-md:mb-10"
                          />
                        </div>
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-orange-500 text-sm leading-5 self-stretch whitespace-nowrap">
                            Chanise Cabbage
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <div className="flex-col overflow-hidden relative flex aspect-[1.033112582781457] w-full pl-3 pr-16 pt-3 pb-12 items-start max-md:pr-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f6c29ce1f8da3a2bcf197ff4c79daba17a7b5809b6b853f284fc722d76d52f7?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="absolute h-full w-full object-cover object-center inset-0"
                          />
                          <div className="relative text-white text-sm leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mb-40 px-2 py-1 max-md:mb-10">
                            Out of Stock
                          </div>
                        </div>
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Ladies Finger
                          </div>
                          <div className="items-stretch self-stretch flex justify-between gap-0.5">
                            <div className="text-black text-base font-medium leading-6">
                              $14.99
                            </div>
                            <div className="text-red-600 text-base leading-6">
                              $20.99
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e413347d2d0862d21d3dba196a3b7e1533a8d4fa3b035fc62c81a26ca78b159d?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Eggplant
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9faa5960f3bdcad62d1c4538275e9a6cfbb90b8b5e5f9362c40888d14c08e?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Fresh Cauliflower
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df083c42acf65cbeb4aa0dd57a930fa275a0a59ae28f23b93bbea108fc1d15c8?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Green Apple
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe8638d55e5536c448e91abeb1b1d58c4b9f721a15abe76723c5b0aaa943d157?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Green Capsicum
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97eb7162632c39bf5b3af8f38891597db00c0dfeb3eddae14af3402f6ccff5ff?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Green Chili
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <div className="flex-col overflow-hidden relative flex aspect-[1.033112582781457] w-full pl-3 pr-16 pt-3 pb-12 items-start max-md:pr-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="absolute h-full w-full object-cover object-center inset-0"
                          />
                          <div className="relative justify-center items-stretch rounded bg-orange-500 flex gap-1 mb-40 px-2.5 py-1 max-md:mb-10">
                            <div className="text-white text-sm leading-5 grow whitespace-nowrap">
                              Sale
                            </div>
                            <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                              50%
                            </div>
                          </div>
                        </div>
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Green Cucumber
                          </div>
                          <div className="items-stretch self-stretch flex justify-between gap-0.5">
                            <div className="text-black text-base font-medium leading-6">
                              $14.99
                            </div>
                            <div className="text-red-600 text-base leading-6">
                              $20.99
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e282f94e754b90a6449e649fa938a055450f38a5581a04394e8e72ece8ef9c20?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Green Littuce
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c85cb765eb756e272e25ce56fcee5299e62f3af2aef9bac6f0843e8d41d52ec?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f61e4fe5988c602086006dce88e03b3d0856c61030895d2ac889bdbc1f7596?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Ladies Finger
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c85cb765eb756e272e25ce56fcee5299e62f3af2aef9bac6f0843e8d41d52ec?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Branding-Success-Dark,#FF6316)] shadow-sm bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <div className="flex-col overflow-hidden relative flex aspect-[1.033112582781457] w-full pl-16 pr-6 pt-4 pb-12 items-end max-md:px-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c46c396f5cfd1cf1589ab7f8da5b41fe5edf7001cce3c45ac5fea56ef7102e1?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="absolute h-full w-full object-cover object-center inset-0"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcac2a8b9f4964fdfffc53a20de64dfa828030e59618884338916e44e0d60d73?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[0.47] object-contain object-center w-10 overflow-hidden max-w-full mb-28 max-md:mb-10"
                          />
                        </div>
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-orange-500 text-sm leading-5 self-stretch whitespace-nowrap">
                            Green Capsicum
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c85cb765eb756e272e25ce56fcee5299e62f3af2aef9bac6f0843e8d41d52ec?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb262ca4ff2850ba3bb73e30c1ef76e4064619898840bcb21e1f8578f619fd78?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Red Chili
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c85cb765eb756e272e25ce56fcee5299e62f3af2aef9bac6f0843e8d41d52ec?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da483d32c9c298e87334a04d282529770f0b149bf78fbd1bc05da31210a1f55?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Red Tomato
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c85cb765eb756e272e25ce56fcee5299e62f3af2aef9bac6f0843e8d41d52ec?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b674bb174093cf900eea3f4502dd1839c91d7cbb87c3ebfcbb28345ebea98b?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                            Fresh Mango
                          </div>
                          <div className="text-black text-base font-medium leading-6 self-stretch">
                            $14.99
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c85cb765eb756e272e25ce56fcee5299e62f3af2aef9bac6f0843e8d41d52ec?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Shop1;
