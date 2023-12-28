import React from "react";
import Com from "../Homepage/Com";
import Featured from "../Homepage/Feature";
import ListofItems from "../Homepage/Listofitems";
import HotDeals from "../Homepage/Hotdeals";
import Bannar from "../Homepage/Banner";
import PopularProducts from "../Homepage/PopularProducts";
import DiscountBannar from "../Homepage/DiscountBanner";
import Popular from "../Homepage/Popular";
import LatestNews from "../Homepage/LatestNews";
import Testimonials from "../Homepage/Testimonials";
import Instagram from "../Homepage/FollowUsOnInstagram";
import SubscribeOurNewsletter from "../Homepage/SubscribeOurNewsletter";
import Group from "../Homepage/Group";
import Bottam from "../Homepage/Bottam";
import { ThemeProvider } from "../GlobalComponents/ThemeProvider";

const home = () => {
  return (
    
    <ThemeProvider>
      <Com />
      <Featured /> <br></br>
      <ListofItems />
      <br></br>
      <HotDeals />
      <br></br>
      <Bannar />
      <br></br>
      <PopularProducts />
      <DiscountBannar />
      <br></br>
      <Popular />
      <LatestNews />
      <br></br>
      <Testimonials />
      <Instagram />
      <SubscribeOurNewsletter />
      <Group />
      <Bottam />
      </ThemeProvider>
   
  );
};

export default home;
