import React from "react";
import classes from "../assets/Styles/profile.module.css";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/auth/authSlice";





const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [profileContentType, setProfileContentType] = useState(1);
  const [properties, setProperties] = useState([]);
  const [wishList,setWishList] = useState([]);
  const [changePasswordBox, setChangePasswordBox ] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [ReNewPassword,setReNewPassword] = useState("");
  const [error,setError] = useState(" ");

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

  
  const changePasswordHandler = async () => {
   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (oldPassword.length === 0 || newPassword.length === 0 || ReNewPassword.length === 0) {
        setError("All password fields are required!");
        return;
    }

    if (newPassword !== ReNewPassword) {
        setError("Please make sure both the new passwords match!");
        return;
    }

    if (oldPassword === newPassword) {
        setError("New password cannot be the same as the old password!");
        return;
    }

    if (!passwordRegex.test(newPassword)) {
        setError("New password should contain lower case, upper case, number, and minimum length of 8!");
        return;
    }

    try {
			const response = await fetch(
				"http://localhost:3003/auth/changePassword",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ userId : user._id, oldPassword: oldPassword,newPassword : newPassword }),
				}
			);
        const data =  await response.json();

			if (data.success) {
				setError(data.success);
        alert("your password has been successfully changed!")
        setChangePasswordBox(false);
        setOldPassword("");
        setNewPassword("");
        setReNewPassword("");
        setError(""); 
			} else {
        setOldPassword("");
				setError(data.error);
			}
      
		} catch (error) {
			console.error("Network error:", error);
		}
   
}


  const changePassword = (
    <div className={classes.changePasswordBox}>
        <input type="password" placeholder="Enter new old password" value={oldPassword} onChange={(e=> setOldPassword(e.target.value))}/>
        <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e=> setNewPassword(e.target.value))}/>
        <input type="password" placeholder="Re enter new password" value={ReNewPassword} onChange={(e=> setReNewPassword(e.target.value))}/>
        <button className={classes.cpButton} onClick={changePasswordHandler}>Change Password!</button>
        <p>{error}</p>
    </div>
  )

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

  const changePasswordBoxHandler = ()=>{
    changePasswordBox? setChangePasswordBox(false): setChangePasswordBox(true)
  }

  const logOutHandler = async () => {
    try {
      const response = await fetch("http://localhost:3003/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(setUser(null));
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
  };

  const deleteAccountHandler = async()=>{
    const confirm = prompt("please enter your password to delete your account!")

    if(confirm){

      try {
        const response = await fetch(
          "http://localhost:3003/auth/deleteUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId : user._id,password :confirm }),
          }
        );
          const data =  await response.json();
  
        if (data.success) {
          alert(data.success);
          logOutHandler();
          navigate("/");
        } else {
          alert(data.error)
        }
        
      } catch (error) {
        console.error("Network error:", error);
      }

    }
      

     
  }

 

  return (
    
    <div >
      {!user? "please login to view your profile page" :  
      <div className={classes.profileAll}>
      {changePasswordBox && changePassword}
      <div className={classes.userDetails}>
        <h2>Your Profile</h2>
        <p className={classes.userIcon}>{user.name[0]} </p>
        <p>{user?.name}</p>
        <div className={classes.userDetailsStats}>
          
          <div className={classes.userStats}>
            <p className={classes.userStatsNumber}>{properties.length}</p>
            <p className={classes.userStatsLabel}>properties posted</p>
          </div>
          <div className={classes.userStats}>
            <p className={classes.userStatsNumber}>{wishList.length}</p>
            <p className={classes.userStatsLabel}>properties in wishlist</p>
          </div>
        </div>
        <button className={classes.cpButton} onClick={changePasswordBoxHandler}>Change Password</button>
        <button className={classes.daButton} onClick={deleteAccountHandler}> Delete Account</button>
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

}
  </div>
  
    
  );
};

export default Profile;
