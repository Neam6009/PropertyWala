import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import classes from "../assets/Styles/composeBlog.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const cloudUrl = "https://api.cloudinary.com/v1_1/diya8tmxd/image/upload";
const preset = "ngjbzrk4";

const ComposeBlog = () => {
	const [image, setImage] = useState("");
	const user = useSelector((state) => state.auth.user);
	const [blogTitle, setBlogTitle] = useState("");

	const blogSubmitHandler = async (e) => {
		e.preventDefault();

		const blog = {
			blogTitle: blogTitle,
			blogContent: content,
		};

		const formData = new FormData();
		formData.append("file", image);
		formData.append("upload_preset", preset);
		const res = await axios.post(cloudUrl, formData);
		const url = res.data.secure_url;

		try {
			const response = await fetch("http://localhost:3003/blogs/insert", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ user, image: url, blog }),
			});
		} catch (error) {
			// Handle network errors
			console.error("Network error:", error);
		}
	};

	const editor = useRef(null);
	const [content, setContent] = useState("");
	const config = {
		readonly: false,
		placeholder: "Compose your Blog...",
		toolbarButtonSize: "small",
		minHeight: 300,
		buttons: [
			"source",
			"|",
			"bold",
			"italic",
			"underline",
			"strikethrough",
			"|",
			"superscript",
			"subscript",
			"|",
			"ul",
			"ol",
			"|",
			"outdent",
			"indent",
			"|",
			"font",
			"fontsize",
			"brush",
			"|",
			"selectall", // Include or remove this line to disable or enable the "Select All" button
			"align",
			"undo",
			"redo",
			"cut",
			"hr",
			"eraser",
			"table",
			"|",
			"link",
			"unlink",
			"|",
			"fullsize",
			"|",
			"print",
			"about",
		],
	};

	return (
		<>
			<h1>Compose your Blog</h1>
			<form
				encType="multipart/form-data"
				id="blogForm"
				onSubmit={blogSubmitHandler}
			>
				<div className={classes.blogForm}>
					<div className={classes.blogCTitle}>
						<input
							type="text"
							name="blogTitle"
							id=""
							placeholder="Enter your blog title"
							required
							value={blogTitle}
							onChange={(e) => setBlogTitle(e.target.value)}
						/>
						<label htmlFor="image">Blog Cover Image</label>
						<input
							type="file"
							name="blogImage"
							onChange={(e) => setImage(e.target.files[0])}
							required
						/>
					</div>
					<div className={classes.blogContent}>
						<JoditEditor
							className={classes.Jeditor}
							ref={editor}
							value={content}
							config={config}
							onBlur={(newContent) => setContent(newContent)}
						/>
					</div>
					<button
						className={classes.postButton}
						id="BfButton"
						type="submit"
					>
						Post
					</button>
					<div id="submited"></div>
				</div>
			</form>
		</>
	);
};

export default ComposeBlog;
