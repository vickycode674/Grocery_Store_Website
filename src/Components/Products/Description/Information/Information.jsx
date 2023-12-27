import Video from "../../Images/Video.png";
import leaf from "../../Images/leaf.png";
import discount from "../../Images/discount.png";

const Information = () => {
  return (
    <div className="items-center md:flex gap-32 justify-center mt-6 md:mt-12">
      <div className="items-center ml-[7%] md:ml-[9%] md:-mt-28">
        <div className="flex pb-5 ">
          <h5 className="w-[20%] text-sm font-semibold">Weight:</h5>
          <p className="pl-10 text-sm text-[#808080] ">03</p>
        </div>

        <div className="flex pb-5">
          <h5 className="w-[20%] text-sm font-semibold">Color:</h5>
          <p className="pl-10 text-sm text-[#808080] ">Green</p>
        </div>

        <div className="flex pb-5">
          <h5 className="w-[20%] text-sm font-semibold">Type:</h5>
          <p className="pl-10 text-sm text-[#808080]">
            Organic
          </p>
        </div>

        <div className="flex pb-5">
          <h5 className="w-[20%] text-sm font-semibold">Category:</h5>
          <p className="pl-10 text-sm text-[#808080] ">
            Vegetables
          </p>
        </div>

        <div className="flex pb-5">
          <h5 className="w-[20%] text-sm font-semibold whitespace-nowrap">Stock Status:</h5>
          <p className="pl-10 text-sm text-[#808080]">
            Available <span>(5,413)</span>
          </p>
        </div>

        <div className="flex pb-5">
          <h5 className="w-[5%] text-sm font-semibold">Tags:</h5>
          <p className="pl-20 md:pl-28 text-sm text-[#808080]  whitespace-wrap">
            Vegetables, Healthy, <span> </span>
            <span className="underline decoration-solid text-[rgb(0,0,0)] ">
              Chinese 
            </span>
            , Cabbage, Green Cabbage
          </p>
        </div>
      </div>
      <div>
        <img src={Video} className="md:w-[90%] w-[90%] pl-7 md:pl-0 " />
        <div className="md:flex mt-12 border-2 p-3 w-[80%] md:w-[90%] ml-[9%] md:ml-[0%] ">
          <div className="flex  items-center gap-5 pr-5">
            <img src={discount} />
            <div>
              <p className="text-sm font-semibold">64% Discount</p>
              <p className="text-xs whitespace-nowrap">
                Save your 64% money with us
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <img src={leaf} />
            <div>
              <p className="text-sm font-semibold">100% Organic</p>
              <p className="text-xs whitespace-nowrap">
                100% Organic Vegetables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
