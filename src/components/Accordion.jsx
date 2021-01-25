import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { GuardTime } from './GuardTime';


const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
    },
    heading: {
        // fontSize: theme.typography.pxToRem(15),
        // flexBasis: '33.33%',
        // flexShrink: 0,
    },
    secondaryHeading: {
        // fontSize: theme.typography.pxToRem(15),
        // color: theme.palette.text.secondary,
    },
}));

const useStylesButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export const ControlledAccordions = (props) => {

    const { calculatePersonsEvenTime, guardTime, setGuardTime, minuteHour, calculatePersons, setMinuteHour } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const classesButton = useStylesButton();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>חלוקה זמן שווה</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="row marginTop">
                        <Button variant="contained" className={classesButton.margin} className="randonGuard" size="small" onClick={(e) => calculatePersonsEvenTime(true)}>סדר רנדומלי</Button>
                        <Button variant="contained" className={classesButton.margin} className="randonGuard" size="small" onClick={(e) => calculatePersonsEvenTime(false)}>סדר לפי הכנסה</Button>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>הגדרת זמן שמירה</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <GuardTime
                        valueGuardTime={guardTime}
                        onChangeGuardTime={(e) => setGuardTime(e.target.value)}
                        minuteHour={minuteHour}
                        valueSelector={minuteHour}
                        setMinuteHour={setMinuteHour}
                    />
                    <div className="CalculateButton">
                        <Button variant="contained" className={classesButton.margin} className="randonGuard" size="small" onClick={(e) => calculatePersons(true)} >
                            סדר רנדומלי
                            </Button>
                        <Button variant="contained" className={classesButton.margin} size="small" onClick={(e) => calculatePersons(false)} >
                            סדר לפי הכנסה
                             </Button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
