// import BillingBox from "./DashboardBoxes/BillingBox";
// import NavigationBox from "./DashboardBoxes/NavigationBox";
// import OrderBox from "./DashboardBoxes/OrderBox";
// import ProfileBox from "./DashboardBoxes/ProfileBox";

import BillingBox from "./DashboardBoxes/BillingBox";
import NavigationBox from "./DashboardBoxes/NavigationBox";
import OrderBox from "./DashboardBoxes/OrderBox";
import ProfileBox from "./DashboardBoxes/ProfileBox";

const Dashboard = () => {
  return (
    <div className="md:flex justify-center">
      <div>
        <NavigationBox />
      </div>
      <div className="md:flex">
        <div className="md:flex flex-col">
          <div className="md:flex gap-3">
            <ProfileBox />
            <BillingBox />
          </div>
          <OrderBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
