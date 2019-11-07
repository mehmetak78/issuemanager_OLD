import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {stableSort, getSorting} from "../../utils/sort";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        width: '100%',
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
}));

function EnhancedTableHead(props) {
    const {order, orderBy, onRequestSort} = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    const {columns} = props;
    return (
        <TableHead>
            <TableRow>
                {columns.map((column, index) => (
                    <TableCell
                        key={index}
                        align={column.align}
                        sortDirection={orderBy === column.name ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === column.name}
                            direction={order}
                            onClick={createSortHandler(column.name)}
                        >
                            <Typography variant="h5" component="h5">
                                {column.caption}
                            </Typography>
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


const TableSortMAK = props => {
    const classes = useStyles();

    const {columns, rows, dense, rowSize} = props;

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(rowSize);

    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader
                       aria-labelledby="tableTitle"
                       size={dense ? 'small' : 'medium'}
                       aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        columns={columns}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {stableSort(rows, getSorting(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}
                                              onClick={(e) => props.handleRowClick(e, row)}>
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
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage={"Rows per page"}
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

TableSortMAK.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    dense: PropTypes.bool.isRequired,
    handleRowClick: PropTypes.func.isRequired,
};

TableSortMAK.defaultProps = {
    rowSize: 10
};

export default TableSortMAK;
