import { Button, createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { useState } from "react";
import "./sendMSG.scss";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100%',
            },
        },
    }),
);

interface propsType {
    userId: string,
    emitSubmit: any
}

export default function SendMSG(props: propsType) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const emitChatInfo = () => {
        props.emitSubmit({
            userId: props.userId,
            name: name,
            message: message
        });
        setName('');
        setMessage('');
    }

    const handleChangeName = (e: any) => {
        setName(e.target.value);
    }

    const handleChangeMessage = (e: any) => {
        setMessage(e.target.value);
    }

    return (
        <div className="send-box m-4 custom-box-shadow">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={emitChatInfo}>
                <TextField
                    required
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={handleChangeName}
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="Your Message"
                    variant="outlined"
                    onChange={handleChangeMessage}
                    value={message}
                />
            </form>
            <div className="submit-layout">
                <Button variant="contained" color="primary" onClick={emitChatInfo}>
                    Submit
                </Button>
            </div>
        </div>
    );
}