
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import Settings from "./Components/Dashboard/Settings/Settings";
import OrderDetails from "./Components/Dashboard/Order/OrderDetails";
import OrderHistory from "./Components/Dashboard/Order/OrderHistory";
import VegProducts from "./Components/Products/VegProducts";
import Home from "./Components/pages/Home";
import Main from './Components/Contact/Main'
import Header from './Components/Homepage/Header'
import SubscribeOurNewsletter from "./Components/Homepage/SubscribeOurNewsletter";
import SignIn from "./Components/SignIn/SignIn";
import Shop1 from './Components/Shop/MainShop/Shop1'

import Footer from "./Components/Homepage/Footer";
import Page from "./Components/Faq/Page"

// import Footer from "./Components/Homepage/Group";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Bottam from "./Components/Homepage/Bottam"
import Footer from "./Components/Homepage/Footer";
import Page from "./Components/Faq/Page"

// import Footer from "./Components/Homepage/Group";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Bottam from "./Components/Homepage/Bottam"

// >>>>>>> f98f1276345efdef48172c02dbbde2a35cac3d3d

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/faq" element={<Page />} />

      </Routes>
      <SubscribeOurNewsletter/>
      <Footer/>
      <Bottam/>
    </div>

  );
};

export default App;
