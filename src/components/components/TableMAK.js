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
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(1),
        width: '100%',
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
}));

const TableMAK = props => {
    const classes = useStyles();

    const {columns, rows, dense} = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table" size={dense ? 'small' : 'medium'}>
                    <TableHead>
                        <TableRow key={0}>
                            {columns.map((column, index) => (
                                <TableCell key={index} align={column.align}>
                                    <Typography variant="h5" component="h5">
                                        {column.caption}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={(e)=>props.handleRowClick(e,row)}>
                                    {columns.map((column, index) => {
                                        return (
                                            <TableCell key={index} align={column.align}>
                                                {row[column.name]}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage={"Rows rer page"}
                labelDisplayedRows={
                    ({from, to, count}) => `(${from}-${to === -1 ? count : to}) / ${count}`
                }
                backIconButtonProps={{
                    'aria-label': 'previous page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'next page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>


    );
};

TableMAK.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    dense: PropTypes.bool.isRequired,
    handleRowClick: PropTypes.func.isRequired,
};

export default TableMAK;
