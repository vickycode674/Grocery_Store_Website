import styles from './FollowUsOnInstagram.module.css';
import Icon from "../images/instagram/Icons.svg";
import Instagram from "../images/instagram/Instagram Post.png";
import Instagram1 from "../images/instagram/Instagram Post (1).png"
import Instagram2 from "../images/instagram/Instagram Post (2).png"
import Instagram3 from "../images/instagram/Instagram Post (3).png"
import Instagram4 from "../images/instagram/Instagram Post (4).png"
import Instagram5 from "../images/instagram/Instagram Post (5).png"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const FollowUsOnInstagram = () => {
    const [theme] = useThemeHook()
  	return (
    		<div className={styles.followUsOnInstagram1} >
      			<div className={styles.followUsOn1} style={{color:theme ? 'white':'black'}}>Follow us on Instagram</div>
      			<img className={styles.instagramPostIcon} alt="" src={Instagram} />
      			<img className={styles.instagramPostIcon1} alt="" src={Instagram1} />
      			<img className={styles.instagramPostIcon2} alt="" src={Instagram2} />
      			<img className={styles.instagramPostIcon3} alt="" src={Instagram3} />
      			<img className={styles.instagramPostIcon4} alt="" src={Instagram4} />
      			<div className={styles.instagramPost}>
        				<img className={styles.instagramPostIcon5} alt="" src={Instagram5} />
        				<img className={styles.icons1} alt="" src={Icon} />
      			</div>
    		</div>);
};

export default FollowUsOnInstagram;
