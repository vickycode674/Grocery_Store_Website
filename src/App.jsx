<<<<<<< HEAD
// import { Route, Routes } from "react-router-dom";

// import About from "./Components/About/About";e
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Settings from "./Components/Dashboard/Settings/Settings";
// import OrderDetails from "./Components/Dashboard/Order/OrderDetails";
// import OrderHistory from "./Components/Dashboard/Order/OrderHistory";
=======
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
>>>>>>> 8b22e131b3d45ab718e8d477f7fab976cf3124a6

import Shop1 from "./Components/Shop/MainShop/Shop1";
const App = () => {
  return (
<<<<<<< HEAD
      <div>
            <Shop1/>
            {/* <About/> */}
      </div>
=======
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Main />} />
        <Route path="/products" element={<VegProducts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
      <SubscribeOurNewsletter/>
    </div>
>>>>>>> 8b22e131b3d45ab718e8d477f7fab976cf3124a6
  );
};

export default App;
