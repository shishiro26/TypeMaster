import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import shishiro from "../assets/shishiroaka.jpg";
export default function Navbar() {
  const [profileDetails, setProfileDetails] = useState(false);

  const handleProfileHover = () => {
    setProfileDetails(true);
  };

  const handleProfileLeave = () => {
    setProfileDetails(false);
  };

  return (
    <header
      style={{
        background: "gold",
      }}
    >
      <div className="container">
        <h3>TypeSprint</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/play">PLAY</Link>
            </li>
            <li>
              <Link to="/stats">STATS</Link>
            </li>
            {/* <li>
              <Link to="/online">Play Online</Link>
            </li> */}
            <li>
              <div
                className="profile-section"
                onMouseEnter={handleProfileHover}
                onMouseLeave={handleProfileLeave}
                style={{
                  //   background: "#555",
                  //   color: "white",
                  //   margin: "5px",
                  //   padding: "8px 10px",
                  borderRadius: "5px",
                }}
              >
                <img
                  className="profile-image"
                  src={shishiro}
                  alt="shishiro"
                  style={{
                    borderRadius: "50%",
                    height: "40px",
                    aspectRatio: "1",
                  }}
                />
                {profileDetails && (
                  <div
                    className="profile-details"
                    style={{
                      position: "absolute",
                      zIndex: "999",
                      background: "#555",
                      height: "130px",
                      width: "100px",
                      borderRadius: "5px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        margin: "5px",
                        padding: "5px",
                      }}
                    >
                      <Link to="/">Home</Link>
                    </div>
                    <div
                      style={{
                        margin: "5px",
                        padding: "5px",
                      }}
                    >
                      <Link to="/profile">Profile</Link>
                    </div>
                    <div
                      style={{
                        margin: "5px",
                        padding: "5px",
                      }}
                    >
                      <Link to="/">Logout</Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
