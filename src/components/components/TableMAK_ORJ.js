import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
                                 root: {
                                     width: '100%',
                                     overflowX: 'auto',
                                 },
                                 table: {
                                     minWidth: 650,
                                 },
                             });


const TableMAK = props => {
    const classes = useStyles();

    const {columns, rows} = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="Table">
                <TableHead>
                    <TableRow key={0}>
                        {columns.map((column, index) => (
                            <TableCell key={index} align="left">
                                <Typography variant="h5" component="h5">
                                    {column.caption}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow hover key={row.id}>
                            {columns.map((column, index) => (

                                    <TableCell key={index} align="left">{row[column.name]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

TableMAK.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
};

export default TableMAK;
