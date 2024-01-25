import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
            <ul className="list">
                <li>
                    <span className="cat">Yönetim Paneli</span>
                    <Link
                        to="/"
                        style={{ textDecoration: "none" }}
                        className="link"
                    >
                        <GridViewRoundedIcon className="icon" />
                        Dashboard
                    </Link>
                </li>

                <li>
                    <span className="cat">Menu</span>
                    <Link
                        to="/recipes"
                        style={{ textDecoration: "none" }}
                        className="link active"
                    >
                        <MenuBookRoundedIcon />
                        Recipes
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
