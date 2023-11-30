import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import blogImage1 from "../assets/images/PW_blogs_image1.jpg";
import blogImage2 from "../assets/images/PW_blogs_image2.jpg";
import blogImage3 from "../assets/images/PW_blogs_image3.jpg";
import blogImage4 from "../assets/images/PW_blogs_image4.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div
              style={{
                paddingLeft: "26rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>1 / 6</div>

              <img src={blogImage3} alt="img2" style={{ width: "100%" }} />
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <h3>B0Title</h3>
              </a>
              <p>
                <FontAwesomeIcon icon={faUser} /> B0Author
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                paddingLeft: "26rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>2 / 6</div>

              <img src={blogImage2} alt="img2" style={{ width: "100%" }} />
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <h3>B0Title</h3>
              </a>
              <p>
                <FontAwesomeIcon icon={faUser} /> B0Author
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                paddingLeft: "26rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>3 / 6</div>

              <img src={blogImage3} alt="img2" style={{ width: "100%" }} />
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <h3>B0Title</h3>
              </a>
              <p>
                <FontAwesomeIcon icon={faUser} /> B0Author
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                paddingLeft: "26rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>4 / 6</div>

              <img src={blogImage1} alt="img2" style={{ width: "100%" }} />
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <h3>B0Title</h3>
              </a>
              <p>
                <FontAwesomeIcon icon={faUser} /> B0Author
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                paddingLeft: "26rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>5 / 6</div>

              <img src={blogImage2} alt="img2" style={{ width: "100%" }} />
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <h3>B0Title</h3>
              </a>
              <p>
                <FontAwesomeIcon icon={faUser} /> B0Author
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                paddingLeft: "26rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>6 / 6</div>

              <img src={blogImage3} alt="img2" style={{ width: "100%" }} />
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <h3>B0Title</h3>
              </a>
              <p>
                <FontAwesomeIcon icon={faUser} /> B0Author
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
