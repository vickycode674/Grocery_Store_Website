import { useState } from "react";
import capsicum from "../Images/capsicum.png";
import cauliFlower from "../Images/cauliFlower.png";
import greenApple from "../Images/greenApple.png";
import ladiesFinger from "../Images/ladiesFinger.png";
import AddToCart from "../Images/AddToCart.png";
import AddTowishlist from "../Images/AddTowishlist.png";
import QuickView from "../Images/QuickView.png";
import { SlHandbag } from "react-icons/sl";
import Rating from "./Rating";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const RelatedProducts = () => {
  const [theme] = useThemeHook();
  const items = [
    {
      img: greenApple,
      title: "Green Apple",
      price: "$14.99",
      ratings: 5,
    },
    {
      img: cauliFlower,
      title: "Cauli FLower",
      price: "$14.99",
      ratings: 3,
    },
    {
      img: capsicum,
      title: "Capsicum",
      price: "$14.99",
      ratings: 2,
    },
    {
      img: ladiesFinger,
      title: "Ladies Finger",
      price: "$14.99",
      ratings: 1,
    },
  ];
  const [data, setData] = useState(items);

  return (
    <div className="pt-5 md:mt-16">
      <h3 className="flex justify-center font-semibold text-3xl mb-10" style={{ color: theme ? "#fff" : "#000000" }}>
        Related Products
      </h3>
      <div className="flex justify-center  ">
        <div className="flex justify-between gap-3 flex-wrap ml-3 md:ml-0">
          {data.map((item, id) => (
            <div
              key={id}
              className="items-center border-2 rounded-lg group hover:border-orange-500 hover:rounded-lg relative"
            >
              <div className=" items-center flex justify-center">
                <img
                  src={item.img}
                  className="items-center flex justify-center"
                />
              </div>

              <div className="flex justify-between items-center pb-3">
                <div className="ml-[7%] mt-[6%]">
                  <p className="text-sm group-hover:text-[#FF6316] pb-2" style={{ color: theme ? "#fff" : "#808080" }}>
                    {item.title}
                  </p>
                  <p className="font-medium text-xl pb-2" style={{ color: theme ? "#fff" : "#808080" }}>{item.price}</p>
                  <Rating ratings={item.ratings} />
                </div>
                <div className="bg-[#F2F2F2] group-hover:bg-[#FF6316] group-hover:text-[#fff] flex justify-center items-center rounded-full p-3 mr-[5%]">
                  <SlHandbag className="text-lg" />
                </div>
              </div>

              <div className="absolute top-2 right-0 group-hover:visible invisible">
                <img src={AddTowishlist} className="pb-2" />
                <img src={QuickView} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
