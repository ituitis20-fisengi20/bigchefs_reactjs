import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./layout.css";

const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(() => {
        const isCollapsed = localStorage.getItem("sidebarCollapsed");
        return isCollapsed ? JSON.parse(isCollapsed) : true;
    });

    useEffect(() => {
        localStorage.setItem("sidebarCollapsed", collapsed);
    }, [collapsed]);

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="container">
            <div className={`menu${collapsed}`}>
                <Sidebar
                    collapsed={collapsed}
                    toggleSidebar={handleToggleSidebar}
                />
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;
