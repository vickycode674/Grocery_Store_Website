import styles from './Bannar.module.css';
import Banner1 from "../images/banner/Rectangle 54.png";
import Banner2 from "../images/banner/Rectangle 54 (1).png";
import Banner3 from "../images/banner/Rectangle 54 (2).png";
import Group from "../images/banner/Group (1).svg";

import {useState, useEffect} from "react"
const Bannar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Subtracting 10 seconds from the current time
          const newTime = new Date(currentTime.getTime() - 10000);
          setCurrentTime(newTime);
        }, 1000); 
        return () => clearInterval(intervalId);
  }, [currentTime]);
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Add leading zero if the value is less than 10
  const formatTime = (value) => (value < 10 ? `0${value}` : value);
  	return (
    		<div className={styles.bannar}>
      			<div className={styles.bannar1}>
        				<img className={styles.bannarChild} alt="" src={Banner1} />
        				<div className={styles.lowFatMeat}>Sale of the Month</div>
        				<div className={styles.bestDeals}>Best Deals</div>
        				<div className={styles.timer}>
          					<div className={styles.parent}>
            						<div className={styles.div}>00</div>
            						<div className={styles.days}>Days</div>
          					</div>
          					<div className={styles.div1}>:</div>
          					<div className={styles.parent}>
            						<div className={styles.div}>{formatTime(hours)}</div>
            						<div className={styles.days}>Hours</div>
          					</div>
          					<div className={styles.div1}>:</div>
          					<div className={styles.parent}>
            						<div className={styles.div}>{formatTime(minutes)}</div>
            						<div className={styles.days}>Mins</div>
          					</div>
          					<div className={styles.div1}>:</div>
          					<div className={styles.parent}>
            						<div className={styles.div}>{formatTime(seconds)}</div>
            						<div className={styles.days}>Secs</div>
          					</div>
        				</div>
        				<div className={styles.button}>
          					<div className={styles.shopNow}>Shop Now</div>
          					<img className={styles.groupIcon3} alt="" src={Group} />
        				</div>
      			</div>
      			<div className={styles.bannar1}>
        				<img className={styles.bannarChild} alt="" src={Banner2} />
        				<div className={styles.sale}>
          					<div className={styles.startedAt}>Started at</div>
          					<div className={styles.div7}>$79.99</div>
        				</div>
        				<div className={styles.lowFatMeat}>Low-Fat Meat</div>
        				<div className={styles.bestDeals}>85% Fat Free</div>
        				<div className={styles.button1}>
          					<div className={styles.shopNow}>Shop Now</div>
          					<img className={styles.groupIcon3} alt="" src={Group} />
        				</div>
      			</div>
      			<div className={styles.bannar3}>
        				<img className={styles.bannarChild} alt="" src={Banner3} />
        				<div className={styles.sale1}>
          					<div className={styles.startedAt} style={{color:'black'}}>Up to</div>
          					<div className={styles.div8}>
            						<div className={styles.off}>64% OFF</div>
          					</div>
        				</div>
        				<div className={styles.lowFatMeat} style={{color:'black'}}>100% Fresh Fruit</div>
        				<div className={styles.bestDeals} style={{color:'black'}}>Summer Sale</div>
        				<div className={styles.button1}>
          					<div className={styles.shopNow}>Shop Now</div>
          					<img className={styles.groupIcon3} alt="" src={Group} />
        				</div>
      			</div>
    		</div>);
};

export default Bannar;
