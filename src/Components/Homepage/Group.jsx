import styles from './Group.module.css';
import Logo from "../images/Traceworks Trademarked Logo 1 (1).png";
import Logo2 from "../images/Traceworks.png";
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const Footer = () => {
    const[theme] = useThemeHook()
  	return (
    		<div className={styles.footer}>
      			<div className={styles.footerChild} />
      			<div className={styles.otherAppsParent} style={{color : theme? 'white':'black',fontSize:'16px'}}> 
        				<div className={styles.otherApps}>Other apps</div>
        				<div className={styles.foodDeliveryParent} style={{fontSize:'12px'}}>
          					<div className={styles.foodDelivery}>Food Delivery</div>
          					<div className={styles.foodDelivery}>Meat Delivery</div>
          					<div className={styles.foodDelivery}>Track Order</div>
          					<div className={styles.foodDelivery}>Shipping Details</div>
        				</div>
      			</div>
      			<div className={styles.usefulLinksParent} style={{color : theme? 'white':'black',fontSize:'16px'}}>
        				<div className={styles.otherApps}>Useful links</div>
        				<div className={styles.aboutUsParent} style={{fontSize:'12px'}}>
          					<div className={styles.foodDelivery}>About Us</div>
          					<div className={styles.foodDelivery}>Conact</div>
          					<div className={styles.foodDelivery}>Hot deals</div>
          					<div className={styles.foodDelivery}>Promotions</div>
          					<div className={styles.foodDelivery}>New products</div>
        				</div>
      			</div>
      			<img className={styles.traceworksTrademarkedLogo21} alt="" src={theme? Logo : Logo2} />
    		</div>);
};

export default Footer;
