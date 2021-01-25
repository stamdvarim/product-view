import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Select } from './Select';


export const GuardTime = (props) => {

    const { setMinuteHour } = props;

    return (
        <div className="row">
            <Grid container spacing={1} alignItems="flex-end" className="row">
                <Grid item>
                    <TextField id="input-with-icon-grid" type="number" label="זמן שמירה" value={props.valueGuardTime} onChange={(e) => props.onChangeGuardTime(e)} />
                </Grid>

            </Grid>
            <Select
                setMinuteHour={setMinuteHour}
                minuteHour={props.minuteHour}
                value={props.valueSelector}
            />
        </div>

    )
}
