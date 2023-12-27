import styles from './Banner.module.css';
import Home from "./whislist/home-1 1.svg";
import Vector from "./whislist/Vector.svg"

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
