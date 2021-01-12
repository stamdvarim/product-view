import React from 'react'
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';


export const AddGuard = (props) => {

    return (
        <div className="row">
            <Grid className="row" container spacing={1} alignItems="flex-end" >
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField className="element" id="input-with-icon-grid" label="שם שומר" ref={props.ref} value={props.value} onChange={(e) => props.onChange(e)} onKeyDown={props.onKeyDown} />
                </Grid>
            </Grid>
            <AddCircleIcon style={{ fontSize: "2rem" }} onClick={props.onClick} ></AddCircleIcon>
        </div >

    )
}
