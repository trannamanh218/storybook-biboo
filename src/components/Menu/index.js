import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.scss"
import classNames from "classnames";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className="menu">
      <div className="box-left-biboo">
        <div className="logo" onClick={() => setCurrentPage("home")}>
          <div to="/" className="icon-logo">
            <img src="img/Logo.png" alt="" />
          </div>
        </div>
        <div
          to="/"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "home",
          })}
          onClick={() => setCurrentPage("home")}
        >
          <div className="logo-home">
          <img src="img/Home.png" alt="anhminhhoa" />
          </div>
          <p>Home</p>
        </div>
        <div
          to="search"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "search",
          })}
          onClick={() => setCurrentPage("search")}
        >
          <img src="img/Search2.png" alt="anhminhhoa" />
          <p>Tìm kiếm</p>
        </div>
        <div
          to="categoryleft"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "categoryleft",
          })}
          onClick={() => setCurrentPage("categoryleft")}
        >
          <img src="img/Feed List.png" alt="anhminhhoa" />
          <p>Danh Mục</p>
        </div>
        <div
          to="individualleft"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "individualleft",
          })}
          onClick={() => setCurrentPage("individualleft")}
        >
          <img src="img/Profile.png" alt="anhminhhoa" />
          <p>Cá nhân</p>
        </div>
        <div className="cover-img-left-biboo">
          <img src="img/Layer 1.png" alt="" />
        </div>
      </div>
      {/* <div className="menu-mobi">
        <div to="/" className="nav-item">
          <img src="img/Home-mobi.png" alt="anhminhhoa" />
          <p>Home</p>
        </div>
        <div to="search" className="nav-item">
          <img src="img/Search-mobi.png" alt="anhminhhoa" />
          <p>Tìm kiếm</p>
        </div>
        <div to="categoryleft" className="nav-item">
          <img src="img/Cart-mobi.png" alt="anhminhhoa" />
          <p>Giỏ hàng</p>
        </div>
        <div to="individualleft" className="nav-item">
          <img src="img/Profile-mobi.png" alt="anhminhhoa" />
          <p>Cá nhân</p>
        </div>
      </div> */}
    </div>
  );
};
export default Menu;
