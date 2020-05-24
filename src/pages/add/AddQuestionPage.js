import React from "react";
import Layout from "../../components/Layout";
import { Card, CardBody, CardHeader} from "reactstrap";
import { Button } from "../../components/index";

class AddQuestionPage extends React.Component {

    state = {
        option1: "",
        option2: ""
    };

    onChangeHandler = (event) => {
        const { value, name } = event.target;
        this.setState(() => ({
            [name]: value
        }));
    };

    onSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { option1, option2 } = this.state;

        return (
            <Layout title="Add">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Card>
                            <CardHeader>
                                <h2 className="text-center">Create New Question</h2>
                            </CardHeader>
                            <CardBody>
                                <p>Please complete the question</p>
                                <h5>Would you rather ...</h5>
                                <form onSubmit={this.onSubmit}>
                                    <div classNam="form-group">
                                        <input 
                                            className="form-control" 
                                            name="option1" 
                                            value={option1}
                                            onChange={this.onChangeHandler}
                                            placeholder="Enter option one text here..."
                                            required
                                        />
                                    </div>
                                    <div className="dividerWrapper">
                                        <div className="divider">
                                            <span>OR</span>
                                        </div>
                                    </div>
                                    <div classNam="form-group">
                                        <input 
                                            className="form-control" 
                                            name="option2" 
                                            value={option2}
                                            onChange={this.onChangeHandler}
                                            placeholder="Enter option two text here..."
                                            required
                                        />
                                    </div><hr/>
                                    <Button type="submit" title="Submit" style={{width: '100%'}} />
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <style>{`
                    .dividerWrapper {
                        padding: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                    }

                    .dividerWrapper .divider {
                        width: 30px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 30px;
                        background-color: #000;
                        color: #fff;
                        padding: 10px;
                        border-radius: 100%;
                    }
                `}</style>
            </Layout>
        );
    }
}

export default AddQuestionPage;