import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import classes from "../assets/Styles/composeBlog.module.css";

const ComposeBlog = () => {
	const [image, setImage] = useState("");

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
			<form encType="multipart/form-data" id="blogForm">
				<div className={classes.blogForm}>
					<div className={classes.blogCTitle}>
						<input
							type="text"
							name="blogTitle"
							id=""
							placeholder="Enter your blog title"
							required
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
