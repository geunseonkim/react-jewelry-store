import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menuList = ["ALL", "RINGS", "NECKLACES", "EARRINGS"];
  const [showSearch, setShowSearch] = useState(false);

  const goToLogin = () => {
    navigate("/login");
  };
  const goToMain = () => {
    navigate("/");
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  return (
    <div>
      <div className="navbar navbar-header">
        <h1 onClick={goToMain}>Georgia Kemball</h1>
        <div className="navbar-divider"></div>
        <div className="navbar-links" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <p>LOGIN</p>
        </div>
      </div>
      <div className="navbar">
        <ul className="navbar-menuList">
          {menuList.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
        <div className="navbar-divider"></div>
        {showSearch && (
          <div className="search-bar">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </div>
            <button
              onClick={() => setShowSearch(false)}
              className="search-close-btn"
            >
              ✕
            </button>
          </div>
        )}
        <div className="navbar-searchBox">
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch} />
        </div>
      </div>
      <div className="navbar-separate-line"></div>
    </div>
  );
};

export default Navbar;
