import { Link } from "@inertiajs/react";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link preserveScroll href="/">
                <h2 style={{ marginTop: "1000px", textAlign: "center" }}>
                    {new Date().toISOString()}
                </h2>
            </Link>
        </>
    );
};

export default Home;
