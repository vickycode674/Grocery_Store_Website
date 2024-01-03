import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import Settings from "./Components/Dashboard/Settings/Settings";
import OrderDetails from "./Components/Dashboard/Order/OrderDetails";
import OrderHistory from "./Components/Dashboard/Order/OrderHistory";
import VegProducts from "./Components/Products/VegProducts";
import Home from "./Components/pages/Home";
import Main from './Components/Contact/Main'
// import Header from './Components/Homepage/Header'
import SubscribeOurNewsletter from "./Components/Homepage/SubscribeOurNewsletter";
import SignIn from "./Components/SignIn/SignIn";
import Shop1 from './Components/Shop/MainShop/Shop1'
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Whishlist from "./Components/Wishlist/container"
import ShoppingPage from "./Components/ShoppingCart/shoppingPage";
import CheckOutpage from "./Components/Checkout/checkOutpage";
import Navbarrr from "./Components/home/navbar"
import Footer from "./Components/home/footer";
import { useThemeHook } from "./Components/GlobalComponents/ThemeProvider";
const App = () => {
  const [theme] = useThemeHook()
  return (
    <div style={{backgroundColor:theme?'black':'white'}}>
      <Navbarrr/>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Whishlist />} />
        <Route path="/shoppingpage" element={<ShoppingPage />} />
        <Route path="/checkoutpage" element={<CheckOutpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Main />} />
        <Route path="/products" element={<VegProducts />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path='/shop' element={<Shop1/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/order-history" element={<OrderHistory />} />
        {/* <Route path="/faq" element={<Page/>} /> */}

      </Routes>
<<<<<<< HEAD
      <SubscribeOurNewsletter/>
       <Footer/> 
=======
      <SubscribeOurNewsletter/><br></br>
      <Footer/>
>>>>>>> 4cfb2b7b4cee592feb4a9f126851b6953bc02a3f
      {/* <Bottam/> */}
    </div>
  );
};

export default App;
