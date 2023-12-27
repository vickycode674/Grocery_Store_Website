import styles from './Breadcrumbs.module.css';


const Breadcrumbs = () => {
  	return (
    		<div className={styles.breadcrumbs}>
      			<div className={styles.location}>
        				<img className={styles.home11Icon1} alt="" src="home-1 1.png" />
        				<img className={styles.vectorIcon1} alt="" src="Vector.png" />
        				<div className={styles.vegetables}>Wishlist</div>
      			</div>
    		</div>);
};

export default Breadcrumbs;
