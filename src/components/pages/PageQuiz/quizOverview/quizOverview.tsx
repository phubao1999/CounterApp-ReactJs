import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

interface typeProps {
    openOverview: boolean,
    onHandleDialog: Function
}

export default function QuizOverview(props: typeProps) {

    const handleDialog = (openOverview: boolean) => {
        props.onHandleDialog({ openOverview })
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
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
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