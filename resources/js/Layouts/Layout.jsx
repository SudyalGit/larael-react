import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-header">
                    <img src="images/logo.png" alt="logo" />
                    <h2>Neuvin</h2>
                </div>

                <ul className="sidebar-links">
                    <h4>
                        <span>Main Menu</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <Link href="/dashboard">
                            <span className="material-symbols-outlined">
                                {" "}
                                dashboard{" "}
                            </span>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/customers">
                            <span className="material-symbols-outlined">
                                {" "}
                                groups{" "}
                            </span>
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <span className="material-symbols-outlined">
                                inventory_2
                            </span>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/quotes">
                            <span className="material-symbols-outlined">
                                request_quote
                            </span>
                            Quotes
                        </Link>
                    </li>

                    <h4>
                        <span>Account</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <Link href="#">
                            <span className="material-symbols-outlined">
                                {" "}
                                account_circle{" "}
                            </span>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="material-symbols-outlined">
                                {" "}
                                settings{" "}
                            </span>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="material-symbols-outlined">
                                {" "}
                                logout{" "}
                            </span>
                            Logout
                        </Link>
                    </li>
                </ul>
                <div className="user-account">
                    <div className="user-profile">
                        <img src="images/profile-img.jpg" alt="Profile Image" />
                        <div className="user-detail">
                            <h3>Sudhanshu</h3>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="main">{children}</main>
        </>
    );
};

export default Layout;
