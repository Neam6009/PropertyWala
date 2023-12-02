import React from "react";
import classes from "../assets/Styles/AdminControlUserCard.module.css";

const AdminControlUserCard = () => {
  return (
    <div>
      <div className={classes.userCard}>
        <div className={classes.userCardChild}>
          <div>
            <p className={classes.icon}>N</p>
          </div>
          <div>
            <h2>Name</h2>
            <div className={classes.card__handle}>
              <span className={classes.handle}>userEmail@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={classes.userCardButtons}>
          {<button>Remove Certified</button> || <button>Make Certified</button>}
          {<button>Remove Admin</button> || <button>Make Admin</button>}
        </div>
      </div>
    </div>
  );
};

export default AdminControlUserCard;
