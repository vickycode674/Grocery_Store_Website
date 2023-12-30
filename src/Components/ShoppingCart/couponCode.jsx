import styles from './CouponCode.module.css';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const CouponCode = () => {
	const [theme] = useThemeHook();
	return (
		<div className={styles.couponCode} style={{ backgroundColor: theme ? '#2A2C38' : '' }}>
			<div className={styles.couponCode1} style={{ color: theme ? 'white' : '', fontSize: '12px' }}>Coupon Code</div>
			<div className={styles.field}>
				<div className={styles.inputField} style={{ backgroundColor: theme ? '#2A2C38' : '' }}>
					<div className={styles.enterCode}>Enter code</div>
				</div>
				<div className={styles.button} style={{ backgroundColor: theme ? '#FF6316' : '' }}>
					<div className={styles.applyCoupon}>Apply Coupon</div>
				</div>
			</div>
		</div>
	);
};

export default CouponCode;
