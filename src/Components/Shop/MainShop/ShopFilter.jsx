// import React from "react";
// import ".../shop1.css";
import "../MainShop/shop1.css" ;

 const ShopFilter = () => {
  return (
    <button className="button">
      <div className="text-wrapper">Filter</div>
      <div className="filter">
        <div className="overlap">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="vector.svg" />
            <div className="ellipse" />
          </div>
          <div className="div">
            <img className="img" alt="Vector" src="image.svg" />
            <div className="ellipse-2" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ShopFilter;

