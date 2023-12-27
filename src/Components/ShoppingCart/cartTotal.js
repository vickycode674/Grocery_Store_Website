import styles from './CartTotal.module.css';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const CartTotal = () => {
	const[theme] = useThemeHook()
  	return (
    		<div className={styles.cartTotal} >
      			<div className={styles.bg} style={{backgroundColor:theme?'#2A2C38':''}}/>
      			<div className={styles.button}>
        				<div className={styles.normal}>
Proceed to checkout</div>
      			</div>
      			<div className={styles.info} >
        				<div className={styles.total}style={{backgroundColor:theme?'#2A2C38':''}} >
          					<div className={styles.total1}style={{color:theme?'white':''}}>Total:</div>
          					<div className={styles.div}style={{color:theme?'white':''}}>$84.00</div>
        				</div>
        				<div className={styles.shipping}style={{backgroundColor:theme?'#2A2C38':''}}>
          					<div className={styles.total1}style={{color:theme?'white':''}}>Shipping:</div>
          					<div className={styles.free}style={{color:theme?'white':''}}>Free</div>
        				</div>
        				<div className={styles.subtotal}style={{backgroundColor:theme?'#2A2C38':''}}>
          					<div className={styles.total1}style={{color:theme?'white':''}}>Subtotal:</div>
          					<div className={styles.free}style={{color:theme?'white':''}}>$84.00</div>
        				</div>
      			</div>
      			<div className={styles.cartTotal1}style={{color:theme?'white':''}}>Cart Total</div>
    		</div>);
};

export default CartTotal;
