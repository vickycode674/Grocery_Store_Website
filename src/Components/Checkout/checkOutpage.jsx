import styles from "./CheckOutPage.module.css"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import NavLinks from "../Wishlist/navLinks";
//import the componnets
import BillingFrame from './billingFrame';
import OrderSummery from './orderSummary';
const CheckOutpage = () => {
    const [theme] = useThemeHook()
  return (
    <>
    <NavLinks/>
    <div className={styles.main} style={{backgroundColor:theme ? 'black':''}}>
        <BillingFrame/>
        <OrderSummery/>
    </div>
    </>
  )
}

export default CheckOutpage;