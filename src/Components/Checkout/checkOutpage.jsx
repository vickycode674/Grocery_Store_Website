import styles from "./CheckOutPage.module.css"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import NavLinks from "../Wishlist/navLinks";
import Banner from "./banner";
//import the componnets
import Check from "./check"
import OrderSummery from './payment';
const CheckOutpage = () => {
    const [theme] = useThemeHook()
  return (
    <>
    <NavLinks/>
     <Banner/>
    <div className={styles.main} style={{backgroundColor:theme ? 'black':''}}>
        <OrderSummery/>
        <Check/>
    </div>
    </>
  )
}

export default CheckOutpage;