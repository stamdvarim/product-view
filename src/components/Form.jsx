import React, { useState } from 'react';
//algo
import { calculateGuards } from '../algo/calculator';
//material libs
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import ExposureIcon from '@material-ui/icons/Exposure';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

//mine components 
import { Time } from './Time';
import { AddGuard } from './AddGuard';
import { ControlledAccordions } from "./Accordion";
import Table from './Table';
import { Typography } from '@material-ui/core';
import ShareButton from './ShareButton';
import moment from 'moment';

//..............................................................................................
//setting Time
//..............................................................................................
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth().toString().length === 1 ? '0' + (now.getMonth() + 1).toString() : now.getMonth() + 1;
const date = now.getDate().toString().length === 1 ? '0' + (now.getDate()).toString() : now.getDate();
const hours = now.getHours().toString().length === 1 ? '0' + now.getHours().toString() : now.getHours();
const minutes = now.getMinutes().toString().length === 1 ? '0' + now.getMinutes().toString() : now.getMinutes();
const formattedDateTime = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes;
const hoursEnd = (now.getHours() + 1).toString().length === 1 ? '0' + (now.getHours() + 1).toString() : now.getHours() + 1;
const formattedDateTimeEnd = year + '-' + month + '-' + date + 'T' + hoursEnd + ':' + minutes;

const Form = () => {

    //..............................................................................................
    //useStyle
    //..............................................................................................
    const useStylesButton = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    //..............................................................................................
    //classes
    //..............................................................................................
    const classesButton = useStylesButton();

    //..............................................................................................
    // use state
    //..............................................................................................

    const [persons, setPersons] = useState([]);
    const [currentPersonName, setCurrentPersonName] = useState("");
    const [startDate, setStartDate] = useState(formattedDateTime);
    const [endDate, setEndDate] = useState(formattedDateTimeEnd);
    const [guardTime, setGuardTime] = useState();
    const [guardsView, setGuardsView] = useState([]);
    const [minuteHour, setMinuteHour] = useState("minute");
    const [expanded, setExpanded] = useState('panel1');
    const [isEqualTime, setIsEqualTime] = useState(true);

    //..............................................................................................
    //function
    //..............................................................................................

    //track person name
    const onChangePersonName = (e) => {
        setCurrentPersonName(e.target.value);
    }

    //add person by push add button
    const addToPersons = () => {
        if (!currentPersonName || !currentPersonName.trimStart().trimEnd()) {
            return alert("יש להכניס שם חוקי");
        }
        if (persons.includes(currentPersonName)) {
            return alert("שם כבר קיים!");
        }
        setPersons(persons => [...persons, currentPersonName]);
        setCurrentPersonName("");
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
    const calculatePersonsEvenTime = (isRandom) => {
        if (startDate === "" || endDate === "") {
            return alert("יש להכניס תאריך התחלה ותאריך סיום");
        }
        if (persons.length <= 1) {
            return alert("יש להכניס לפחות 2 שומרים");
        }
        if (startDate >= endDate) {
            return alert("זמן סוף השמירה חייב להיות גדול מזמן התחלת השמירה");
        }
        setIsEqualTime(true);
        const countGuards = persons.length;
        console.log(countGuards, "countGuards");
        const sumTime = moment(endDate).diff(moment(startDate), minuteHour);
        console.log(sumTime, "sumTime");
        const evenguardTime = sumTime / countGuards != 0 ? Math.floor(sumTime / countGuards) : Math.ceil(sumTime / countGuards);
        console.log(evenguardTime, "evenguardTime", evenguardTime / 60, "evenguardTime in houers");
        if (evenguardTime > (6 * 60)) {
            alert("זמן השמירה יצא גדול מ6 שעות, אולי כדי להגדיר זמן שמירה?");
        }
        setGuardsView(calculateGuards(persons, startDate, endDate, evenguardTime, minuteHour, isRandom));
    }

    const calculatePersons = (isRandom) => {
        if (startDate === "" || endDate === "") {
            return alert("יש להכניס תאריך התחלה ותאריך סיום");
        }
        if (!guardTime) {
            return alert("יש להזין את משך זמן השמירה");
        }
        if (guardTime <= 0) {
            return alert("שמירה חייבת להיות מעל 0 דקות");
        }
        if (persons.length <= 1) {
            return alert("יש להכניס לפחות 2 שומרים");
        }
        if (startDate >= endDate) {
            return alert("זמן סוף השמירה חייב להיות גדול מזמן התחלת השמירה");
        }
        setIsEqualTime(false);
        setGuardsView(calculateGuards(persons, startDate, endDate, guardTime, minuteHour, isRandom));
    }


    return (
        <div>
            <div className="app">
                <form style={{ maxWidth: "500px", padding: "3%", backgroundColor: "#fdfcedf0", margin: "3%", borderRadius: "5px", boxShadow: "black 1px 1px 20px 1px" }}>
                    <div>
                        <div className="row">
                            <Typography style={{
                                margin: '0 auto'
                            }} variant='h4' >  ברוכים הבאים!
                    </Typography>
                        </div>
                        <div className="row">
                            <Typography style={{
                                margin: '0 auto'
                            }} variant='h7' >  ה-אתר שיסדר לכם את השמירות
                    </Typography>
                        </div>
                        <hr />
                    </div>
                    <Time
                        onChangeStartTime={(e) => setStartDate(e.target.value)}
                        firstValue={startDate}
                        onChangeEndTime={(e) => setEndDate(e.target.value)}
                        secondValue={endDate}
                    />
                    <AddGuard
                        value={currentPersonName}
                        onChange={(e) => onChangePersonName(e)}
                        onKeyDown={(e) => { handleKeyDown(e) }}
                        onClick={(e) => { addToPersons(e) }}
                    />
                    {persons.length > 0 &&
                        <div className="row" style={{ marginTop: "15px" }}>
                            {persons.map((name, index) => (
                                <div key={index}>
                                    <Chip
                                        className=""
                                        size="small"
                                        label={`${index + 1}) ${name}`}
                                        onDelete={() => deletePerson(index)}
                                        color="default"
                                    />
                                </div>
                            ))}
                        </div>
                    }
                    <div className="marginTop">
                        <ControlledAccordions
                            calculatePersonsEvenTime={calculatePersonsEvenTime}
                            guardTime={guardTime}
                            setGuardTime={setGuardTime}
                            minuteHour={minuteHour}
                            calculatePersons={calculatePersons}
                        />
                    </div>
                </form>
            </div>
            {
                guardsView.length > 0 ?
                    <div>
                        <hr />
                        <div>
                            <div className="row">
                                {isEqualTime ?
                                    < Button variant="contained" className={classesButton.margin} onClick={(e) => calculatePersonsEvenTime(true)} endIcon={<ExposureIcon style={{ marginRight: "5px" }}></ExposureIcon>} >
                                        הגרל שוב זמן שווה
                                    </Button>
                                    :
                                    < Button variant="contained" className={classesButton.margin} onClick={(e) => calculatePersons(true)} endIcon={<ExposureIcon style={{ marginRight: "5px" }}></ExposureIcon>} >
                                        הגרל שוב
                                    </Button>
                                }
                                <Button
                                    endIcon={<RefreshIcon style={{ marginRight: "5px" }}></RefreshIcon>}
                                    style={{ margin: "5px" }}
                                    onClick={() => window.location.reload(false)}
                                    color="#e0e0e0"
                                    variant="contained"
                                >
                                    הכל מהתחלה
                            </Button>
                                <ShareButton guardsView={guardsView}></ShareButton>
                            </div>
                            <Table guards={guardsView} />
                        </div>
                    </div>
                    : ""
            }
        </div >
    )
}

export default Form;