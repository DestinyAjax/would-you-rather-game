import React  from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "../../components/Layout";
import { PollAnswerCard, PollDetailsCard } from "../../components";

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

    componentDidUpdate(prevProps) {
        if (prevProps.questions !== this.props.questions) {
            const { match: { params }, questions } = this.props;
            const question_id = params.question_id;
            this.setState(() => ({
                pollDetails: questions[question_id]
            }));
        }
    }

    render() {
        const { pollDetails } = this.state;
        const { users, authUser } = this.props;
        let checker = false;
        if (pollDetails.optionOne && pollDetails.optionTwo) {
            if (pollDetails.optionOne.votes.includes(authUser.id)|| pollDetails.optionTwo.votes.includes(authUser.id)) {
                checker = true;
            }
        }
        
        return (
            <Layout title="Poll Details">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {!checker ? 
                            <PollAnswerCard auth={authUser} users={users} question={pollDetails}/> :
                            <PollDetailsCard auth={authUser} users={users} question={pollDetails} />
                        }
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    questions: state.questions.questions,
    users: state.users.users,
    authUser: state.users.authUser
});

export default connect(mapStateToProps)(withRouter(PollDetailsPage));