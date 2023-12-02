import React from "react";
import classes from "../assets/Styles/AdminControlBlogCard.module.css";

const AdminControlBlogCard = () => {
  return (
    <div>
      <div className={classes.blogCardAdminControl}>
        <div className={classes.blogCardAdminControlChild}>
          <div>
            <p className={classes.icon}>B</p>
          </div>
          <div>
            <h2>Blog Title</h2>
            <div className={classes.card__handle}>
              <span className={classes.handle}>blog date</span>
            </div>
          </div>
        </div>
        <div className={classes.blogCardAdminControlButtons}>
          <button>Remove Blog</button>
        </div>
      </div>
    </div>
  );
};

export default AdminControlBlogCard;
