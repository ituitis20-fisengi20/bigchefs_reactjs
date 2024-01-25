import Sidebar from "../../components/sidebar/Sidebar";
import "./layout.css";

const Layout = ({ children }) => {
    return (
        <div className="container">
            <div className="menu">
                <Sidebar />
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;
