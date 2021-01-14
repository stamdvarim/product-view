import React, { useRef } from 'react'
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';

export const AddGuard = (props) => {

    const ref = useRef(null)

    return (
        <div className="row">
            <Grid className="row" container spacing={1} alignItems="flex-end" >
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField className="element" id="input-with-icon-grid" label="שם שומר" inputRef={ref} value={props.value} onChange={(e) => props.onChange(e)} onKeyDown={props.onKeyDown} />
                </Grid>
            </Grid>
            <Tooltip title="הוספת שומר">
                <AddCircleIcon style={{ fontSize: "2rem" }} onClick={(e) => { props.onClick(e); ref.current.focus(); }} ></AddCircleIcon>
            </Tooltip>
        </div >

    )
}
