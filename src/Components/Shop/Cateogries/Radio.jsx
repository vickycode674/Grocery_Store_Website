import React from "react";
import PropTypes from "prop-types";

export const Radio = ({ property1 }) => {
  return (
    <div>
      {/* Your radio button implementation goes here */}
      <input type="radio" checked={property1 === "checked"} />
    </div>
  );
};

Radio.propTypes = {
  property1: PropTypes.string,
};

export default Radio;
