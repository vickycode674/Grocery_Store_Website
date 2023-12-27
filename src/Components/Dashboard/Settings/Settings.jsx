import React from "react";
import NavigationBox from "../DashboardBoxes/NavigationBox";
import AccountSetting from "./SettingsDetails.jsx/AccountSetting";
import BillingAddress from "./SettingsDetails.jsx/BillingAddress";
import ChangePassword from "./SettingsDetails.jsx/ChangePassword";

// import AccountSetting from "./SettingsDetails/AccountSetting";
// import BillingAddress from "../Settings/SettingsDetails/BillingAddress";
// import ChangePassword from "../Settings/SettingsDetails/ChangePassword";
// import NavigationBox from "../DashboardBoxes/NavigationBox";

const Settings = () => {
  return (
    <div>
      <div className="md:flex justify-center">
        <div>
          <NavigationBox />
        </div>
        <div className="flex flex-col gap-3">
          <AccountSetting />
          <BillingAddress />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Settings;
