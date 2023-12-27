import styles from './PopularProducts.module.css';
import Gruop from "../images/Group.svg";
import Bag from "../images/popularProducts/Rectangle.svg"
import Heart from "../images/popularProducts/Heart.svg"
import Eye from "../images/popularProducts/Eye 1.svg";
import Star from "../images/popularProducts/Star 1.svg"
import Image from "../images/popularProducts/Image.png"
import Lettuce from "../images/popularProducts/Imagelettcus.png";
import EggPlant from "../images/popularProducts/Imagebringle.png";
import GreenCapsicum from "../images/popularProducts/Imagecapsicum.png";
import GreenChili from "../images/popularProducts/Imagechiki.png";
import Potota from "../images/popularProducts/Imagepatato.png";
import Corn from "../images/popularProducts/Image (1)corn.png";
import RedChili from "../images/popularProducts/Image (2)redchili.png"
import Tamoto from "../images/popularProducts/Image (3)tomoto.png";
import Mango from "../images/popularProducts/Image (4)mango.png";
import React, { useState, useEffect } from 'react';

const PopularProducts = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Subtracting 10 seconds from the current time
          const newTime = new Date(currentTime.getTime() - 10000);
          setCurrentTime(newTime);
        }, 1000); // Update every second
    
        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [currentTime]);
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // Add leading zero if the value is less than 10
        const formatTime = (value) => (value < 10 ? `0${value}` : value);

  	return (
    		<div className={styles.popularProducts}>
      			<div className={styles.popularProductsChild} />
      			<div className={styles.heading}>
        				<div className={styles.popularCategories}>Hot Deals</div>
        				<div className={styles.button}>
          					<div className={styles.viewAll}>View All</div>
          					<img className={styles.groupIcon1} alt="" src={Gruop} />
        				</div>
      			</div>
      			<div className={styles.product5n}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Fresh Cauliflower</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$12.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n1}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={RedChili} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Red Chili</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$12.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n2}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Corn} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Corn</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$12.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n3}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Potota} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Big Potatoes</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$12.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n4}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Lettuce} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Green Lettuce</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$9.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n5}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={GreenCapsicum} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Green Capsicum</div>
            						<div className={styles.price5}>
              							<div className={styles.viewAll}>$9.00</div>
              							<div className={styles.div7}>$20.99</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
        				<div className={styles.tag}>
          					<div className={styles.sale}>Sale</div>
          					<div className={styles.viewAll}>50%</div>
        				</div>
      			</div>
      			<div className={styles.product5n6}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Tamoto} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Red Tomatos</div>
            						<div className={styles.price5}>
              							<div className={styles.viewAll}>$9.00</div>
              							<div className={styles.div7}>$20.99</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
        				<div className={styles.tag}>
          					<div className={styles.sale}>Sale</div>
          					<div className={styles.viewAll}>50%</div>
        				</div>
      			</div>
      			<div className={styles.product5n7}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={GreenChili} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Green Chili</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$34.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n8}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Mango} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Surjapur Mango</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$34.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.product5n9}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={Image} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Chinese cabbage</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$12.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
      			<div className={styles.bigProducts}>
        				<div className={styles.image12}>
          					<img className={styles.imageIcon10} alt="" src={Image} />
          					<div className={styles.button1}>
            						<img className={styles.wishlistIcon1} alt="" src={Heart} />
            						<div className={styles.button2}>
              							<div className={styles.popularCategories}>Add to Cart</div>
              							<img className={styles.rectangleIcon1} alt="" src={Bag} />
            						</div>
            						<img className={styles.wishlistIcon1} alt="" src={Eye} />
          					</div>
          					<div className={styles.tagParent}>
            						<div className={styles.tag2}>
              							<div className={styles.sale}>Sale</div>
              							<div className={styles.viewAll}>50%</div>
            						</div>
            						<div className={styles.tag3}>
              							<div className={styles.sale}>Best Sale</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.info10}>
          					<div className={styles.chineseCabbage}>Chinese cabbage</div>
          					<div className={styles.price10}>
            						<div className={styles.viewAll}>$12.00</div>
            						<div className={styles.div7}>$24.00</div>
          					</div>
          					<div className={styles.rating10}>
            						<img className={styles.ratingChild48} alt="" src={Star} />
            						<img className={styles.ratingChild48} alt="" src={Star} />
            						<img className={styles.ratingChild48} alt="" src={Star} />
            						<img className={styles.ratingChild48} alt="" src={Star} />
            						<img className={styles.ratingChild48} alt="" src={Star} />
            						<div className={styles.feedback}> (524 Feedback)</div>
          					</div>
        				</div>
        				<div className={styles.hurryUpOfferEndsIn1}>
          					<div className={styles.hurryUpOffer1}>Hurry up! Offer ends In:</div>
          					<div className={styles.time}>
                                
            						<div className={styles.days}>
              							<div className={styles.viewAll}>01</div>
              							<div className={styles.days1}>Days</div>
            						</div>
                                    <div className={styles.div20}>:</div>
            						<div className={styles.days}>
              							<div className={styles.viewAll}>{formatTime(hours)}</div>
              							<div className={styles.days1}>Hours</div>
            						</div>
            						<div className={styles.div20}>:</div>
            						<div className={styles.days}>
              							<div className={styles.viewAll}>{formatTime(minutes)}</div>
              							<div className={styles.days1}>Mins</div>
            						</div>
            						<div className={styles.div22}>:</div>
            						<div className={styles.days}>
              							<div className={styles.viewAll}>{formatTime(seconds)}</div>
              							<div className={styles.days1}>Secs</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.product5n10}>
        				<div className={styles.productImage}>
          					<img className={styles.imageIcon} alt="" src={EggPlant} />
        				</div>
        				<div className={styles.productInfo}>
          					<div className={styles.info}>
            						<div className={styles.greenApple}>Eggplant</div>
            						<div className={styles.price}>
              							<div className={styles.viewAll}>$34.00</div>
            						</div>
          					</div>
          					<div className={styles.rating}>
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
            						<img className={styles.ratingChild} alt="" src={Star} />
          					</div>
        				</div>
        				<img className={styles.addToCart12} alt="" src={Bag} />
      			</div>
    		</div>);
};

export default PopularProducts;
