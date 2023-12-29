import styles from './HotDeals.module.css';
import Star1 from "../images/product1/Star 1.svg";
import Bag from "../images/product1/Bag.svg";
import Group from "../images/Group.svg"
import Image from "../images/product1/Image.png";
import Image2 from "../images/product2/Image.png"
import Image3 from "../images/product3/Image.png"
import Image4 from "../images/product4/Image (1).png";
import Image5 from "../images/product5/Image (2).png";
import Image6 from "../images/product6/Image (3).png";
import Image7 from "../images/product7/Image.png";
import Image10 from "../images/product10/Image.png";
import Whishlist from "../images/product10/Heart.svg";
import Eye from "../images/product10/Eye 1.svg"
const HotDeals = () => {
  	return (
    		<div className={styles.hotDeals}>
      			<div className={styles.heading}>
        				<div className={styles.popularCategories}>Popular Products</div>
        				<div className={styles.button}>
          					<div className={styles.viewAll}>View All</div>
          					<img className={styles.groupIcon1} alt="" src={Group} />
        				</div>
      			</div>
      			<div className={styles.product5n}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Green Apple</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$14.99</div>
              							<div className={styles.div1}>$20.99</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
        				<div className={styles.tag}>
          					<div className={styles.sale}>Sale</div>
          					<div className={styles.viewAll}>50%</div>
        				</div>
      			</div>
      			<div className={styles.product5n1}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image2} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Fresh Indian Malta</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$20.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n2}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image3}/>
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Corn</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$20.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n3}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image4} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Big Potatoes</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$20.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n4}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image5} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Fresh Cauliflower</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$12.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n5}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image6} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Green Lettuce</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$9.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n6}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image7} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Green Capsicum</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$9.00</div>
              							<div className={styles.div1}>$20.99</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
        				<div className={styles.tag}>
          					<div className={styles.sale}>Sale</div>
          					<div className={styles.viewAll}>50%</div>
        				</div>
      			</div>
      			{/* <div className={styles.product5n7}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image8} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Eggplant</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$34.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div> */}
      			{/* <div className={styles.product5n8}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image9} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Green Chili</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$34.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div> */}
      			<div className={styles.product5n9}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image10} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Chinese cabbage</div>
            						<div className={styles.price1}>
              							<div className={styles.viewAll}>$12.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
            						<img className={styles.ratingChild} alt="" src={Star1} />
          					</div>
        				</div>
        				<img className={styles.addToWishlist1} alt="" src={Whishlist} />
        				<img className={styles.quickViewIcon1} alt="" src={Eye} />
        				<img className={styles.addToCart10} alt="" src={Bag} />
      			</div>
    		</div>);
};

export default HotDeals;
