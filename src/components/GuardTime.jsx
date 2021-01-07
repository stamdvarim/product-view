import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import { Select } from './Select';


export const GuardTime = (props) => {

    const useStylesButtonIcon = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const classesSend = useStylesButtonIcon();

    return (
        <Grid container spacing={1} alignItems="flex-end" className="element">
            <Grid item>
                <AccountCircle />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" type="number" label="Guard Time" value={props.value} onChange={(e) => props.onChange(e)} />
            </Grid>
            <Select
                minuteHour={props.minuteHour}
                value={props.value1}
                onChange={(e) => props.onChange1(e)}
            />
        </Grid>

    )
}
