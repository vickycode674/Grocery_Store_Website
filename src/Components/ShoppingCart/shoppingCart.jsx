import styles from './ShoppingCart.module.css';
import Plus from "./shoopingg/plus 1.svg";
import Minus from "./shoopingg/Minus.svg";
import Close from "./shoopingg/Close.svg";
import GreenCapsicum from "./shoopingg/Image.png";
import Redchili from "./shoopingg/Image (1).png"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const ShoppingCart = () => {
	const[theme] = useThemeHook()
	return (
		<div className={styles.shoppingCart}>
			<div className={styles.bg} style={{ backgroundColor: theme ? '#2A2C38' : '' }} />
			<div className={styles.devider2} />
			<div className={styles.devider3} />
			<div className={styles.header}>
				<div className={styles.product} style={{ color: theme ? 'white' : '' }}>Product</div>
				<div className={styles.price} style={{ color: theme ? 'white' : '' }}>price</div>
				<div className={styles.subtotal} style={{ color: theme ? 'white' : '' }}>Subtotal</div>
				<div className={styles.quantity} style={{ color: theme ? 'white' : '' }}>Quantity</div>
				<div className={styles.headerChild} />
			</div>
			<div className={styles.shopingCartProduct2}>
				<div className={styles.product1}>
					<img className={styles.imageIcon} alt="" src={GreenCapsicum} />
					<div className={styles.greenCapsicum} style={{ color: theme ? 'white' : '' }}>Green Capsicum</div>
				</div>
				<div className={styles.price1}>
					<div className={styles.greenCapsicum} style={{ color: theme ? 'white' : '' }}>$14.00</div>
				</div>
				<div className={styles.price2}>
					<div className={styles.div1} style={{ color: theme ? 'white' : '' }}>$70.00</div>
				</div>
				<img className={styles.closeIcon2} alt="" src={Close} />
				<div className={styles.quantity1} style={{ backgroundColor: theme ? '#2A2C38' : '' }}>
					<div className={styles.minus}>
						<div className={styles.container4} style={{ backgroundColor: theme ? '#535353' : '' }} />
						<img className={styles.minusIcon2} alt="" src={Minus} />
					</div>
					<div className={styles.div2} style={{ color: theme ? 'white' : '' }}>5</div>
					<div className={styles.minus}>
						<div className={styles.container4} style={{ backgroundColor: theme ? '#535353' : '' }} />
						<img className={styles.minusIcon2} alt="" src={Plus} />
					</div>
				</div>
			</div>
			<div className={styles.shopingCartProduct3}>
				<div className={styles.product1}>
					<img className={styles.imageIcon} alt="" src={Redchili} />
					<div className={styles.greenCapsicum} style={{ color: theme ? 'white' : '' }}>Red Capsicum</div>
				</div>
				<div className={styles.price1}>
					<div className={styles.greenCapsicum} style={{ color: theme ? 'white' : '' }}>$14.00</div>
				</div>
				<div className={styles.price2}>
					<div className={styles.div1} style={{ color: theme ? 'white' : '' }}>$14.00</div>
				</div>
				<img className={styles.closeIcon2} alt="" src={Close} />
				<div className={styles.quantity1} style={{ backgroundColor: theme ? '#2A2C38' : '' }}>
					<div className={styles.minus}>
						<div className={styles.container4} style={{ backgroundColor: theme ? '#535353' : '' }} />
						<img className={styles.minusIcon2} alt="" src={Minus} />
					</div>
					<div className={styles.div2} style={{ color: theme ? 'white' : '' }}>5</div>
					<div className={styles.minus}>
						<div className={styles.container4} style={{ backgroundColor: theme ? '#535353' : '' }} />
						<img className={styles.minusIcon2} alt="" src={Plus} />
					</div>
				</div>
			</div>
			<div className={styles.cta}>
				<div className={styles.button} style={{ backgroundColor: theme ? '#535353' : '' }}>
					<div className={styles.normal} style={{ color: theme ? 'white' : '' }}>Return to shop</div>
				</div>
				<div className={styles.button} style={{ backgroundColor: theme ? '#535353' : '' }}>
					<div className={styles.normal} style={{ color: theme ? 'white' : '' }}>Update Cart</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
