import styles from './Feature.module.css';
import Delivery from "../images/delivery-truck 1.svg";
import Customer from "../images/headphones 1.svg"
import Bag from "../images/shopping-bag.svg";
import Pack from "../images/package.svg"
import Delivery1 from "../images/delivery-truck12.svg";
import Customer2 from "../images/headphones 12.svg"
import Bag2 from "../images/shopping-bag12.svg";
import Pack2 from "../images/package12.svg"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';


const Featured = () => {
  	return (
      
    		<div className={styles.featured} >
      			<div className={styles.feature}>
        				<img className={styles.deliveryTruck1Icon1}  alt="" src={Delivery} />
        				<div className={styles.info}>
          					<div className={styles.freeShipping}>Free Shipping</div>
          					<div className={styles.freeShippingOn1}>Free shipping on all your order</div>
        				</div>
      			</div>
      			<div className={styles.feature}>
        				
        				<img className={styles.deliveryTruck1Icon1} alt="" src={Customer} />
        				<div className={styles.info}>
          					<div className={styles.freeShipping}>Customer Support 24/7</div>
          					<div className={styles.freeShippingOn1}>Instant access to Support</div>
        				</div>
      			</div>
      			<div className={styles.feature}>
        				<img className={styles.deliveryTruck1Icon1} alt="" src={ Bag} />
        				<div className={styles.info}>
          					<div className={styles.freeShipping}>100% Secure Payment</div>
          					<div className={styles.freeShippingOn1}>We ensure your money is save</div>
        				</div>
      			</div>
      			<div className={styles.feature}>
        				<img className={styles.deliveryTruck1Icon1} alt="" src={Pack} />
        				<div className={styles.info}>
          					<div className={styles.freeShipping}>Money-Back Guarantee</div>
          					<div className={styles.freeShippingOn1}>30 Days Money-Back Guarantee</div>
        				</div>
      			</div>
    		</div>);
};

export default Featured;
