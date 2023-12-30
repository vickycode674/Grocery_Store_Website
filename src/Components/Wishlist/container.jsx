import styles from "./wishlistContainer.module.css"
import Wishlist from './wishlist';
import  {useThemeHook}  from '../GlobalComponents/ThemeProvider';
import NavLinks from "./navLinks";
import Banner from "./banner";
const Container = () => {
	const [theme] = useThemeHook()
  return (
    <>
    <NavLinks/>
    <Banner/>
    <div className={styles.main} style={{backgroundColor:theme ? 'black':''}}>
      
        <h1 className={styles.heading} style={{color:theme ? 'white':''}}>My Wishlist</h1>
        <Wishlist/>
    </div>
    </>
  )
}

export default Container;