// import React from "react";
import "./faq.css";
import plus from "./Plus.png";

const FaqItem = ({ title, content, iconSrc }) => (
  <div className="overlap-group">
    <div className="div">
      <p className="p">{title}</p>
      <div className="plus ">
        <img className="img cursor-pointer" alt="Plus" src={iconSrc} />
      </div>
    </div>
    <div className="answer">
      <p className="text-wrapper-2">{content}</p>
    </div>
  </div>
);

export const Faq = () => {
  return (
    <div className="faqs">
      <p className="text-wrapper">Welcome, Let’s Talk About Our Ecobazar</p>

      {/* FAQ 1 */}
      <div className="overlap-group-wrapper">
        <FaqItem
          title="In elementum est a ante sodales iaculis."
          content="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
          iconSrc={plus}
        />
      </div>

      {/* FAQ 2 */}
      <div className="div-2">
        <p className="text-wrapper-3">Etiam lobortis massa eu nibh tempor elementum.</p>
        <div className="plus-wrapper">
          <img className="img" alt="Plus" src={plus} />
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="div-3">
        <p className="text-wrapper-3">In elementum est a ante sodales iaculis.</p>
        <div className="plus-wrapper">
          <img className="img" alt="Plus" src={plus} />
        </div>
      </div>

      {/* FAQ 4 */}
      <div className="div-4">
        <p className="text-wrapper-3">Aenean quis quam nec lacus semper dignissim.</p>
        <div className="plus-wrapper">
          <img className="img" alt="Plus" src={plus} />
        </div>
      </div>

      {/* FAQ 5 */}
      <div className="div-5">
        <p className="text-wrapper-3">Nulla tincidunt eros id tempus accumsan.</p>
        <div className="plus-wrapper">
          <img className="img" alt="Plus" src={plus} />
        </div>
      </div>
    </div>
  );
};
