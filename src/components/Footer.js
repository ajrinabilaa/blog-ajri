import React from "react";
import facebookLogo from "./images/facebook.svg";
import youtubeLogo from "./images/youtube.svg";
import instagramLogo from "./images/instagram.svg";
import twitterLogo from "./images/twitter.svg";

function Footer() {
  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#fff",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
  };

  const logoStyle = {
    width: "24px",
    height: "24px",
  };

  return (
    <footer
      className="text-center text-lg-start"
      style={{ backgroundColor: "#5d7fb8" }}
      id="footer"
    >
      <div className="container d-flex justify-content-center py-5">
        <button
          type="button"
          className="btn btn-lg btn-floating mx-2"
          style={buttonStyle}
          onClick={() =>
            window.open(
              "https://www.facebook.com/ajrinabila.nabila?mibextid=kFxxJD"
            )
          }
        >
          <img src={facebookLogo} alt="Facebook" style={logoStyle} />
        </button>
        <button
          type="button"
          className="btn btn-lg btn-floating mx-2"
          style={buttonStyle}
          onClick={() => window.open("https://www.youtube.com/@ajrinabilaa")}
        >
          <img src={youtubeLogo} alt="YouTube" style={logoStyle} />
        </button>
        <button
          type="button"
          className="btn btn-lg btn-floating mx-2"
          style={buttonStyle}
          onClick={() => window.open("https://www.instagram.com/ajrinabilaa/")}
        >
          <img src={instagramLogo} alt="Instagram" style={logoStyle} />
        </button>
      </div>

      {/* Copyright */}
      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright :
        <a className="text-white" href="">
          AJR.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
