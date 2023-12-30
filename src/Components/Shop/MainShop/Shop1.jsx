// import React from 'react';
import "../MainShop/shop1.css" ;
import ShopFilter from "./ShopFilter";
import AllCategories from '../Cateogries/AllCategories';
import Bannar from '../ShopProduct/Bannar';
// import PagesChang from './PagesChang';
// import breadcrumbs from "../components/shop1/breadcrumbs";
import { Product } from '../ShopProduct/Product';
import { SidePrice } from '../ShopProduct/SidePrice';
import {Rating} from '../ShopProduct/Rating';
import PopularTag from '../ShopProduct/PopularTag';
import {HotDeals} from '../ShopProduct/HotDeals';

import home1 from "../Images/home-1.png";
import vector from "../Images/Vector.png";
import group from "../Images/Group.png";
import star from "../Images/Star 1.png";

import Images1 from "../Images/Image-1.png";
import Images2 from "../Images/Image2.png";
import Images3 from "../Images/Image-3.png";

import Images4 from "../Images/Image-4.png";
import Images5 from "../Images/Image-5.png";
import Images6 from "../Images/Image-6.png";


import Images7 from "../Images/Image-7.png";
import Images8 from "../Images/Image-8.png";
import Images9 from "../Images/Image-9.png";

import Images10 from "../Images/Image-10.png";
import Images11 from "../Images/Image-11.png";
import Images12 from "../Images/Image-12.png";

import Images13 from "../Images/Image-13.png";
import Images14 from "../Images/Image-14.png";
import Images15 from "../Images/Image-15.png";

import Banner from "../Images/Banner3.png";






const Shop1 = () => {
  return (
    <div>
          <img src={Banner} alt='banner'/>

      {/* <NavigationBar/> */}
      <div className="breadcrumbs"> 
      <div className="location"> 
       < a href="/" ><img className="home" alt="Home" src={home1} /> </a>
       <img className="vector" alt="Vector" src={vector} />
          <div className="text-wrapper"><a href="/"> Categories</a></div> 
            <img className="vector" alt="Vector" src={vector} /> 
         <div className="div"><a href="/"> Vegetables</a></div> 
         </div> 
         {/* /*filter*/ }
    </div> 
    <ShopFilter/>

    <div className="sort-by">
      <div className="text-wrapper">Sort by:</div>
      <div className="dropdown">
        <div className="div">Latest</div>
        <div className='ChevronDown'>
          <div className="chevron-down-screen"> 
          <img className="group" alt="Group" src={group} />
          </div>
         </div>
      </div>
    </div>
    {/* <PagesChang/> */}
    <AllCategories/>

   <SidePrice/>
  
  <Rating/>

  <PopularTag/>

  <Bannar/>

  <HotDeals/>

 
    {/* <Product property1="default" image="image1.png" text="Potatoe" rating="4.5" />
      <Product property1="hover" image="orange.jpg" text="Orange" rating="4.0" /> */} 
   <div className='ml-32 mt-[-1988px]  '>
  <div className="flex items-start gap-8 m-4 ">
              {/* <Tag property1="out of stock"/> */}

    <Product image={Images1} property1="default" rating={star} text="Big Potatos" />
    <Product image={Images2} property1="default" rating={star} text="Chanise Cabbage" /> 
    <Product image={Images3} property1="default" rating={star} text="Corn" /> 
    </div>

    <div className="flex items-start gap-8 m-3">
    <Product image={Images5} property1="default" rating={star} text="Fresh Cauliflower" />
    <Product image={Images6} property1="default" rating={star}text="Green Apple" /> 
    <Product image={Images7} property1="default" rating={star} text="Green Capsicum" /> 
    </div>

    <div className="flex items-start gap-8 m-3">
    <Product image={Images9} property1="default" rating={star} text=" Green Cucumber" />
    <Product image={Images10} property1="default" rating={star} text="Green Littuce" /> 
    <Product image={Images11}  property1="default" rating={star}text="Ladies Finger" /> 
    </div>

    <div className="flex items-start gap-8 m-3">
    <Product image={Images13}  property1="default" rating={star}text=" Red Chilli" />
    <Product image={Images14}  property1="default" rating={star} text="Tomatoes" /> 
    <Product image={Images15}  property1="default" rating={star} text="Mangoes" /> 
    </div> 

    <div className="flex items-start gap-8 m-3">
    <Product image={Images4}  property1="default" rating={star} text="Egg Plant" /> 
    <Product image={Images7}  property1="default" rating={star} text="Green Capsicum" /> 
    <Product image={Images8}  property1="default" rating={star} text="Green Chilli" /> 

    </div>
     {/* <div className='mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-0'> */}
          {/* Product Cards */}
          {/* <Product image='./images/shop1/Image-1.png' property1='default' rating='./images/shop1/Star 1.png' text='Big Potatos' />
          <Product image='./images/shop1/Image2.png' property1='hover' rating='rating-3.svg' text='Chanise Cabbage' />
          <Product image='./images/shop1/Image-3.png' property1='default' rating='rating-3.svg' text='Corn' />
          <Product image='./images/shop1/Image-4.png' property1='default' rating='rating-3.svg' text='Egg Plant' />
          <Product image='./images/shop1/Image-5.png' property1='default' rating='rating-3.svg' text='Fresh Cauliflower' />
          <Product image='./images/shop1/Image-6.png' property1='default' rating='rating-3.svg' text='Green Apple' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Capsicum' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Chilli' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Cucumber' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Littuce' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Ladies Finger' /> */}
          {/* Add more Product components as needed */}

    
    {/* <Product/> */}
      </div>
 </div>
    
  )
}

export default Shop1;
