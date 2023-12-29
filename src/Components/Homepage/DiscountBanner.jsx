import styles from './DiscountBannar.module.css';
import Group from "../images/banner/Groupwhite.svg"

const DiscountBannar = () => {
  	return (
    		<div className={styles.discountBannar}>
      			<div className={styles.info}>
        				<div className={styles.summerSaleParent}>
          					<div className={styles.summerSale}>Summer Sale</div>
          					<div className={styles.off}>
            						<span className={styles.span}>
              							<span className={styles.span1}>37%</span>
              							<span>{` `}</span>
            						</span>
            						<span>
              							<span>OFF</span>
            						</span>
          					</div>
        				</div>
        				<div className={styles.freeOnAll1}>Free on all your order, Free Shipping and  30 days money-back guarantee</div>
      			</div>
      			<div className={styles.button}>
        				<div className={styles.shopNow}>Shop Now</div>
        				<img className={styles.groupIcon1} alt="" src={Group} />
      			</div>
    		</div>);
};

export default DiscountBannar;
