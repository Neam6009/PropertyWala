import React from "react";
import classes from "../assets/Styles/blog-details.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import authorImg from "../assets/images/PW_aboutUs_person2.png";
import blog1img from "../assets/images/PW_blogs_image6.jpg";
import blog2img from "../assets/images/PW_blogs_image11.jpg";

const BlogDetailsPage = () => {
	const blog = {
		title: "How to stage your home for a quick sale",
		author: "John Doe",
		authorImage: "https://via.placeholder.com/400", // Sample author image URL
		date: "December 15, 2023",
		content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      Sed nisi. Nulla quis sem at nibh elementum imperdiet.
      Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
    `, // Blog content
		imageUrl: "https://via.placeholder.com/800x400", // Sample blog image URL
	};

	return (
		<>
			<header className={classes.header}>
				<h1>{blog.title}</h1>
				<div>
					<p>
						By <span>{blog.author}</span> .{" "}
						<span className={classes.greyText}>Last Updated </span>
						{blog.date}
					</p>
				</div>
				<div className={classes.contact1}>
					<FaLinkedin />
					<FaTwitter />
					<FaInstagram />
				</div>
			</header>

			<div className={classes.image1}>
				<img src={blog.imageUrl} alt="img2" />
			</div>

			<section>
				<div className={classes.Info}>{blog.content}</div>

				<div className={classes.authorDetails}>
					<img src={authorImg} alt="p2" />
					<div>
						<span>{blog.author}</span>
					</div>
				</div>
			</section>

			<section>
				<h2 className={classes.sm}>Similar Stories</h2>

				<div className={classes.parentContainer}>
					<div className={classes.childContainer}>
						<img src={blog1img} alt="blogImage6" />
						<div>
							<h3>How WeWork India built its success story?</h3>
							<span>February 8th, 2023</span>
						</div>
					</div>

					<div className={classes.childContainer}>
						<img src={blog2img} alt="blo{classes.Image1}" />
						<div>
							<h3>
								Budget 2023- What's in it for Real Estate
								sector?
							</h3>
							<span>February 2nd, 2023</span>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className={classes.contentContainer}>
					<h2>Sign up for our email news letter</h2>
					<p className={classes.greyText}>
						keep up with the most recent information about the real
						estate market!
					</p>
					<span>
						<input type="email" name="" id="" />
						<button>Sign Up</button>
					</span>

					<div className={classes.contact}>
						<h3>Contact Us:</h3>
						<div>
							<span>
								<FaFacebook />
							</span>
							<span>
								<FaTwitter />
							</span>
							<span>
								<FaInstagram />
							</span>
							<span>
								<FaLinkedin />
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetailsPage;
