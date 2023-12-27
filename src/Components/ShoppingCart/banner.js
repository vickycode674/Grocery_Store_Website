import styles from './Banner.module.css';
import Home from "./shoopingg/home-1 1.svg";
import Vector from "./shoopingg/Vector.svg"

const Banner = () => {
  	return (
    		<div className={styles.breadcrumbs}>
      			<div className={styles.location}>
        				<img className={styles.home11Icon1} alt="" src={Home} />
        				<img className={styles.vectorIcon1} alt="" src={Vector} />
        				<div className={styles.vegetables}>{`Wishlist`}</div>
      			</div>
    		</div>);
};

export default Banner;
