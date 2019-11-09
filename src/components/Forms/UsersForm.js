import React, {useEffect, useState} from 'react';
import {getData} from "../../db";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Card, makeStyles} from "@material-ui/core";
import CircularIndeterminate from "../components/CircularIndeterminate";

import TableSortMAK from "../components/TableSortMAK";
import {
    setPaths,
    clearForm,
    setFormData,
    setCRUDActionSelected,
    setCRUDActionNone
} from "../../redux/actions/dataActions";
import {connect} from "react-redux";


const useStyles = makeStyles(theme => ({
    card: {
        height: "100%"
    },
}));

const UsersForm = props => {
    const formPath = "/user";
    const dataPath = "/users";
    const formName = "Users";

    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [

        {
            name: "userName",
            caption: "User Name",
            align: "left",
            numeric: false
        },
        {
            name: "firstName",
            caption: "First Name",
            align: "left",
            numeric: false
        },
        {
            name: "lastName",
            caption: "Last Name",
            align: "left",
            numeric: false
        }
    ];

    useEffect(() => {
        //mount
        const asyncFunction = async () => {
            setLoading(true);
            const res = await getData(dataPath);
            if (res.error) {
                console.log(res.error);
                setLoading(false);
            } else {
                setUsers(res.data);
                setLoading(false);
            }
        };

        props.setCRUDActionNone();
        props.setPaths(formPath,dataPath);
        asyncFunction();
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        //unMount
        return () => {
            //            props.clearForm();        // Don't call if going to User by clickking the row
        }
        // eslint-disable-next-line
    }, []);

    const handleRowClick = (e, row) => {
        e.preventDefault();
        console.log(row);
        props.setCRUDActionSelected();

        props.setFormData(row);
        props.history.push(formPath);
    };

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h1">
                    {formName}
                </Typography>
                <TableSortMAK rows={users} columns={columns} dense={true} rowSize={10} handleRowClick={handleRowClick}/>
                {loading ? <CircularIndeterminate/> : null}
            </CardContent>
        </Card>
    )

        ;
};

function mapDispatchToProps() {
    return {
        setPaths,
        clearForm,
        setFormData,
        setCRUDActionSelected,
        setCRUDActionNone
    }
}

export default connect(null, mapDispatchToProps())(UsersForm);
