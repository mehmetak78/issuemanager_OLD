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
import FormMAK, {LOGIN_BUTTON, NO_BUTTON} from "../components/FormMAK";


const useStyles = makeStyles(theme => ({
    card: {
        height: "75%",
        width: "75%",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        textDecoration: "none",
        border: "1px solid #eaeaea",
        borderRadius: "10px",
        animation: `$cardAppear 1000ms ${theme.transitions.easing.easeInOut}`,
        "&:hover, &:focus, &:active": {
            borderColor: "#0070f3"
        }
    },
    "@keyframes cardAppear": {
        "0%": {
            opacity: 0,
            transform: "translateY(3rem)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
}));

const UsersForm = props => {
    const formPath = "/user";
    const upFormPath = null;
    const dataPath = "/users";
    const formName = "Users";

    const classes = useStyles();
    const [rows, setRows] = useState([]);

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
            const searchParam = `?q=${props.searchText}`;
            const res = await getData(dataPath, searchParam);
            if (res.error) {
                console.log(res.error);
            } else {
                setRows(res.data);
            }

            props.setLoading(false);
        };

        props.setCRUDActionNone();
        props.setPaths(formPath,upFormPath,dataPath);
        asyncFunction();


        // eslint-disable-next-line
    }, [props.searchText]);

    useEffect(() => {
        return () => {
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
      <FormMAK
        width={"50%"}
        height={"60%"}
        type={NO_BUTTON}
        label={formName}
        loading={props.loading}>
          <TableSortMAK rows={rows} columns={columns} dense={true} rowSize={10} handleRowClick={handleRowClick}/>
          {/*  <CardContent>
                <Typography variant="h1">
                    {formName}
                </Typography>
                <TableSortMAK rows={rows} columns={columns} dense={true} rowSize={10} handleRowClick={handleRowClick}/>
                {props.loading ? <CircularIndeterminate/> : null}
            </CardContent>*/}
        </FormMAK>
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
