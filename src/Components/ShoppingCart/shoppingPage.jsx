
import styles from "./shoppingPage.module.css";
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import ShopingCart from "./shoppingCart";
import CartTotal from "./cartTotal";
import CouponCode from "./couponCode"
import Banner from "./banner"
import NavLinks from "./navlinks";
const ShoppingPage = () => {
    const [theme] = useThemeHook()
  
    return (
        <>
        <NavLinks/>
        <Banner/>
        <div className={styles.main} style={{backgroundColor:theme ? 'black':''}}>
            <h1 className={styles.heading} style={{color:theme ? 'white':'',bottom:'10px'}}>My Wishlist</h1>
            <ShopingCart/>
            <CartTotal/>
            <CouponCode/>
        </div>
        </>
    )
}

export default ShoppingPage
