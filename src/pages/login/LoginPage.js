import React from "react";
import Layout from "../../components/Layout";
import { Card, CardBody, CardHeader} from "reactstrap";

class HomePage extends React.Component {
    render() {
        return (
            <Layout title="Home">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Card>
                            <CardHeader>
                                <h3 className="text-center">Welcome to Would you rather app!</h3>
                                <p className="text-center">Please sign in to continue</p>
                            </CardHeader>
                            <CardBody>
                                <h2 className="text-center">Sign in</h2>
                                <form>
                                    <select className="form-control">
                                        <option value="">Hell</option>
                                    </select>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

export default HomePage;