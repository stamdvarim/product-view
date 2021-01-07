import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


export const Time = (props) => {

    const useStylesDateInput = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));

    const classesDateInput = useStylesDateInput();


    return (
        <div className="element">
            <form className={classesDateInput.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    onChange={(e) => props.onChangeStartTime(e)}
                    value={props.firstValue}
                    className={classesDateInput.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}

                />
                <TextField
                    id="datetime-local"
                    label="End Date"
                    type="datetime-local"
                    onChangeEndTime
                    onChange={(e) => props.onChangeEndTime(e)}
                    value={props.secondValue}
                    className={classesDateInput.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    )
}
