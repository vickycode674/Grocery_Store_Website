import styles from './LatestNews.module.css';
import Arrow from "../images/blog1/Arrow.svg";
import CheatCenterd from "../images/blog1/ChatCentered 1.svg";
import Tag1 from "../images/blog1/tag 1.svg";
import User from "../images/blog1/user_3 1.svg";
import Image1 from "../images/blog1/Image.png";
import Image2 from "../images/blog2/Image.png";
import Image3 from "../images/blog3/Image.png";

import { useThemeHook } from '../GlobalComponents/ThemeProvider';
const LatestNews = () => {
	const[theme] = useThemeHook()
  	return (
    		<div className={styles.latestNews} style={{backgroundColor:theme ?'black':'d'}}>
      			<div className={styles.latestNews1}>Latest News</div>
      			<div className={styles.blogCard}>
        				<div className={styles.image3}>
          					<img className={styles.imageIcon} alt="" src={Image1} />
          					<div className={styles.date}>
            						<div className={styles.div}>18</div>
            						<div className={styles.nov}>Nov</div>
          					</div>
        				</div>
        				<div className={styles.info}>
          					<div className={styles.info1}>
            						<div className={styles.info2}>
              							<div className={styles.categories}>
                								<img className={styles.tag1Icon3} alt="" src={Tag1} />
                								<div className={styles.food}>Food</div>
              							</div>
              							<div className={styles.admin}>
                								<img className={styles.tag1Icon3} alt="" src={User} />
                								<div className={styles.food}>
                  									<span>By</span>
                  									<span className={styles.admin1}> Admin</span>
                								</div>
              							</div>
              							<div className={styles.comments}>
                								<img className={styles.chatcentered1Icon} alt="" src={CheatCenterd} />
                								<div className={styles.food}>65 Comments</div>
              							</div>
            						</div>
            						<div className={styles.curabiturPorttitorOrci3}>Curabitur porttitor orci eget neque<br></br> accumsan venenatis. Nunc fermentum.</div>
          					</div>
          					<div className={styles.button}>
            						<div className={styles.readMore}>Read More</div>
            						<img className={styles.arrowIcon3} alt="" src={Arrow} />
          					</div>
        				</div>
      			</div>
      			<div className={styles.blogCard1}>
        				<div className={styles.image3}>
          					<img className={styles.imageIcon} alt="" src={Image2} />
          					<div className={styles.date1}>
            						<div className={styles.div1}>29</div>
            						<div className={styles.nov1}>Jan</div>
          					</div>
        				</div>
        				<div className={styles.info3}>
          					<div className={styles.info1}>
            						<div className={styles.info2}>
              							<div className={styles.categories}>
                								<img className={styles.tag1Icon3} alt="" src={Tag1} />
                								<div className={styles.food}>Food</div>
              							</div>
              							<div className={styles.admin}>
                								<img className={styles.tag1Icon3} alt="" src={User} />
                								<div className={styles.food}>
                  									<span>By</span>
                  									<span className={styles.admin1}> Admin</span>
                								</div>
              							</div>
              							<div className={styles.comments}>
                								<img className={styles.chatcentered1Icon} alt="" src={CheatCenterd} />
                								<div className={styles.food}>65 Comments</div>
              							</div>
            						</div>
            						<div className={styles.curabiturPorttitorOrci4}>Eget lobortis lorem lacinia. Vivamus pharetra semper,</div>
          					</div>
          					<div className={styles.button}>
            						<div className={styles.readMore}>Read More</div>
            						<img className={styles.arrowIcon3} alt="" src={Arrow} />
          					</div>
        				</div>
      			</div>
      			<div className={styles.blogCard2}>
        				<div className={styles.image3}>
          					<img className={styles.imageIcon} alt="" src={Image3} />
          					<div className={styles.date1}>
            						<div className={styles.div2}>21</div>
            						<div className={styles.nov2}>Feb</div>
          					</div>
        				</div>
        				<div className={styles.info3}>
          					<div className={styles.info1}>
            						<div className={styles.info2}>
              							<div className={styles.categories}>
                								<img className={styles.tag1Icon3} alt="" src={Tag1} />
                								<div className={styles.food}>Food</div>
              							</div>
              							<div className={styles.admin}>
                								<img className={styles.tag1Icon3} alt="" src={User} />
                								<div className={styles.food}>
                  									<span>By</span>
                  									<span className={styles.admin1}> Admin</span>
                								</div>
              							</div>
              							<div className={styles.comments}>
                								<img className={styles.chatcentered1Icon} alt="" src={CheatCenterd} />
                								<div className={styles.food}>65 Comments</div>
              							</div>
            						</div>
            						<div className={styles.curabiturPorttitorOrci4}>Maecenas blandit risus elementum mauris malesuada.</div>
          					</div>
          					<div className={styles.button}>
            						<div className={styles.readMore}>Read More</div>
            						<img className={styles.arrowIcon3} alt="" src={Arrow} />
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default LatestNews;
