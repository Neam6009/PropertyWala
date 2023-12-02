import React from "react";
import classes from "../assets/Styles/AdminControlPropertyCard.module.css";

const AdminControlPropertyCard = () => {
  return (
    <div>
      <div className={classes.propertyCardAdminControl}>
        <div className={classes.propertyCardAdminControlChild}>
          <div>
            <p className={classes.icon}>P</p>
          </div>
          <div>
            <h2>Property Name</h2>
            <div className={classes.card__handle}>
              <span className={classes.handle}>property location</span>
            </div>
          </div>
        </div>
        <div className={classes.propertyCardAdminControlButtons}>
          <button>Remove Property</button>
        </div>
      </div>
    </div>
  );
};

export default AdminControlPropertyCard;
