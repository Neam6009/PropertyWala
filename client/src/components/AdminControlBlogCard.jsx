import React from "react";
import classes from "../assets/Styles/AdminControlBlogCard.module.css";

const AdminControlBlogCard = ({ blog }) => {
	const [deleted, setDeleted] = useState(false);

	const removeBlogHandler = async () => {
		fetch(`http://localhost:3003/blogs/deleteBlog/${blog._id}`, {
			method: "POST",
		}).then(() => setDeleted(true));
	};

	return (
		<div>
			{!deleted && (
				<div className={classes.blogCardAdminControl}>
					<div className={classes.blogCardAdminControlChild}>
						<div>
							<p className={classes.icon}>{blog.name[0]}</p>
						</div>
						<div>
							<h2>{blog.title}</h2>
							<div className={classes.card__handle}>
								<span className={classes.handle}>
									{blog.date}
								</span>
							</div>
						</div>
					</div>
					<div className={classes.blogCardAdminControlButtons}>
						<button onClick={removeBlogHandler}>Remove Blog</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminControlBlogCard;
