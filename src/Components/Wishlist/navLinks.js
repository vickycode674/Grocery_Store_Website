import styles from './NavLinks.module.css';
import Group from "./whislist/Group.svg";
import Phone from "./whislist/PhoneCall 1.svg"

const NavLinks = () => {
  	return (
    		<div className={styles.navLinks}>
      			<div className={styles.navLinks1}>
        				<div className={styles.navLinks2}>
          					<div className={styles.home}>Home</div>
          					<img className={styles.chevronDownIcon4} alt="" src={Group} />
        				</div>
        				<div className={styles.navLinks2}>
          					<div className={styles.home}>Shop</div>
          					<img className={styles.chevronDownIcon4} alt="" src={Group} />
        				</div>
        				<div className={styles.navLinks2}>
          					<div className={styles.home}>Pages</div>
          					<img className={styles.chevronDownIcon4} alt="" src={Group} />
        				</div>
        				<div className={styles.navLinks2}>
          					<div className={styles.home}>Blog</div>
          					<img className={styles.chevronDownIcon4} alt="" src={Group} />
        				</div>
        				<div className={styles.navLinks6}>
          					<div className={styles.home}>About Us</div>
        				</div>
        				<div className={styles.navLinks6}>
          					<div className={styles.home}>Contact Us</div>
        				</div>
      			</div>
      			<div className={styles.callNow}>
        				<img className={styles.phonecall1Icon} alt="" src={Phone} />
        				<div className={styles.home}>(219) 555-0114</div>
      			</div>
    		</div>);
};

export default NavLinks;
