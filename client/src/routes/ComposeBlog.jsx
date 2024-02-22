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
  const [type, setType] = useState(1);
  const typeHandler = (type) => {
    setType(type);
    setContent("");
  };

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
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    placeholder: type == 1 ? "Compose your Blog..." : "create your newsletter",
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

  const allMailHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("content", content);
    console.log(subject, content);

    fetch(`http://localhost:3003/newsletterMail`, {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setSubject("");
    setContent("");
  };

  let AcContent = <></>;

  const AcContent1 = (
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
          <button className={classes.postButton} id="BfButton" type="submit">
            Post
          </button>
          <div id="submited"></div>
        </div>
      </form>
    </>
  );

  const AcContent2 = (
    <>
      <div className={classes.homeContent}>
        <h2>Send Newsletter</h2>
      </div>
      <div className={classes.adminForm}>
        <form onSubmit={allMailHandler} className={classes.aform}>
          <label htmlFor="subject"></label>
          <input
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className={classes.content}>
            <JoditEditor
              className={classes.Jeditor}
              ref={editor}
              value={content}
              config={config}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>
          <button id="BfButton1" type="submit" className={classes.abutton}>
            Send Newsletter
          </button>
        </form>
      </div>
    </>
  );

  switch (type) {
    case 1:
      AcContent = AcContent1;

      break;
    case 2:
      AcContent = AcContent2;
      break;

    default:
      break;
  }

  return (
    <div className={classes.ComposeBlog}>
      <div className={classes.navbar}>
        <p
          onClick={() => {
            typeHandler(1);
          }}
        >
          Compose Blog
        </p>
        <p
          onClick={() => {
            typeHandler(2);
          }}
        >
          Newsletter
        </p>
      </div>
      <div className={classes.container}>{AcContent}</div>
    </div>
  );
};

export default ComposeBlog;
