import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import bg1 from "../images/comp1bg.png";
const MyComponent = () => {
  return (
    <div className="position-relative">
      {/* Rectangle 1271 */}
      <div
        className="position-absolute"
        style={{
          width: "1440px",
          height: "743px",
          left: "0px",
          top: "0px",
          backgroundImage: `url(${bg1})`,
          alignSelf:'center'
        }}
      ></div>

      {/* Logo Space */}
      <div
        className="position-absolute"
        style={{
          width: "230px",
          height: "50px",
          left: "136px",
          top: "58px",
          fontFamily: "Rubik",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "50px",
          textTransform: "capitalize",
          color: "#010101",
        }}
      >
        Logo Space
      </div>

      {/* Home */}
      <div
        className="position-absolute"
        style={{
          width: "46px",
          height: "23px",
          left: "657px",
          top: "70px",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "23px",
          color: "#0E1133",
        }}
      >
        Home
      </div>

      {/* About Us */}
      <div
        className="position-absolute"
        style={{
          width: "80px",
          height: "23px",
          left: "738px",
          top: "70px",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "23px",
          color: "#0E1133",
        }}
      >
        About Us
      </div>

      {/* Courses */}
      <div
        className="position-absolute"
        style={{
          width: "61px",
          height: "23px",
          left: "840px",
          top: "70px",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "23px",
          color: "#0E1133",
        }}
      >
        Courses
      </div>

      {/* Mock Tests */}
      <div
        className="position-absolute"
        style={{
          width: "87px",
          height: "23px",
          left: "933px",
          top: "70px",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "23px",
          color: "#0E1133",
        }}
      >
        Mock Tests
      </div>

      {/* Blog */}
      <div
        className="position-absolute"
        style={{
          width: "42px",
          height: "23px",
          left: "1040px",
          top: "70px",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "23px",
          color: "#0E1133",
        }}
      >
        Blog
      </div>
      {/* Contact Us Button */}
      <div
        className="position-absolute"
        style={{
          width: "92px",
          height: "24px",
          left: "1172.5px",
          top: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="position-relative"
          style={{
            width: "100px",
            height: "30px",
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#FFFFFF",
            background: "#6759FF",
            borderRadius: "8px",
            flex: "none",
            order: 0,
            flexGrow: 0,
          }}
        >
          Contact Us
        </button>
      </div>

      {/* Text */}
      <div
        className="position-absolute"
        style={{
          position: "absolute",
          width: "526px",
          height: "225px",
          left: "137px",
          top: "260px",
          fontFamily: "Rubik",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "60px",
          lineHeight: "75px",
          color: "#0E1133",
          textTransform: "capitalize",
        }}
      >
        Get the best Laundry Service at your doorstep
      </div>

      {/* Subtext */}
      <div
        className="position-absolute"
        style={{
          position: "absolute",
          width: "511px",
          height: "26px",
          left: "137px",
          top: "514px",
          fontFamily: "Red Hat Display",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "26px",
          color: "#010101",
        }}
      >
        Book laundry service with our app in just a few & easy steps
      </div>

      {/* Get Started Button */}
      <button
        className="position-absolute"
        style={{
          width: "221px",
          height: "50px",
          left: "183px",
          top: "592px",
          right: "1159px",
          bottom: "127px",
          background: "rgba(103, 89, 255, 1)",
          borderRadius: "8px",
        }}
      >
        <span
          className="position-absolute"
          style={{
            width: "98px",
            height: "24px",
            left: "46px",
            top: "13px",
            fontFamily: "Red Hat Display",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "24px",
            textAlign: "right",
            color: "#FFFFFF",
          }}
        >
          Get Started
        </span>
      </button>
  
      {/* Rectangle 2827 */}
      <div
        className="position-absolute"
        style={{
          width: "557px",
          height: "379px",
          left: "748px",
          top: "260px",
          background: "#FFFFFF",
          borderRadius: "15px",
        }}
      ></div>

      {/* Group 1000004725 */}
      <div
        className="position-absolute"
        style={{
          width: "261px",
          height: "50px",
          left: "896px",
          top: "546px",
        }}
      ></div>

      {/* Rectangle 2828 */}
      <div
        className="position-absolute"
        style={{
          boxSizing: "border-box",
          width: "486px",
          height: "45px",
          left: "786px",
          top: "350px",
          background: "#FFFFFF",
          border: "0.5px solid rgba(9, 48, 81, 0.4)",
          borderRadius: "5px",
        }}
      ></div>

      {/* No of Clothes */}
      <div
        className="position-absolute"
        style={{
          width: "88px",
          height: "16px",
          left: "833px",
          top: "364px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",
          letterSpacing: "0.0125em",
          color: "#777777",
        }}
      >
        No of Clothes
      </div>

      {/* Rectangle 2829 */}
      <div
        className="position-absolute"
        style={{
          boxSizing: "border-box",
          width: "236px",
          height: "40px",
          left: "786px",
          top: "290px",
          background: "#FFFFFF",
          border: "0.5px solid rgba(9, 48, 81, 0.4)",
          borderRadius: "5px",
        }}
      ></div>

      {/* Name */}
      <div
        className="position-absolute"
        style={{
          width: "38px",
          height: "16px",
          left: "833px",
          top: "302px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",
          letterSpacing: "0.0125em",
          color: "#777777",
        }}
      >
        Name
      </div>

      {/* user_circle_outline_24 */}
      <div
        className="position-absolute"
        style={{
          width: "20px",
          height: "20px",
          left: "799px",
          top: "300px",
        }}
      ></div>

      {/* Rectangle 2830 */}
      <div
        className="position-absolute"
        style={{
          boxSizing: "border-box",
          width: "236px",
          height: "40px",
          left: "1036px",
          top: "290px",
          background: "#FFFFFF",
          border: "0.5px solid rgba(9, 48, 81, 0.4)",
          borderRadius: "5px",
        }}
      ></div>

      {/* Phone Number */}
      <div
        className="position-absolute"
        style={{
          width: "96px",
          height: "16px",
          left: "1084px",
          top: "302px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",
          letterSpacing: "0.0125em",
          color: "#777777",
        }}
      >
        Phone Number
      </div>

      {/* phone_outline_24 */}
      <div
        className="position-absolute"
        style={{
          width: "20px",
          height: "20px",
          left: "1050px",
          top: "300px",
        }}
      ></div>

      {/* Rectangle 2831 */}
      <div
        className="position-absolute"
        style={{
          boxSizing: "border-box",
          width: "486px",
          height: "99px",
          left: "786px",
          top: "415px",
          background: "#FFFFFF",
          border: "0.5px solid rgba(9, 48, 81, 0.4)",
          borderRadius: "5px",
        }}
      ></div>

      {/* Address */}
      <div
        className="position-absolute"
        style={{
          width: "54px",
          height: "16px",
          left: "833px",
          top: "429px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",
          letterSpacing: "0.0125em",
          color: "#777777",
        }}
      >
        Address
      </div>
       {/* Button */}
       <button
          className="position-absolute"
          style={{
            position: "absolute",
            width: "200px",
            height: "20px",
            left: "947px",
            top: "561px",
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "20px",
            letterSpacing: "1px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            background: "rgba(103, 89, 255, 1)",
            boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Book Service
        </button>
    </div>
  );
};

export default MyComponent;