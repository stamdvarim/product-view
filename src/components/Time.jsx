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

    console.log(props.firstValue, " first")
    console.log(props.secondValue, " second")

    return (
        <div className="element">
            <form className={classesDateInput.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="תחילת זמן "
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
                    label="סיום זמן"
                    type="datetime-local"
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
