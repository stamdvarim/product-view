import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        maxWidth: 650,
        backgroundColor: 'white',
        margin: '0 auto'
    },
});

const GuardsTable = (props) => {

    const { guards } = props;

    const classes = useStyles();

    return (
        <Table className={classes.table} aria-label="simple table">
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
                        <TableCell>{guard.startTime.format('MM/DD, H:mm')}</TableCell>
                        <TableCell>{guard.endTime.format('MM/DD, H:mm')}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default GuardsTable;