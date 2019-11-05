import React, {Fragment, useState, useRef} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import {toggleLeftMenu} from "../../redux/actions/layoutActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


import IconHome from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';



const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    actionsText: {
        paddingLeft: theme.spacing(15),
        paddingRight: theme.spacing(1),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    navlink: {
        textDecoration: "none",
        color: "inherit"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));


const TopMenu = props => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [issueState, setIssueState] = useState("NO_ISSUE");
    const [searchEnabled, setSearchEnabled] = useState(true);


    const searchText = useRef('');

    const handleAddIssue = (e) => {
        e.preventDefault();
        setIssueState("INSERTING_ISSUE");
        setSearchEnabled(false);
    };
    const handleEditIssue = (e) => {
        e.preventDefault();
        setIssueState("EDITING_ISSUE");
        setSearchEnabled(false);
    };
    const handleSaveIssue = (e) => {
        e.preventDefault();
        setIssueState("FOUND_ISSUE");
        console.log(searchText.current.value);
        setSearchEnabled(true);
    };
    const handleCancelAddIssue = (e) => {
        e.preventDefault();
        setIssueState("NO_ISSUE");
        setSearchEnabled(true);
    };
    const handleCancelEditIssue = (e) => {
        e.preventDefault();
        setIssueState("FOUND_ISSUE");
        setSearchEnabled(true);
    };

    const handleSearchChange = (e) => {
        e.preventDefault();
        setIssueState("FOUND_ISSUE");
        setSearchEnabled(true);
    };


    const insertButtons = () => {

        // eslint-disable-next-line default-case
        switch (issueState) {
            case "NO_ISSUE":
                return (
                    <Fragment>
                        <IconButton color="inherit" onClick={handleAddIssue}>
                            <AddIcon/>
                        </IconButton>
                        <Typography>{issueState}</Typography>
                    </Fragment>
                );
            case "FOUND_ISSUE":
                return (
                    <Fragment>
                        <IconButton color="inherit" onClick={handleAddIssue}>
                            <AddIcon/>
                        </IconButton>
                        <IconButton color="inherit" onClick={handleEditIssue}>
                            <EditIcon/>
                        </IconButton>
                        <Typography>{issueState}</Typography>
                    </Fragment>
                );
            case "INSERTING_ISSUE":
                return (
                    <Fragment>
                        <IconButton color="inherit" onClick={handleSaveIssue}>
                            <SaveIcon/>
                        </IconButton>
                        <IconButton color="inherit" onClick={handleCancelAddIssue}>
                            <CancelIcon/>
                        </IconButton>
                        <Typography>{issueState}</Typography>
                    </Fragment>
                );
            case "EDITING_ISSUE":
                return (
                    <Fragment>
                        <IconButton color="inherit" onClick={handleSaveIssue}>
                            <SaveIcon/>
                        </IconButton>
                        <IconButton color="inherit" onClick={handleCancelEditIssue}>
                            <CancelIcon/>
                        </IconButton>
                        <Typography>{issueState}</Typography>
                    </Fragment>
                );
        }
    };


    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

            <List>
                <NavLink to="/settings" className={classes.navlink} >
                    <ListItem button key={"SettingsPage"} name={"SettingsPage"} onClick={handleMenuClose}>
                        <ListItemIcon><SettingsIcon color="primary"/></ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </NavLink>
                <NavLink to="/admin" className={classes.navlink} >
                    <ListItem button key={"AdminPage"} name={"AdminPage"} onClick={handleMenuClose}>
                        <ListItemIcon><SupervisorAccountIcon color="primary"/></ListItemIcon>
                        <ListItemText primary="Admin"/>
                    </ListItem>
                </NavLink>

            </List>

        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"

                    >
                        <NavLink to={"home"} className={classes.navlink} >
                            <IconHome/>
                        </NavLink>
                    </IconButton>

                    {insertButtons()}

                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            onChange={handleSearchChange}
                            placeholder="Search…"
                            disabled={!searchEnabled}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            inputRef={searchText}
                        />
                    </div>

                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};

TopMenu.propTypes = {
    toggleLeftMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => (
    {
        log: state.log
    }
);

function mapDispatchToProps() {
    return {toggleLeftMenu}
}

export default connect(mapStateToProps, mapDispatchToProps())(TopMenu);
