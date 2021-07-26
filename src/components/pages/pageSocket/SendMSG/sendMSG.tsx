import { Button, createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
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

export default function SendMSG() {
    const classes = useStyles();

    return (
        <div className="send-box">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                />
                <TextField required id="outlined-basic" label="Your Message" variant="outlined" />
            </form>
            <div className="submit-layout">
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    );
}