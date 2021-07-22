import { Component } from "react"
import quizMockingData, { quizType } from "./pageQuiz.data";

interface pageQuizState {
    data: quizType
}

export default class PageQuiz extends Component<any, pageQuizState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: quizMockingData
        }
    }

    render() {
        console.log(this.state.data);
        return (
            <h1>Take a quiz baby</h1>
        )
    }
}