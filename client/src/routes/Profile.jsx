import React from "react";
import { useSelector } from "react-redux";
import classes from "../assets/Styles/profile.module.css";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const [profileContentType, setProfileContentType] = useState(1);

  let profileContent = <></>;

  const profileContent1 = (
    <div>
      <PropertyCard
        property={{
          price: "price",
          type: "rent",
          propertyName: "name",
          location: "City",
          area: "area",
          bedsNum: "beds",
          bathsNum: "baths",
        }}
      />
    </div>
  );

  const profileContent2 = (
    <div>
      <PropertyCard
        property={{
          price: "price",
          type: "rent",
          propertyName: "name",
          location: "City",
          area: "area",
          bedsNum: "beds",
          bathsNum: "baths",
        }}
      />
    </div>
  );

  const profileContent3 = (
    <div className={classes.pfContactContainer}>
      <div className={classes.pfContact1}>
        <p>Username </p>
        <p className={classes.pfLabel1}>Neam</p>
      </div>
      <div className={classes.pfContact2}>
        <p>Email </p>
        <p className={classes.pfLabel2}>userEmail@gmail.com</p>
      </div>
      <div className={classes.pfContact3}>
        <p>Mobile number </p>
        <p className={classes.pfLabel3}>9234567892</p>
      </div>
    </div>
  );

  switch (profileContentType) {
    case 1:
      profileContent = profileContent1;

      break;
    case 2:
      profileContent = profileContent2;

      break;
    case 3:
      profileContent = profileContent3;

      break;

    default:
      break;
  }

  const profileContentHandler = (type) => {
    setProfileContentType(type);
  };

  return (
    <div className={classes.profileAll}>
      <div className={classes.userDetails}>
        <h2>Your Profile</h2>
        <p className={classes.userIcon}>N</p>
        <p>User Name</p>
        <div className={classes.userDetailsStats}>
          <div className={classes.userStats}>
            <p className={classes.userStatsNumber}>5</p>
            <p className={classes.userStatsLabel}>properties checked</p>
          </div>
          <div className={classes.userStats}>
            <p className={classes.userStatsNumber}>7</p>
            <p className={classes.userStatsLabel}>properties posted</p>
          </div>
          <div className={classes.userStats}>
            <p className={classes.userStatsNumber}>15</p>
            <p className={classes.userStatsLabel}>properties in wishlist</p>
          </div>
        </div>
        <button className={classes.cpButton}>Change Password</button>
        <button className={classes.daButton}> Delete Account</button>
      </div>
      <div className={classes.userPropertyDetails}>
        <div className={classes.upNav}>
          <div
            className={classes.upNavButton}
            onClick={() => {
              profileContentHandler(1);
            }}
          >
            Your Properties
          </div>
          <div
            className={classes.upNavButton}
            onClick={() => {
              profileContentHandler(2);
            }}
          >
            WhishList
          </div>
          <div
            className={classes.upNavButton}
            onClick={() => {
              profileContentHandler(3);
            }}
          >
            Contact
          </div>
        </div>
        <div className={classes.userPropertyContent}>{profileContent}</div>
      </div>
    </div>
  );
};

export default Profile;
