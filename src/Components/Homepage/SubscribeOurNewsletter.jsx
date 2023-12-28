import styles from "./SubscribeOurNewsletter.module.css";
import FaceBook from "../images/footer/facebook 1.svg";
import Instagram from "../images/footer/instagram 1.svg";
import Twitter from "../images/footer/twitter 1.svg";
import Pintrest from "../images/footer/Social Media.svg";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
const SubscribeOurNewsletter = () => {
  const [theme] = useThemeHook();
  return (
    <div
      className={styles.subscribeOurNewsletter1}
      style={{ backgroundColor: theme ? "#ff6316" : "#F7F7F7" }}
    >
      {/* <div className={styles.subscribeOurNewsletterChild} /> */}
      <div className={styles.subcribeOurNewsletterParent}>
        <div className={styles.subcribeOurNewsletter1}>
          Subcribe our Newsletter
        </div>
        <div className={styles.pellentesqueEuNibh1}>
          Pellentesque eu nibh eget mauris congue tellus. Phasellus <br></br>
          imperdiet elit eu magna.
        </div>
      </div>
      {/* <div className={styles.subscribe}>
        <div className={styles.inputField}>
          <div className={styles.yourEmailAddress1}>Your email address</div>
        </div>
        <div className={styles.button}>
          <div className={styles.subscribe1}>Subscribe</div>
        </div>
      </div> */}
	  <div className="flex items-center bg-white rounded-full pl-5">
		<input type="text" className="" placeholder="Your email address"/>
		<button className="bg-[#FF6316] rounded-full p-3 text-white text-sm font-semibold">Subscribe</button>
	  </div>
      <div className={styles.socialMediaParent}>
        <img
          className={styles.socialMediaIcon4}
          style={{
            backgroundColor: theme ? "" : "#ff6316",
            borderRadius: "50%",
            padding:"0.8rem"
          }}
          alt=""
          src={FaceBook}
        />
        <img
          className={styles.socialMediaIcon5}
          style={{
            backgroundColor: theme ? "" : "#ff6316",
            borderRadius: "50%",
            padding:"0.8rem"
          }}
          alt=""
          src={Instagram}
        />
        <img
          className={styles.socialMediaIcon5}
          style={{
            backgroundColor: theme ? "" : "#ff6316",
			borderRadius: "50%",
            padding:"0.8rem"
          }}
          alt=""
          src={Twitter}
        />
        <img
          className={styles.socialMediaIcon5}
          style={{
            backgroundColor: theme ? "#ffffff" : "#ff6316",
            borderRadius: "50%",
            // width: "150px",
            // height: "44px",
          }}
          alt=""
          src={Pintrest}
        />
      </div>
    </div>
  );
};

export default SubscribeOurNewsletter;
