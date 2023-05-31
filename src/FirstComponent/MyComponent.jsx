import React from "react";
import bg1 from "../images/comp1bg.png";
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div className="position-relative full-width">
      <div className="position-relative">
        <div
          className="position-absolute bg-image"
          style={{
            backgroundImage: `url(${bg1})`,
            alignSelf: "center",
          }}
        ></div>

        <div className="position-absolute logo">Logo Space</div>

        <div className="position-absolute nav-item home">Home</div>

        <div className="position-absolute nav-item about-us">About Us</div>

        <div className="position-absolute nav-item courses">Courses</div>

        <div className="position-absolute nav-item mock-tests">Mock Tests</div>

        <div className="position-absolute nav-item blog">Blog</div>

        <div className="position-absolute contact-us-button">
          <div className="contact-us-button-text">Contact Us</div>
        </div>

        <div className="position-absolute text">
          Get the best<br />
          Laundry Service<br />
          at your doorstep
        </div>

        <div className="position-absolute sub-text">
          Book laundry service with our app in just a few & easy steps
        </div>

        <div className="position-absolute get-started-button">
          <div className="get-started-button-text">Get Started</div>
        </div>

        {/* Rectangle 2827 */}
        <div
          className="position-absolute rectangle-2827"
          style={{
            width: "557px",
            height: "379px",
            left: "730px",
            top: "260px",
            background: "#FFFFFF",
            borderRadius: "15px",
          }}
        >
          {/* No of Clothes */}
          <div
            className="position-absolute no-of-clothes"
            style={{
              width: "88px",
              height: "16px",
              left: "85px",
              top: "104px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "16px",
              letterSpacing: "0.0125em",
              color: "#777777",
            }}
          >
            No of Clothes
          </div>

          {/* Address */}
          <div
            className="position-absolute address"
            style={{
              width: "60px",
              height: "19px",
              left: "85px",
              top: "169px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.0125em",
              color: "#777777",
            }}
          >
            Address
          </div>
        </div>

        {/* Name */}
        <div
          className="position-absolute name"
          style={{
            width: "100px",
            height: "16px",
            left: "833px",
            top: "302px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            letterSpacing: "0.0125em",
            color: "#777777",
          }}
        >
          Name
        </div>

        {/* Phone Number */}
        <div
          className="position-absolute phone-number"
          style={{
            width: "120px",
            height: "16px",
            left: "1084px",
            top: "302px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            letterSpacing: "0.0125em",
            color: "#777777",
          }}
        >
          Phone Number
        </div>
        <div className="rectangle2827">
          <div className="button">
            <div className="book-service">Book Service</div>
          </div>
          <div className="no-of-clothes">No of Clothes</div>
        </div>
      </div>
      </div>
  );
};

export default MyComponent;