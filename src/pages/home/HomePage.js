import React from "react";
import Layout from "../../components/Layout";

class HomePage extends React.Component {
    render() {
        return (
            <Layout title="Home">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1>Home Page</h1>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

export default HomePage;