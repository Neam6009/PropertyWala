import React from "react";
import styles from "../assets/Styles/Sidebar.module.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLandmark } from "@fortawesome/free-solid-svg-icons";
import { set } from "react-hook-form";

function Sidebar() {
  const [sideBar, setSideBar] = useState(false);

  const SideBarHandler = () => {
    sideBar ? setSideBar(false) : setSideBar(true);
  };

  const HoverText = ({ text, top }) => {
    const t = 3.75 + top * 3.5 + "rem";
    return (
      <>
        <Link
          className={styles.hoverText}
          style={{ left: "4rem", top: t }}
          to="/"
        >
          <button>{text}</button>
        </Link>
      </>
    );
  };

  const miniSideBar = (
    <div>
      <div className={styles.miniSidebar}>
        <button className={styles.barsButton} onClick={SideBarHandler}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Link className={styles.sidebarLink} to="/">
          <button className={styles.sidebarButton}>
            <FontAwesomeIcon icon={faLandmark} />
          </button>
          <HoverText text="PropertyWala" top={0} />
        </Link>

        <Link className={styles.sidebarLink} to="/show-properties/rent">
          <button className={styles.sidebarButton}>R</button>
          <HoverText text="Rent" top={1} />
        </Link>

        <Link className={styles.sidebarLink} to="/show-properties/sale">
          <button className={styles.sidebarButton}>B</button>
          <HoverText text="Buy" top={2} />
        </Link>

        <Link className={styles.sidebarLink} to="/list-property">
          <button className={styles.sidebarButton}>S</button>
          <HoverText text="Sell" top={3} />
        </Link>

        <Link className={styles.sidebarLink} to="/my-properties">
          <button className={styles.sidebarButton}>Mp</button>
          <HoverText text="My Properties" top={4} />
        </Link>

        <Link className={styles.sidebarLink} to="#">
          <button className={styles.sidebarButton}>Pa</button>
          <HoverText text="Property Analysis" top={5} />
        </Link>

        <Link className={styles.sidebarLink} to="/blogs">
          <button className={styles.sidebarButton}>BP</button>
          <HoverText text="Blog Post" top={6} />
        </Link>

        <Link className={styles.sidebarLink} to="/help">
          <button className={styles.sidebarButton}>H</button>
          <HoverText text="Help" top={7} />
        </Link>

        <Link className={styles.sidebarLink} to="/about-us">
          <button className={styles.sidebarButton}>AU</button>
          <HoverText text="About Us" top={8} />
        </Link>

        <Link className={styles.sidebarLink} to="/pricing-plans">
          <button className={styles.sidebarButton}>P</button>
          <HoverText text="Premium" top={9} />
        </Link>

        <Link className={styles.sidebarLink} to="/compose-blog">
          <button className={styles.sidebarButton}>C</button>
          <HoverText text="Compose" top={10} />
        </Link>

        <Link className={styles.sidebarLink} to="/admin-control">
          <button className={styles.sidebarButton}>AD</button>
          <HoverText text="Admin Controls" top={11} />
        </Link>
      </div>
    </div>
  );

  const fullSideBar = (
    <>
      <div className={styles.sidebar}>
        <button className={styles.barsButton} onClick={SideBarHandler}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link className={styles.sidebarLink} to="/">
          <button className={styles.sidebarButton}>PropertyWala</button>
        </Link>

        <Link className={styles.sidebarLink} to="/show-properties/rent">
          <button className={styles.sidebarButton}>Rent</button>
        </Link>

        <Link className={styles.sidebarLink} to="/show-properties/sale">
          <button className={styles.sidebarButton}>Buy</button>
        </Link>

        <Link className={styles.sidebarLink} to="/list-property">
          <button className={styles.sidebarButton}>Sell</button>
        </Link>

        <Link className={styles.sidebarLink} to="/my-properties">
          <button className={styles.sidebarButton}>My properties</button>
        </Link>

        <Link className={styles.sidebarLink} to="#">
          <button className={styles.sidebarButton}>Property analysis</button>
        </Link>

        <Link className={styles.sidebarLink} to="/blogs">
          <button className={styles.sidebarButton}>Blog Post</button>
        </Link>

        <Link className={styles.sidebarLink} to="/help">
          <button className={styles.sidebarButton}>Help</button>
        </Link>

        <Link className={styles.sidebarLink} to="/about-us">
          <button className={styles.sidebarButton}>About Us</button>
        </Link>

        <Link className={styles.sidebarLink} to="/pricing-plans">
          <button className={styles.sidebarButton}>Premium</button>
        </Link>

        <Link className={styles.sidebarLink} to="/compose-blog">
          <button className={styles.sidebarButton}>Compose</button>
        </Link>

        <Link className={styles.sidebarLink} to="/admin-control">
          <button className={styles.sidebarButton}>Admin Controls</button>
        </Link>
      </div>
    </>
  );

  const Sidebar = sideBar ? fullSideBar : miniSideBar;

  return <div className={styles.sidebarContainer}>{Sidebar}</div>;
}

export default Sidebar;
