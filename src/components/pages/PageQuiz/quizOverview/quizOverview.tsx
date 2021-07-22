import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { quizAnsType, quizType } from "../pageQuiz.data";
import "./quizOverview.scss"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface typeProps {
    data: quizType[],
    openOverview: boolean,
    onHandleDialog: Function
}

export default function QuizOverview(props: typeProps) {
    const options = ['A', 'B', 'C', 'D'];
    const handleDialog = (openOverview: boolean) => {
        props.onHandleDialog({ openOverview })
    }

    const getValueOfAnswer = (quiz: quizType) => {
        if (!quiz.value) {
            return (
                <div className="d-flex">
                    <ErrorOutlineIcon />
                    <span className="ml-2">You haven't done this question</span>
                </div>
            )
        }
        const objSelected = quiz.answers.find((item: quizAnsType) => item.id === quiz.value);
        const objSelectedIndex = quiz.answers.findIndex((item: quizAnsType) => item.id === quiz.value);

        return (
            <span>{`${options[objSelectedIndex]}. ${objSelected?.value}`}</span>
        )
    }

    return (
        <div>
            <Dialog
                open={props.openOverview}
                onClose={() => handleDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Preview Answer"}</DialogTitle>
                {props.data.map((item: quizType) =>
                    <DialogContent key={item.id}>
                        <DialogContentText className="questions-title">
                            {item.question}
                        </DialogContentText>
                        <DialogContentText className="ans-title">
                            {getValueOfAnswer(item)}
                        </DialogContentText>
                    </DialogContent>
                )}
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={() => handleDialog(false)}>
                        Disagree
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => handleDialog(true)}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>)
}