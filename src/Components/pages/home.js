import React from 'react'
import Com from "../components/com"
import Featured from "../components/Feature"
import ListofItems from "../components/listofitems"
import HotDeals from "../components/hotdeals";
import Bannar from "../components/banner";
import PopularProducts from "../components/popularProducts"
import DiscountBannar from "../components/discountBanner";
import Popular from "../components/popular";
import LatestNews from "../components/latestNews"
import Testimonials from "../components/testimonials";
import Instagram from "../components/followUsOnInstagram";
import SubscribeOurNewsletter from "../components/subscribeOurNewsletter";
import Group from "../components/group";
import Bottam from "../components/bottam"

const home = () => {
  return (
    <>
         <Com/>   
      <Featured/>  <br></br>
      <ListofItems/><br></br>
      <HotDeals/><br></br>
      <Bannar/><br></br>
      <PopularProducts/>
      <DiscountBannar/><br></br>
      <Popular/>
      <LatestNews/><br></br>
      <Testimonials/>
      <Instagram/>
      <SubscribeOurNewsletter/>
      <Group/>
      <Bottam/>
    </>
  )
}

export default home