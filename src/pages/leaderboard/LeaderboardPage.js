import React from "react";
import Layout from "../../components/Layout";

class LeaderboardPage extends React.Component {
    render() {
        return (
            <Layout title="Leaderboard">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1>Leader board Page</h1>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

export default LeaderboardPage;