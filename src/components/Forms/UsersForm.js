import React, { useEffect, useState} from 'react';
import {getData} from "../../db";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Card, makeStyles} from "@material-ui/core";
import CircularIndeterminate from "../components/CircularIndeterminate";

import TableSortMAK from "../components/TableSortMAK";



const useStyles = makeStyles(theme => ({
    card: {
        height: "100%"
    },
}));

const UsersForm = props => {

    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [

        {
            name: "userName",
            caption: "User Name",
            align:"left",
            numeric: false
        },
        {
            name: "firstName",
            caption: "First Name",
            align:"left",
            numeric: false
        },
        {
            name: "lastName",
            caption: "Last Name",
            align:"left",
            numeric: false
        }
    ];

    useEffect(() => {
        const asyncFunction = async () => {
            setLoading(true);
            const res = await getData("/users");
            if (res.error) {
                console.log(res.error);
                setLoading(false);
            } else {
                setUsers(res.data);
                setLoading(false);
            }
        };
        asyncFunction();
        // eslint-disable-next-line
    }, []);

    const handleRowClick = (e,row) => {
        e.preventDefault();
        console.log(row);
        props.history.push("/addUser");
    };

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h1">
                    Users
                </Typography>
                <TableSortMAK rows={users} columns={columns} dense={true} rowSize={10}  handleRowClick={handleRowClick}/>
                {loading ? <CircularIndeterminate/> : null }
            </CardContent>
        </Card>
    )

        ;
};

export default UsersForm;
