import styles from './OrderPage.module.css';
import Image1 from "./images/Image.png";
import Image2 from "./images/Image (1).png"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
const OrderSummery = () => {
    const[theme] = useThemeHook()
return (
<div className={styles.orderSummery} style={{ backgroundColor: theme ? '' : 'white' }}>
<div className={styles.orderSummery1}>
<div className={styles.orderSummery2} style={{ color: theme ? '' : 'black' }}>Order Summery</div>
<div className={styles.product}>
<div className={styles.product1}>
	<div className={styles.info}>
		<img className={styles.imageIcon} alt="" src={Image1} />
		<div className={styles.greenCapsicum} style={{color: theme?'':'black'}}>Green Capsicum</div>
		<div className={styles.greenCapsicum} style={{color: theme?'':'black'}}>x5</div>
	</div>
	<div className={styles.div} style={{color: theme?'':'black'}}>$70.00</div>
</div>
<div className={styles.product1}>
	<div className={styles.info}>
		<img className={styles.imageIcon} alt="" src={Image2} />
		<div className={styles.greenCapsicum} style={{color: theme?'':'black'}}>Red Capsicum</div>
		<div className={styles.greenCapsicum} style={{color: theme?'':'black'}}>x1</div>
	</div>
	<div className={styles.div} style={{color: theme?'':'black'}}>$14.00</div>
</div>
        				</div>
        				<div className={styles.total}>
          					<div className={styles.subtotal} style={{backgroundColor: theme?'':'white'}}>
            						<div className={styles.greenCapsicum} style={{color: theme?'':'black'}}>Subtotal:</div>
            						<div className={styles.free} style={{color: theme?'':'black'}}>$84.00</div>
          					</div>
          					<div className={styles.totalChild} />
          					<div className={styles.subtotal} style={{backgroundColor: theme?'':'white'}}>
            						<div className={styles.greenCapsicum} style={{color: theme?'':'black'}}>Shipping:</div>
            						<div className={styles.free}style={{color: theme?'':'black'}}>Free</div>
          					</div>
          					<div className={styles.totalChild} />
          					<div className={styles.total1} style={{backgroundColor: theme?'':'white'}}>
            						<div className={styles.greenCapsicum}style={{color: theme?'':'black'}}>Total:</div>
            						<div className={styles.div3}style={{color: theme?'':'black'}}>$84.00</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.paymentMethod}>
        				<div className={styles.paymentMethod1}style={{color: theme?'':'black'}}>Payment Method</div>
        				<div className={styles.method}>
          					<div className={styles.info}>
            						
                                    <input type='radio' className={styles.radio}/>
            						<div className={styles.greenCapsicum} style={{color:theme?'':'black'}} >Cash on Delivery</div>
          					</div>
          					<div className={styles.info}>
            						
                                    <input type='radio' className={styles.radio}/>
            						<div className={styles.greenCapsicum} style={{color:theme?'':'black'}}>Google Pay</div>
          					</div>
          					<div className={styles.amazonPay}>
            						
                                    <input type='radio' className={styles.radio}/>
            						<div className={styles.greenCapsicum} style={{color:theme?'':'black'}}>Amazon Pay</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.button}>
        				<div className={styles.normal6}>Place Order</div>
      			</div>
    		</div>);
};

export default OrderSummery;
