import React  from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "../../components/Layout";
import { PollDetailsCard } from "../../components";

class PollDetailsPage extends React.Component {

    state = {
        pollDetails: {}
    };

    componentDidMount() {
        const { match: { params }, questions } = this.props;
        const question_id = params.question_id;
        this.setState(() => ({
            pollDetails: questions[question_id]
        }));
    };

    render() {
        const { pollDetails } = this.state;
        const { users } = this.props;
        
        return (
            <Layout title="Poll Details">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <PollDetailsCard users={users} question={pollDetails} />
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    questions: state.questions.questions,
    users: state.users.users
});

export default connect(mapStateToProps)(withRouter(PollDetailsPage));