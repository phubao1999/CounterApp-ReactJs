import { Card, CardActionArea, CardContent, FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { quizAnsType, quizType } from "../pageQuiz.data";
import "./quiz.scss";

const useStyles = makeStyles({
    root: {
        width: "calc(100vw - 4rem)",
    }
});

interface propsType {
    data: quizType,
    index: number,
    onHandleChangeAns: Function,
    resetQuiz: boolean
}

export default function Quiz(props: propsType) {
    const classes = useStyles();
    const alphabetAns = ['A', 'B', 'C', 'D'];
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        props.onHandleChangeAns({
            selected: (event.target as HTMLInputElement).value
        })
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (props.resetQuiz) {
            setValue("");
        }
    });

    return (
        <div className="quiz-container m-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Question {props.index + 1}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="div">
                            {props.data.question}
                            <FormControl component="fieldset">
                                <RadioGroup value={value} aria-label="ans" onChange={handleChange}>
                                    {props.data.answers.map((item: quizAnsType, index: number) =>
                                        <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={`${alphabetAns[index]}. ${item.value}`} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}