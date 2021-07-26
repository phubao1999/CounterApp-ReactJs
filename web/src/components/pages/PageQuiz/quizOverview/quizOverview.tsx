import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { quizAnsType, quizType } from "../pageQuiz.data";
import "./quizOverview.scss"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useState } from "react";
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import { green } from "@material-ui/core/colors";
interface typeProps {
    data: quizType[],
    openOverview: boolean,
    onHandleDialog: Function,
    onHandleSubmit: Function,
    onResetQuiz: Function,
    finalResult: string
}

export default function QuizOverview(props: typeProps) {
    const options = ['A', 'B', 'C', 'D'];
    const [isSubmit, setIsSubmit] = useState(false);
    const handleDialog = (openOverview: boolean) => {
        props.onHandleDialog({ openOverview })
    }

    const getValueOfAnswer = (quiz: quizType) => {
        if (!quiz.value) {
            return (
                <div className="d-flex">
                    <ErrorOutlineIcon /> You haven't done this question
                </div>
            )
        }
        const objSelected = quiz.answers.find((item: quizAnsType) => item.id === quiz.value);
        const objSelectedIndex = quiz.answers.findIndex((item: quizAnsType) => item.id === quiz.value);

        return (
            <div>{`${options[objSelectedIndex]}. ${objSelected?.value}`}</div>
        )
    }

    const getIconFromResult = (quiz: quizType) => {
        if (isSubmit) {
            return quiz.result ? <DoneOutlinedIcon style={{ color: green[500] }} /> : <ClearOutlinedIcon color="secondary" />
        }

        return;
    }

    const onHandleSubmit = () => {
        const updateResult = props.data.map((item: quizType) => {
            const answersObj = item.answers.find((obj: quizAnsType) => item.value === obj.id);
            if (answersObj) {
                item.result = answersObj.isCorrectAns
            }

            return item;
        })
        props.onHandleSubmit({ updateResult });
        setIsSubmit(true);
    }

    const onResetQuiz = () => {
        setIsSubmit(false);
        props.onResetQuiz({});
    }

    return (
        <div>
            <Dialog
                open={props.openOverview}
                onClose={() => handleDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className="center-dialog-title" id="alert-dialog-title">
                    {isSubmit ? "Your Result" : "Preview Answer"}
                    <div>{props.finalResult}</div>
                </DialogTitle>
                {props.data.map((item: quizType) =>
                    <DialogContent key={item.id}>
                        <DialogContentText className="questions-title">
                            {item.question} {getIconFromResult(item)}
                        </DialogContentText>
                        <DialogContentText className="ans-title" component="div">
                            {getValueOfAnswer(item)}
                        </DialogContentText>
                    </DialogContent>
                )}
                <DialogActions>
                    {!isSubmit ?
                        <>
                            <Button variant="contained" color="secondary" onClick={() => handleDialog(false)}>Disagree</Button>
                            <Button variant="contained" color="primary" onClick={() => onHandleSubmit()}>Confirm</Button>
                        </> :
                        <Button variant="contained" color="primary" onClick={() => onResetQuiz()}>Reset Quiz</Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}