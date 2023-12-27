import styles from './Banner1.module.css';
import Home from "./images/home-1 1.svg";
import Group from "./images/Group.svg";
import Vector from "./images/Vector.svg";

const Banner1 = () => {
  	return (
    		<div className={styles.breadcrumbs}>
      			<div className={styles.location}>
        				<img className={styles.home11Icon1} alt="" src={Home} />
        				<img className={styles.groupIcon1} alt="" src={Group}/>
        				<div className={styles.home}>Shopping Cart</div>
        				<img className={styles.groupIcon1} alt="" src={Vector} />
        				<div className={styles.vegetables}>Checkout</div>
      			</div>
    		</div>);
};

export default Banner1;
