import Layout from "../Layouts/Layout";

const Dashboard = (props) => {
    const { name } = props;
    return <h1>Dashboard hi {name}</h1>;
};

Dashboard.layout = (page) => <Layout children={page} />;
export default Dashboard;
