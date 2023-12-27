
import styles from './PopularCategoriess.module.css';
import Image1 from "../images/image 1 (1).png"
import Image2 from "../images/image 1 (2).png"
import Image3 from "../images/image 1 (3).png"
import Image4 from "../images/image 1 (4).png"
import Image5 from "../images/image 1 (5).png"
import Image6 from "../images/image 1 (6).png"
import Image7 from "../images/image 1 (7).png"
import Image8 from "../images/image 1 (8).png"
import Image9 from "../images/image 1 (9).png"
import Image10 from "../images/image 1 (10).png"
import Image11 from "../images/image 1 (11).png"
import Image12 from "../images/image 1 (12).png"
import Group from "../images/Group.svg"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';


const PopularCategories = () => {
    const [theme] = useThemeHook();

  	return (
    		<div className={styles.popularCategories} style={{ background: theme ?  '#000000': '#FFFFFF'  }}>
      			<div className={styles.category}>
        				<img className={styles.image1Icon} alt="" src={Image1} />
        				<div className={styles.freshFruit} style={{width:'153px'}}>Diabetic Food</div>
      			</div>
      			<div className={styles.category1}>
        				<img className={styles.image1Icon} alt="" src={Image2} />
        				<div className={styles.freshFruit} style={{width:'168px'}}>Fresh Fruit</div>
      			</div>
      			<div className={styles.category2}>
        				<img className={styles.image1Icon} alt="" src={Image3}/>
        				<div className={styles.freshFruit} style={{}}>{`Bread & Bakery`}</div>
      			</div>
      			<div className={styles.category3}>
        				<img className={styles.image1Icon} alt="" src={Image4}/>
        				<div className={styles.freshFruit}>Fresh Vegetables</div>
      			</div>
      			<div className={styles.category4}>
        				<img className={styles.image1Icon} alt="" src={Image5}/>
        				<div className={styles.freshFruit} style={{width:'165px'}}>Baking Needs</div>
      			</div>
      			<div className={styles.category5}>
        				<img className={styles.image1Icon} alt="" src={Image6}/>
        				<div className={styles.freshFruit} style={{width:'149px',top:'0px'}}>{`Meat & Fish`}</div>
      			</div>
      			<div className={styles.category6}>
        				<img className={styles.image1Icon} alt="" src={Image7}/>
        				<div className={styles.freshFruit} style={{width:'165px'}}>Cooking</div>
      			</div>
      			<div className={styles.category7}>
        				<img className={styles.image1Icon} alt="" src={Image8}/>
        				<div className={styles.freshFruit} style={{width:'156px'}}>Snacks</div>
      			</div>
      			<div className={styles.category8}>
        				<img className={styles.image1Icon} alt="" src={Image9}/>
        				<div className={styles.freshFruit} style={{width:'162px'}}>Beverages</div>
      			</div>
      			<div className={styles.category9}>
        				<img className={styles.image1Icon} alt="" src={Image10}/>
        				<div className={styles.freshFruit}style={{width:'132px'}}>Dish Detergents</div>
      			</div>
      		
      			
      			<div className={styles.heading}>
        				<div className={styles.popularCategories1}style={{ color: theme ?  'white': ''  }}>Popular Categories</div>
        				<div className={styles.button}>
          					<div className={styles.viewAll}>View All</div>
          					<img className={styles.groupIcon1} alt="" src={Group} />
        				</div>
      			</div>
    		</div>);
};

export default PopularCategories;



