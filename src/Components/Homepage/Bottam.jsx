import styles from './FooterBottom.module.css';
import FaceBook from "../images/bottamLogo/svgexport-6 (4) 1.svg";
import Linkdln from "../images/bottamLogo/svgexport-6 (7) 1.svg";
import Instagram from "../images/bottamLogo/svgexport-6 (5) 1.svg";
import Twitter from "../images/bottamLogo/svgexport-6 (6) 1.svg";
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
const FooterBottom = () => {
    const[theme] = useThemeHook()
  	return (
    		<div className={styles.footerBottom}>
      			<div className={styles.allRightsReserved1} style={{color:theme?'':'black',borderRadius:'10px'}}>© 2022, All rights reserved</div>
      			<div className={styles.socialmediaIcons}>
        				<img className={styles.socialmediaIconsChild} style={{backgroundColor:theme?'':'#FF6316',borderRadius:'10px'}}    alt="" src={FaceBook} />
        				<img className={styles.socialmediaIconsChild} style={{backgroundColor:theme?'':'#FF6316',borderRadius:'10px'}}    alt="" src={Linkdln} />
        				<img className={styles.socialmediaIconsChild} style={{backgroundColor:theme?'':'#FF6316',borderRadius:'10px'}}    alt="" src={Instagram} />
        				<img className={styles.socialmediaIconsChild} style={{backgroundColor:theme?'':'#FF6316',borderRadius:'10px'}}     alt="" src={Twitter} />
      			</div>
    		</div>);
};

export default FooterBottom;
