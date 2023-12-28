// import React from "react";
import { Product1 } from "./Product1";
import Image1 from "../Images/Image1.svg";
import Image2 from "../Images/Image 2.svg";
import Image3 from "../Images/Image3.svg";


 export const HotDeals = () => {
  return (
    <div className="inline-flex flex-col  items-start justify-center gap-6relative mr-[-44] ml-5">
      {/* Title */}
      <div className="relative w-fit mt-[-1.00px] text-3xl  mt-5 text-gray-scalegray-900 text-length-body-XL-body-XL-500-font-size tracking-body-XL-body-XL-500-letter-spacing leading-body-XL-body-XL-500-line-height whitespace-nowrap font-body-XL-body-XL-500-font-style">
        Sale Products
      </div>

      {/* Product List */}
      <div className=" inline-flex flex-col items-start gap-16 relative flex-0_0_auto ml-[-44] ">
        {/* Product 1 */}
        <Product1 className="!flex-0_0_auto" image={Image1} rating="rating-2.svg" text="Red Capsicum" />

        {/* Product 2 */}
        <Product1
          className="!border-brandingsuccess !flex-0_0_auto !shadow-hover-shadow "
          divClassName="!text-brandingsuccess-dark"
          image={Image2}
          priceText="$24.00"
          rating="rating-3.svg"
          text="Chanise Cabbage"
        />

        {/* Product 3 */}
        <Product1 className="!flex-0_0_auto" image={Image3} priceText="$32.00" rating="rating-4.svg" text="Green Capsicum" />
      </div>
    </div>
  );
};

// export default HotDeals;
// import React from "react";
// import { Product1 } from "./Product1";
// import "../shop1.css"; // Assuming this is your CSS file

// const HotDeals = () => {
//   return (
//     <div className="hot-deals">
//       {/* Title */}
//       <div className="title">Sale Products</div>

//       {/* Product List */}
//       <div className="frame">
//         {/* Product 1 */}
//         <Product1 className="product-instance" image="image-2.svg" rating="rating-2.svg" />

//         {/* Product 2 */}
//         <Product1
//           className="product-2"
//           divClassName="design-component-instance-node"
//           image="image-3.svg"
//           priceText="$24.00"
//           rating="rating-3.svg"
//           text="Chanise Cabbage"
//         />

//         {/* Product 3 */}
//         <Product1 className="product-instance" image="image-4.svg" priceText="$32.00" rating="rating-4.svg" text="Green Capsicum" />
//       </div>
//     </div>
//   );
// };

// export default HotDeals;
