import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import logo1 from "../images/Traceworks Trademarked Logo 1 (1).png";

// import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import logo from "./Footer.png";
const Footer = () => {
  const [theme] = useThemeHook();

  return (
    <footer className=" p-8" style={{ backgroundColor: theme ? "black" : "" }}>
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={`${theme ? logo1 : logo}`} alt="Logo" />
        </div>

        <div className="mb-4 md:mb-0 md:mr-4">
          <h3
            className="text-lg font-bold mb-2 [font-family:'Quicksand-Medium',Helvetica]  text-black text-[16px] "
            style={{ color: theme ? "#fff" : "" }}
          >
            Other Apps
          </h3>
          <div className="flex flex-col gap-4 [font-family:'Quicksand-Medium',Helvetica]">
            <span className="text-" style={{ color: theme ? "#fff" : "" }}>
              {" "}
              <a href="#">Food Delivery</a>{" "}
            </span>
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              <a href="#">Meat Delivery</a>
            </span>
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              <a href="#">Track Order</a>
            </span>
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              <a href="#">Shipping details</a>
            </span>
            {/* Add more words as needed */}
          </div>
        </div>

        <div className="mr-56 mt-8 [font-family:'Quicksand-Medium',Helvetica] ">
          <h3
            className="text-lg font-bold mb-2 [font-family:'Quicksand-Medium',Helvetica]  text-black text-[16px]"
            style={{ color: theme ? "#fff" : "" }}
          >
            Useful links
          </h3>
          <div className="flex flex-col gap-4 ">
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              {" "}
              <a href="#">About Us</a>{" "}
            </span>
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              <a href="#">Contact</a>
            </span>
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              <a href="#">Hot deals</a>
            </span>
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              <a href="#">Promotions</a>
            </span>
            <span className="text-gray" style={{ color: theme ? "#fff" : "" }}>
              <a href="#">New Products</a>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10  flex mr-0 md:flex-row justify-center bg-gray-60">
          <div className="text-center text-2xl md:text-left">
            <p style={{ color: theme ? "#fff" : "" }}>
              &copy; 2023 , All Rights Reserved
            </p>
          </div>
        </div>
        <div className="relative justify-end mt-[-2.4%]">
          <div
            className="flex relative  align md:mt-0 "
            style={{ backgroundcolor: theme ? "#fff" : "" }}
          >
            {/* Facebook Icon */}
            <a
              href="#"
              className="mr-2 ml-auto bg-full-rounded border-radiaus-22px text-white p-2"
              style={{ backgroundColor: "#FF6316", borderRadius: "50%" }}
            >
              <FaFacebook size={20} />
            </a>

            {/* Instagram Icon */}
            <a
              href="#"
              className="mr-2 bg-full-rounded border-radiaus text-white p-2"
              style={{ backgroundColor: "#FF6316", borderRadius: "50%" }}
            >
              <FaInstagram size={20} />
            </a>

            {/* Twitter Icon */}
            <a
              href="#"
              className="mr-2 bg-full-rounded text-white p-2"
              style={{ backgroundColor: "#FF6316", borderRadius: "50%" }}
            >
              <FaTwitter size={20} />
            </a>

            <a
              href="#"
              className="bg-full-rounded text-white p-2"
              style={{ backgroundColor: "#FF6316", borderRadius: "50%" }}
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
