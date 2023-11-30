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

const Home = () => {
  return (
    <>
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
          <div className={classes.headerPart2}>
            <div className={classes.rbsTabs}>
              <div className={classes.rbsNav}>
                <div className={`${classes.rbsOption} ${classes.rbsSelected}`}>
                  Rent
                </div>
                <div className={classes.rbsOption}>Buy</div>
                <div className={classes.rbsOption}>Sell</div>
              </div>
              <div className={classes.rbsInfoMobile}>
                <div className={classes.rbsRS}>
                  <input type="text" placeholder="Search properties.." />
                  <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
                <div className={classes.rbsSell}>
                  <a href="#" target="_blank">
                    <button>
                      List your property{" "}
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className={classes.rbsInfoExtended}>
                <form className={classes.rbsInfo1}>
                  <div>
                    <p className={classes.greyText1}>Location</p>
                    <input
                      id="locationRent"
                      type="text"
                      name="location"
                      value="Mumbai"
                    />
                  </div>
                  <span className={classes.rbsSpan}>|</span>
                  <div>
                    <p className={classes.greyText1}>When</p>
                    <input type="date" name="dateTime" id="" />
                  </div>
                  <span className={classes.rbsSpan}>|</span>
                  <button type="button">Search Properties</button>
                </form>
                <form className={classes.rbsInfo2}>
                  <div>
                    <p className={classes.greyText1}>Location</p>
                    <input
                      id="locationBuy"
                      type="text"
                      name="location"
                      value="Mumbai"
                    />
                  </div>
                  <span className={classes.rbsSpan}>|</span>
                  <div>
                    <p className={classes.greyText1}>When</p>
                    <input type="date" name="dateTime" />
                  </div>
                  <span className={classes.rbsSpan}>|</span>
                  <button type="button">Search Properties</button>
                </form>
                <div className={classes.rbsInfo3}>
                  <p>
                    Increase the reach of your property and get higher bids!
                  </p>
                </div>
              </div>
            </div>
          </div>

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

        <div className={classes.container}>
          <div className={classes.row}>
            <p className={classes.s2Hero}>Based on your location</p>
            <div className={classes.col}></div>
          </div>
        </div>
      </div>

      <div className={classes.Testimonial}>
        <h1>Testimonials</h1>
        <p className={classes.greyText}>
          See the opinions of our property managers, landlords, and tenants.
        </p>
        <p>
          ` "I use PropertyWala practically every day to hunt for a second home,
          a vacation condo, or just to browse fantasy homes in different
          regions. Thank you, PropertyWala, for the enjoyable home searching and
          analysis! "`
        </p>
        <span>
          <b>Ram,</b>
          <span className={classes.greyText}>Renter</span>
        </span>
        <img src={pIcons} alt="peopleIcons" />
      </div>

      <div className={classes.clientEmail}>
        <div>
          <h1 style={{ color: "white" }}>Are you a landllord?</h1>
          <span className={classes.greyText}>
            Learn how you can raise the value of your house so that it will
            sell.
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
    </>
  );
};

export default Home;
