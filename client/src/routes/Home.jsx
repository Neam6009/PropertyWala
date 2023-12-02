import React from "react";
import classes from "../assets/Styles/index.module.css";
import PropertyCard from "../components/PropertyCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import s2Img from "../assets/images/PW_S2_img.jpg";
import s3Img from "../assets/images/PW_S3_img.webp";
import s3I1 from "../assets/images/PW_S3_icon1.png";
import s3I2 from "../assets/images/PW_S3_icon2.png";
import s3I3 from "../assets/images/PW_S3_icon3.png";
import pIcons from "../assets/images/PW_peopleIcons.png";
import RbsTabs from "../components/RbsTabs.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice.js";
import { useEffect } from "react";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					"http://localhost:3003/auth/verify",
					{
						method: "GET",
						credentials: "include",
					}
				);

        const data = await response.json();
        if (data.user) {
          //set user
          dispatch(setUser(data.user));
          console.log("Login successful:", data.user);
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        // Handle network errors
        console.error("Network error:", error);
      }
    };

    fetchUser();
  }, []);

	return (
		<div className={classes.all}>
			<header>
				<div className={classes.HeroBackground}>
					<div className={classes.headerPart1}>
						<div className={classes.heroSlogan}>
							<h1 className={classes.heroText}>
								Searching for your dream property?
							</h1>
							<p className={classes.heroDesc}>
								Look no further than PropertyWala
							</p>
							<p className={classes.heroDesc}>
								- your gateway to a world of real estate
								possibilities!
							</p>
						</div>
						<div className={classes.heroPropertyCard}>
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
					</div>
					<RbsTabs />
				</div>

				<div className={classes.HeroBackground}>
					<div className={classes.headerPart1}>
						<div className={classes.heroSlogan}>
							<h1 className={classes.heroText}>
								Searching for your dream property?
							</h1>
							<p className={classes.heroDesc}>
								Look no further than PropertyWala
							</p>
							<p className={classes.heroDesc}>
								- your gateway to a world of real estate
								possibilities!
							</p>
						</div>
						<div className={classes.heroPropertyCard}>
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
					</div>
					<RbsTabs />

        <div className={classes.HeroBackground}>
          <div className={classes.headerPart1}>
            <div className={classes.heroSlogan}>
              <h1 className={classes.heroText}>
                Searching for your dream property?
              </h1>
              <p className={classes.heroDesc}>
                Look no further than PropertyWala
              </p>
              <p className={classes.heroDesc}>
                - your gateway to a world of real estate possibilities!
              </p>
            </div>
            <div className={classes.heroPropertyCard}>
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
          </div>
          <RbsTabs />

          <div className={classes.p2}>
            <div className={classes.propertyNumbers}>
              <div>
                <p className={classes.colorText}>
                  <span className={classes.faded}>|</span>50k+
                </p>
                <p>renters</p>
              </div>
              <div>
                <p className={classes.colorText}>
                  <span className={classes.faded}>|</span>10k+
                </p>
                <p>properties</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={classes.segment2}>
        <img src={s2Img} alt="property image" />
        <div className={classes.segment2Info}>
          <div className={classes.s2OptionMenu}>
            <button className={`${classes.s2Options} ${classes.s2Selected}`}>
              For Tenants
            </button>
            <button className={classes.s2Options}>For landlords</button>
          </div>
          <div className={classes.s2Info}>
            <p className={classes.s2Hero}>
              The ultimate destination for tenants, buyers, and landlords!
            </p>
            <p className={classes.s2Desc}>
              We make it simple and effective to buy a new home, rent a
              property, or sell your existing one. The best part is that using
              our services will help you save a tonne of money and time.
            </p>
            <a href="/about-us">
              <button>Learn more </button>
            </a>
          </div>
          <div className={`${classes.s2Info} ${classes.disNone}`}>
            <p className={classes.s2Hero}>
              The ultimate destination for tenants, buyers, and landlords!
            </p>
            <p className={classes.s2Desc}>
              We make it simple and effective to buy a new home, rent a
              property, or sell your existing one. The best part is that using
              our services will help you save a tonne of money and time.
            </p>
            <a href="/about-us">
              <button>Learn more </button>
            </a>
          </div>
        </div>
      </div>

      <div className={classes.segment3}>
        <div className={classes.s3Info}>
          <p className={classes.s2Hero}>
            The modern means of locating a new residence
          </p>
          <p className={classes.faded}>
            With over 10,000 properties available, find the home of your dreams.
          </p>
          <div className={classes.s3Icons}>
            <div>
              <img src={s3I1} alt="icon1" />
              <p className={classes.iconText}>6.9%</p>
              <span className={`${classes.faded} ${classes.iconDesc}`}>
                Property Return Rate
              </span>
            </div>
            <div>
              <img src={s3I2} alt="icon2" />
              <p className={classes.iconText}>6,369</p>
              <span className={`${classes.faded} ${classes.iconDesc}`}>
                Property in Sell and Rent
              </span>
            </div>
            <div>
              <img src={s3I3} alt="icon3" />
              <p className={classes.iconText}>7,420</p>
              <span className={`${classes.faded} ${classes.iconDesc}`}>
                Successful Transactions
              </span>
            </div>
          </div>
        </div>
        <img src={s3Img} alt="s3Image" />
      </div>

      <div className={classes.recommendations}>
        <div className={classes.recNav}>
          <a href="/show-properties/sale">
            <button className={classes.bmp}>Browse more properties</button>
          </a>
        </div>

        <p className={`${classes.faded} ${classes.recDesc}`}>
          Some of the chosen properties in your area.
        </p>

			<div className={classes.clientEmail}>
				<div>
					<h1 style={{ color: "white" }}>Are you a landllord?</h1>
					<span className={classes.greyText}>
						Learn how you can raise the value of your house so that
						it will sell.
					</span>
				</div>
				<div className={classes.emailInputFields}>
					<input
						type="text"
						id="addMail"
						placeholder="Enter your email address"
					/>
					<button>Submit</button>
				</div>
				<span
					className={`${classes.display_none} ${classes.greyText}`}
					id="thanksMessage"
				>
					Thank you for signing up for Newsletter
				</span>
				<span className={classes.greyText}>
					Join 6000+ other landlords in our propertyWala community.
				</span>
			</div>
		</div>
	);
};

export default Home;
