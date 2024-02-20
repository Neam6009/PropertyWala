import React from "react";
import { useSelector } from "react-redux";
import classes from "../assets/Styles/profile.module.css";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [profileContentType, setProfileContentType] = useState(1);
  const [properties, setProperties] = useState([]);
  const [wishList,setWishList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const properties = await fetch(
        `http://localhost:3003/properties/user/${user._id}`
      ).then((res) => res.json());

      setProperties(properties);

      const wish = await fetch(
        `http://localhost:3003/properties/getWishlist/${user._id}`
      ).then((res) => res.json());
      setWishList(wish);
    };
    fetchData();
  }, [user]);

  let profileContent = <></>;

  const profileContent1 = (
  <div className={classes.yourProperties}>
    {properties && (
      properties.length === 0 ? (
        "Please list a property!"
      ) : 
      properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))
    )}
  </div>
);
  const profileContent2 = (
    <div className={classes.yourProperties}>
      {properties &&
        (wishList.length == 0 ? (
          "wishlist empty"
        ) : (
          wishList.map((wish) => (
            <PropertyCard key={wish._id} property={wish} />
          ))
        ))}
    </div>
  );

  const profileContent3 = (
    <div className={classes.pfContactContainer}>
      <div className={classes.pfContact1}>
        <p>Username </p>
        <p className={classes.pfLabel1}>{user?.name}</p>
      </div>
      <div className={classes.pfContact2}>
        <p>Email </p>
        <p className={classes.pfLabel2}>{user?.email}</p>
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
        <p>{user?.name}</p>
        <div className={classes.userDetailsStats}>
          
          <div className={classes.userStats}>
            <p className={classes.userStatsNumber}>{properties.length}</p>
            <p className={classes.userStatsLabel}>properties posted</p>
          </div>
          <div className={classes.userStats}>
            <p className={classes.userStatsNumber}>{user?.wishlist.length}</p>
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
