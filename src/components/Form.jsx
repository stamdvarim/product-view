import React, { useState, useRef } from 'react';
//algo
import { calculateGuards } from './calculator';
//time lib
import moment from 'moment';
//material libs
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle'; import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExposureIcon from '@material-ui/icons/Exposure';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import CardActions from '@material-ui/core/CardActions';


const Form = () => {

//..............................................................................................
    //useStyle
//..............................................................................................
const useStylesButtonIcon = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const useStylesCard = makeStyles({
        root: {
            minWidth: 275,
            maxWidth: 300
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const useStylesButton = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));
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
    
//..............................................................................................
    //classes
//..............................................................................................
    const classesSend = useStylesButtonIcon();
    const classes = useStylesCard();
    const classesButton = useStylesButton();
    const classesDateInput = useStylesDateInput();

//..............................................................................................
    //seting Time
//..............................................................................................
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth().toString().length === 1 ? '0' + (now.getMonth() + 1).toString() : now.getMonth() + 1;
    const date = now.getDate().toString().length === 1 ? '0' + (now.getDate()).toString() : now.getDate();
    const hours = now.getHours().toString().length === 1 ? '0' + now.getHours().toString() : now.getHours();
    const minutes = now.getMinutes().toString().length === 1 ? '0' + now.getMinutes().toString() : now.getMinutes();

    const formattedDateTime = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes;

    const dateEnd = now.getDate().toString().length === 1 ? '0' + (now.getDate() + 1).toString() : now.getDate() + 1;

    const formattedDateTimeEnd = year + '-' + month + '-' + dateEnd + 'T' + hours + ':' + minutes;

//..............................................................................................
// use state
//..............................................................................................

    const [persons, setPersons] = useState([]);
    const [currentPersonName, setCurrentPersonName] = useState("");
    const [startDate, setStartDate] = useState(formattedDateTime);
    const [endDate, setEndDate] = useState(formattedDateTimeEnd);
    const [guardTime, setGuardTime] = useState(1);
    const [guardsView, setGuardsView] = useState([]);
    const [minuteHour, setMinuteHour] = useState("hour");
    const [isCalculateClicked, setisCalculateClicked] = useState(false);
    const [isPersonAdd, setIsPersonAdd] = useState(false);
    const [options] = useState([
        { value: 'hour', label: 'HOUR' },
        { value: 'minute', label: 'MINUTE' },
    ]);
//..............................................................................................
    //use ref 
//..............................................................................................

    const peronNameRef = useRef(null);

//..............................................................................................
    //function
//..............................................................................................

    // track houre minute selector 
    const handleChange = selectedOption => {
        setMinuteHour(selectedOption.value);
    };

    //track person name
    const onChangePersonName = (e) => {
        const personName = e.target.value;
        setCurrentPersonName(currentPersonName => personName);
    }

    //add person by push add button
    const addToPersons = () => {
        setIsPersonAdd(true)
        if (!currentPersonName || !currentPersonName.trimStart().trimEnd()) {
            return alert("please enter a valid person name");
        }
        if (persons.includes(currentPersonName)) {
            return alert("name already in list");
        }
        setPersons(persons => [...persons, currentPersonName]);
        setCurrentPersonName("");
        peronNameRef.current.focus();
    }

    //using enter to add person
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
            addToPersons();
        }
    }
    //selete person
    const deletePerson = (index) => {
        setPersons(persons => {
            const newPersons = [...persons];
            newPersons.splice(index, 1);
            return newPersons;
        });
    }

    //claculate list of persons after adding...
    const calculatePersons = () => {
        if (startDate === "" || endDate === "") {
            return alert("please enter a Date");
        }
        if (guardTime <= 0) {
            return alert("please enter number above 0");
        }
        console.log(guardsView);
        if (persons.length <= 1) {
            return alert("please enter at least 2 guards");
        }
        setGuardsView(calculateGuards(persons, startDate, endDate, guardTime, minuteHour));
        setisCalculateClicked(true);
    }


    return (
        <div>
            <form>
                <form className={classesDateInput.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Start Date"
                        type="datetime-local"
                        onChange={(e) => setStartDate(e.target.value)}
                        value={startDate}
                        className={classesDateInput.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <form className={classesDateInput.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="End Date"
                        type="datetime-local"
                        onChange={(e) => setEndDate(e.target.value)}
                        value={endDate}
                        className={classesDateInput.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <div>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Person Name" ref={peronNameRef} value={currentPersonName} onChange={onChangePersonName} onKeyDown={handleKeyDown} />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classesSend.button}
                        endIcon={<AddCircleIcon ></AddCircleIcon>}
                        onClick={addToPersons}
                    >
                        Add
                    </Button>
                </div>
                <div>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" type="number" label="Guard Time" ref={peronNameRef} value={guardTime} onChange={(e) => setGuardTime(e.target.value)} />
                        </Grid>
                    </Grid>
                    <div>
                        <Select
                            className="select"
                            placeholder={minuteHour.toUpperCase()}
                            value={minuteHour}
                            onChange={handleChange}
                            options={options}
                            defaultValue={options[0]}
                        />
                    </div>
                </div>
                <div>
                    <Button variant="contained" className={classesButton.margin} onClick={calculatePersons} endIcon={<ExposureIcon ></ExposureIcon>} >
                        Calculate
                        
                    </Button>
                </div>
            </form>
            {
                isPersonAdd ?
                    <div>
                        <h2>Persons:</h2>
                        <div className="results">

                            {persons.map((name, index) => (
                                <div key={index}>
                                    <Card className={classes.root}>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                Guard Name -  {name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classesButton.button}
                                                startIcon={<DeleteIcon />}
                                                onClick={() => deletePerson(index)}
                                            >
                                                Delete
                                </Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                    : ""}
            {
                isCalculateClicked ?
                    <div>
                        <hr />
                        <div>
                            <h2>Calculated:</h2>
                            <Button onClick={() => window.location.reload(false)}
                                color="#e0e0e0"
                                variant="contained"
                            >
                                Restart
                            </Button>
                            <div className="results">
                                {guardsView.map((person, index) => (
                                    <div key={index}>
                                        <Card className={classes.root}>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    name: {person.name}
                                                </Typography>

                                                <Typography variant="body2" component="p">
                                                    Start Time: {moment(person.startTime).format('MM/DD/YYYY, h:mm a')}
                                                    <br />
                                    End Time: {moment(person.endTime).format('MM/DD/YYYY, h:mm a')}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </div>
    )
}

export default Form;