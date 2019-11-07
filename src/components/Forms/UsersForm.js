import React, { useEffect, useState} from 'react';
import {getData} from "../../db";
import TableMAK from "../components/TableMAK";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Card, makeStyles} from "@material-ui/core";
import CircularIndeterminate from "../components/CircularIndeterminate";

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
        },
        {
            name: "firstName",
            caption: "First Name",
            align:"left",
        },
        {
            name: "lastName",
            caption: "Last Name",
            align:"right",
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

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h1">
                    Users
                </Typography>
                <TableMAK rows={users} columns={columns}/>
                {loading ? <CircularIndeterminate/> : null }
            </CardContent>
        </Card>
    )

        ;
};

export default UsersForm;
