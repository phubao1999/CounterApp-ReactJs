import { Component } from "react"
import quizMockingData, { quizType } from "./pageQuiz.data";
import Quiz from "./quiz/quiz";
import "./pageQuiz.scss";
import { Button } from "@material-ui/core";
import QuizOverview from "./quizOverview/quizOverview";

interface pageQuizState {
    data: quizType[],
    openOverview: boolean
}

export default class PageQuiz extends Component<any, pageQuizState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: quizMockingData,
            openOverview: false
        }
    }

    handleChangeQuiz = (data: any) => {
        const newDataQuiz = this.state.data.map((item: quizType) => {
            if (data.selected.includes(item.id)) {
                item.value = data.selected;
            }

            return item;
        })

        this.setState({
            data: newDataQuiz
        });
    }

    handleSubmitTest = () => {
        this.setState({
            openOverview: true
        })
    }

    setHandleDialog = (data: { openOverview: boolean }) => {
        this.setState({ openOverview: data.openOverview })
    }

    render() {
        return (
            <div className="main-quiz">
                <h1 className="mb-2">Take a quiz baby</h1>
                {this.state.data.map((item: quizType, index: number) =>
                    <Quiz key={item.id} data={item} index={index} onHandleChangeAns={this.handleChangeQuiz} />
                )}
                <Button onClick={() => this.handleSubmitTest()} className="my-3" variant="contained" color="primary">
                    Submit Answers
                </Button>
                <QuizOverview onHandleDialog={this.setHandleDialog} openOverview={this.state.openOverview} />
            </div>
        )
    }
}