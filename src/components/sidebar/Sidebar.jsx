import React from "react";
import "./sidebar.css";

import { Link, useLocation } from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Sidebar = ({ collapsed, toggleSidebar }) => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    console.log(location);
    return (
        <div className="sidebarContainer">
            <ul className="list">
                <li>
                    <button onClick={toggleSidebar} className="no-style">
                        {!collapsed ? (
                            <KeyboardDoubleArrowRightIcon fontSize="medium" />
                        ) : (
                            <KeyboardDoubleArrowLeftIcon fontSize="medium" />
                        )}
                    </button>
                </li>
                <li>
                    <span className="cat">Yönetim Paneli</span>
                    <Link
                        to="/"
                        style={{ textDecoration: "none" }}
                        className={`link ${isActive("/") ? "active" : ""}`}
                    >
                        <GridViewRoundedIcon className="icon" />
                        {!collapsed ? "" : "Dashboard"}
                    </Link>
                </li>

                <li>
                    <span className="cat">Menu</span>
                    <Link
                        to="/recipes"
                        style={{ textDecoration: "none" }}
                        className={`link ${
                            isActive("/recipes") ? "active" : ""
                        }`}
                    >
                        <MenuBookRoundedIcon />
                        {!collapsed ? "" : "Recipes"}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
