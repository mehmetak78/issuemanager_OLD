import React, {useEffect, useState} from 'react';

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Card, makeStyles} from "@material-ui/core";
import CircularIndeterminate from "../components/CircularIndeterminate";

import TableSortMAK from "../components/TableSortMAK";

import {getData} from "../../db";
import {
    setPaths,
    clearForm,
    setFormData,
    setCRUDActionSelected,
    setCRUDActionNone
} from "../../redux/actions/dataActions";
import {
    setLoading,
    clearSearchText
} from "../../redux/actions/layoutActions";

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
        props.setCRUDActionNone();
        props.setPaths(formPath,dataPath);

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const asyncFunction = async () => {
            props.setLoading(true);
            const res = await getData(dataPath, props.searchText);
            if (res.error) {
                console.log(res.error);
            } else {
                setUsers(res.data);
            }

            props.setLoading(false);
        };

        props.setCRUDActionNone();
        props.setPaths(formPath,dataPath);
        asyncFunction();


        // eslint-disable-next-line
    }, [props.searchText]);

    useEffect(() => {
        return () => {
            console.log("props.clearSearchText();")
            props.clearSearchText();
            //            props.clearForm();        // Don't call if going to User by clickking the row

        }
        // eslint-disable-next-line
    }, []);

    const handleRowClick = (e, row) => {
        e.preventDefault();
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
                {props.loading ? <CircularIndeterminate/> : null}
            </CardContent>
        </Card>
    )
};

const mapStateToProps = state => (
    {
        loading: state.layout.loading,
        searchText: state.layout.searchText,
    }
);

function mapDispatchToProps() {
    return {
        setLoading,
        setPaths,
        clearForm,
        setFormData,
        clearSearchText,
        setCRUDActionSelected,
        setCRUDActionNone
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(UsersForm);
