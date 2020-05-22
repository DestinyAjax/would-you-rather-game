import React from "react";
import Layout from "../../components/Layout";

class AddQuestionPage extends React.Component {
    render() {
        return (
            <Layout title="Add">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1>Add Question Page</h1>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

export default AddQuestionPage;