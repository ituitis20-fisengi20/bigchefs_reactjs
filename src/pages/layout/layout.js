import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./layout.css";

const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);

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
