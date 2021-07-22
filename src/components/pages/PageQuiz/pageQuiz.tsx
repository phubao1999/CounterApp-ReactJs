import { Component } from "react"
import quizMockingData, { quizType } from "./pageQuiz.data";
import Quiz from "./quiz/quiz";
import "./pageQuiz.scss";
import { Button } from "@material-ui/core";
import QuizOverview from "./quizOverview/quizOverview";

interface pageQuizState {
    totalQuestions: number,
    data: quizType[],
    openOverview: boolean,
    finalResult: string
}

export default class PageQuiz extends Component<any, pageQuizState> {
    constructor(props: any) {
        super(props);
        this.state = {
            totalQuestions: quizMockingData.length,
            data: quizMockingData,
            openOverview: false,
            finalResult: ""
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

    setHandleSubmit = (data: { updateResult: quizType[] }) => {
        const totalRightAnswers = data.updateResult.filter((item: quizType) => item.result).length;
        this.setState({
            data: data.updateResult,
            finalResult: `${totalRightAnswers} / ${this.state.totalQuestions}`
        });
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
                <QuizOverview
                    data={this.state.data}
                    onHandleDialog={this.setHandleDialog}
                    openOverview={this.state.openOverview}
                    onHandleSubmit={this.setHandleSubmit}
                    finalResult={this.state.finalResult}
                />
            </div>
        )
    }
}