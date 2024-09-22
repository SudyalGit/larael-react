import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
