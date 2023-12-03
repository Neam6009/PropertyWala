import React from "react";
import classes from "../assets/Styles/blogs.module.css";
import blogImage1 from "../assets/images/PW_blogs_image1.jpg";
import blogImage2 from "../assets/images/PW_blogs_image2.jpg";
import blogImage3 from "../assets/images/PW_blogs_image3.jpg";
import blogImage4 from "../assets/images/PW_blogs_image4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SimpleSlider from "../components/blogCarousel";
import PW_aboutUS_office from "../assets/images/PW_aboutUS_office.webp";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Blogs = ({ blogs }) => {
	return (
		<div className={classes.all}>
			<header className={classes.header1}>
				<h2>
					Revolutionize your property game with the latest updates
					from PropertyWala!
				</h2>
				<p>
					Considering making real estate investments? Follow
					PropertyWala's latest stories and news to stay informed.
				</p>
				<div className={classes.icontainer}>
					<input
						className={classes.input1}
						type="text"
						placeholder="Enter your email address"
					/>
					<button>Sign up</button>
				</div>
			</header>
			<section>
				<div className={classes.split}>
					<div>
						<p>date</p>
						<h3>title</h3>
						<a href="#>" style={{ textDecoration: "none" }}>
							<button>Know more</button>
						</a>
					</div>
					<img
						src={blogImage1}
						alt="img2"
						className={classes.imgstyle}
					/>
				</div>
			</section>

			<section>
				<h2 className={classes.underline}>Our current developments.</h2>
				<div className={classes.flexGrid}></div>
			</section>

			<div className={classes.blogCarousel}>
				<SimpleSlider />
			</div>

			<section>
				<div className={classes.fbText}>
					<h2 className={classes.underline}>Featured Blogs</h2>
				</div>
				<div className={classes.featuredBlogs}></div>
			</section>

			<section>
				<div className={classes.newsletter}>
					<img src={PW_aboutUS_office} alt="office" />
					<div className={classes.contentContainer}>
						<h2>Sign up for our email news letter</h2>
						<p className={classes.greyText}>
							keep up with the most recent information about the
							real estate market!
						</p>
						<span>
							<input type="email" name="" id="" />
							<button>Sign Up</button>
						</span>

						<div className={classes.contact}>
							<h3>Contact Us:</h3>
							<div>
								<span>
									<FontAwesomeIcon icon={faFacebook} />
								</span>
								<span>
									<FontAwesomeIcon icon={faTwitter} />
								</span>
								<span>
									<FontAwesomeIcon icon={faInstagram} />
								</span>
								<span>
									<FontAwesomeIcon icon={faLinkedin} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blogs;
