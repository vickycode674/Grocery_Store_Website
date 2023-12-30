import styles from "./CheckOutPage.module.css"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import NavLinks from "../Wishlist/navLinks";
import Banner from "./banner";
//import the componnets
import BillingFrame from './billingFrame';
import OrderSummery from './orderSummary';
const CheckOutpage = () => {
    const [theme] = useThemeHook()
  return (
    <>
    <NavLinks/>
     <Banner/>
    <div className={styles.main} style={{backgroundColor:theme ? 'black':''}}>
        <BillingFrame/>
        <OrderSummery/>
    </div>
    </>
  )
}

export default CheckOutpage;