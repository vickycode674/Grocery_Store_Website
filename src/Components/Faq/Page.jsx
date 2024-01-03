// import React from 'react' 
// import Breadcrumbs from '../BreadCrumbs'
import Image from './Image27.png';
import plus from "./plus.svg"
import Banner from "./Banner1.png";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";


// import {Faqs} from "./Faq1"
 const Page = () => {
  const [theme] = useThemeHook()

  return (
    // import * as React from "react";
        
        <div className="w-full max-w-[screen] mt-0 max-md:max-w-full max-md" style={{ background: theme ? "black" : "" }}>
           <img src={Banner} alt="banner" />
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10">

                {/* main title  */}
                <div style={{ color: theme ? "#fff" : "" }} className="text-black text-5xl font-semibold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Welcome, Let’s Talk About Our Ecobazar
                </div>
                <div style={{ color: theme ? "#fff" : "" }} className="items-center border border-[color:var(--Branding-Success-Bright,#FF6316)] bg-white flex justify-between gap-0 mt-11 px-4 py-3 rounded-md border-solid max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <div  className="text-orange-500 text-base font-medium leading-6 grow my-auto max-md:max-w-full">
                    In elementum est a ante sodales iaculis.
                  </div>
                  <img
                    loading="lazy"
                    src={plus}
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="text-stone-500 text-sm leading-5 items-stretch border border-[color:var(--Branding-Success-Bright,#FF6316)] bg-white z-[1] justify-center p-4 rounded-none border-solid max-md:max-w-full">
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                  laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                  Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
                  Donec a eros non massa vulputate ornare. Vivamus ornare commodo
                  ante, at commodo felis congue vitae.
                </div>
                
              <div style={{ color: theme ? "#fff" : "" }} className="items-center bg-zinc-100 flex justify-between gap-0 mt-3.5 px-4 py-3 rounded-md max-md:max-w-full max-md:flex-wrap">
                  <div className="text-black text-base font-medium leading-6 grow my-auto max-md:max-w-full">
                    Etiam lobortis massa eu nibh tempor elementum.
                  </div>
                  <img
                    loading="lazy"
                    src={plus}
                    className="aspect-square object-contain object-center bold overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="items-center bg-zinc-100 flex justify-between gap-0 mt-3 px-4 py-3 rounded-md max-md:max-w-full max-md:flex-wrap">
                  <div className="text-black text-base font-medium leading-6 grow my-auto max-md:max-w-full">
                    In elementum est a ante sodales iaculis.
                  </div>
                  <img
                    loading="lazy"
                    src={plus}
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="items-center bg-zinc-100 flex justify-between gap-0 mt-3 px-4 py-3 rounded-md max-md:max-w-full max-md:flex-wrap">
                  <div className="text-black text-base font-medium leading-6 grow my-auto max-md:max-w-full">
                    Aenean quis quam nec lacus semper dignissim.
                  </div>
                  <img
                    loading="lazy"
                    src={plus}
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="items-center bg-zinc-100 flex justify-between gap-0 mt-3 px-4 py-3 rounded-md max-md:max-w-full max-md:flex-wrap">
                  <div className="text-black text-base font-medium leading-6 grow my-auto max-md:max-w-full">
                    Nulla tincidunt eros id tempus accumsan.
                  </div>
                  <img
                    loading="lazy"
                    src={plus}
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src={Image}
                className="aspect-[0.92] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div> 
            
          </div>
        </div>
      );
    }
    
    
export default Page;


