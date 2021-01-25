import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const GuardsTable = (props) => {

    const useStyles = makeStyles({
        table: {
            maxWidth: 650,
            backgroundColor: 'white',
            margin: '0 auto',
            marginBottom: '1em'
        },
    });

    const classes = useStyles();

    const { guards } = props;


    return (
        <div className={classes.table}>
            <h2>חישוב השמירות</h2>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell>שם שומר</TableCell>
                        <TableCell>זמן התחלה</TableCell>
                        <TableCell>זמן סיום</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {guards.map((guard, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {guard.name}
                            </TableCell>
                            <TableCell>{guard.startTime.format('H:mm - MM/DD')}</TableCell>
                            <TableCell>{guard.endTime.format('H:mm - MM/DD')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default GuardsTable;