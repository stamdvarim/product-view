import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';


export const AddGuard = (props) => {

    const useStylesButtonIcon = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });

    const classesSend = useStylesButtonIcon();

    return (
        <Grid container spacing={1} alignItems="flex-end" className="element">
            <Grid item>
                <AccountCircle />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="שם שומר" ref={props.ref} value={props.value} onChange={(e) => props.onChange(e)} onKeyDown={props.onKeyDown} />
            </Grid>
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classesSend.button}
                    endIcon={<AddCircleIcon style={{ marginRight: "5px" }} ></AddCircleIcon>}
                    onClick={props.onClick}
                >
                    הוסף
            </Button>
            </ThemeProvider>
        </Grid>
    )
}
