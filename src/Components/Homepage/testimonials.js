import styles from './Testimonials.module.css';
import Image1 from "../images/testimonls/Image.svg"
import Image2 from "../images/testimonls/Image (1).svg";
import Image3 from "../images/testimonls/Image (2).svg";
import Star from "../images/testimonls/Star 10.svg";
import Vecotr from "../images/testimonls/Vector.svg"
import Group from "../images/testimonls/Group.svg"
import Group1 from "../images/testimonls/Grouppp.svg"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
const Testimonials = () => {
	const[theme] = useThemeHook();
  	return (
    		<div className={styles.testimonials} style={{backgroundColor:theme?'#fffff':''}}>
      			<div className={styles.heading}>
        				<div className={styles.clientTestimonials}>Client Testimonials</div>
        				<div className={styles.arrow}>
          					<img className={styles.aoorwIcon2} alt="" src={Group}/>
          					<img className={styles.aoorwIcon3} alt="" src={Group1}/>
        				</div>
      			</div>
      			<div className={styles.testimonial}>
        				<div className={styles.testimonialCard}>
          					<img className={styles.vectorIcon3} alt="" src={Vecotr} />
          					<div className={styles.pellentesqueEuNibh3}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</div>
          					<div className={styles.client}>
            						<div className={styles.reviewer}>
              							<img className={styles.imageIcon} alt="" src={Image1} />
              							<div className={styles.info}>
                								<div className={styles.robertFox}>Robert Fox</div>
                								<div className={styles.customer}>Customer</div>
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
        				</div>
        				<div className={styles.testimonialCard}>
          					<img className={styles.vectorIcon3} alt="" src={Vecotr} />
          					<div className={styles.pellentesqueEuNibh3}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</div>
          					<div className={styles.client}>
            						<div className={styles.reviewer}>
              							<img className={styles.imageIcon} alt="" src={Image2} />
              							<div className={styles.info}>
                								<div className={styles.robertFox}>Dianne Russell</div>
                								<div className={styles.customer}>Customer</div>
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
        				</div>
        				<div className={styles.testimonialCard}>
          					<img className={styles.vectorIcon3} alt="" src={Vecotr} />
          					<div className={styles.pellentesqueEuNibh3}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</div>
          					<div className={styles.client}>
            						<div className={styles.reviewer}>
              							<img className={styles.imageIcon} alt="" src={Image3}/>
              							<div className={styles.info}>
                								<div className={styles.robertFox}>Eleanor Pena</div>
                								<div className={styles.customer}>Customer</div>
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
        				</div>
      			</div>
    		</div>);
};

export default Testimonials;
