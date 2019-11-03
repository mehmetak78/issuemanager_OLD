import React, {useEffect} from 'react';

import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconHome from '@material-ui/icons/Home';
import IconPersonAdd from '@material-ui/icons/PersonAdd';


import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
     //   marginTop: "10px",

    },
    navlink: {
        textDecoration: "none",
        color: theme.palette.text.primary
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',

    },
    drawerOpen: {
        position: "relative",
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        position: "relative",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },

}));

const LeftMenu = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const {leftMenuCollapsed} = props.layout;


    useEffect(() => {
        if (leftMenuCollapsed) {
            handleDrawerClose();
        } else {
            handleDrawerOpen();
        }
    }, [leftMenuCollapsed]);

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                                    [classes.drawerOpen]: open,
                                    [classes.drawerClose]: !open,
                                }),
                }}
                open={open}
            >
                <List>
                    <NavLink to="/home" className={classes.navlink}  >
                        <ListItem button key={"FirstPage"} name={"FirstPage"}>
                            <ListItemIcon><IconHome color="primary"/></ListItemIcon>
                            <ListItemText primary="Ana Sayfa"/>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/addUser"  className={classes.navlink}>
                        <ListItem button key={"SecondPage"}>
                            <ListItemIcon><IconPersonAdd color="primary"/></ListItemIcon>
                            <ListItemText primary="Kullanıcı Ekle"/>
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
        </div>
    );
};

LeftMenu.propTypes = {};

const mapStateToProps = state => (
    {
        layout: state.layout
    }
);

export default connect(mapStateToProps, null)(LeftMenu);
