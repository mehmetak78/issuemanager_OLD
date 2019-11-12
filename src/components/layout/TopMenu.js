import React, {useRef} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


import HomeIcon from '@material-ui/icons/Home';
import BackIcon from '@material-ui/icons/ArrowBack';
import UpIcon from '@material-ui/icons/ArrowUpward';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import {
    setCRUDActionNone,
    setCRUDActionInserting,
    setCRUDActionSelected,
    insertData,
    updateData,
    deleteData,
    cancelInsert,
    cancelUpdate,
    setErrors,
    clearErrors
} from "../../redux/actions/dataActions";
import {
    setSearchText
} from "../../redux/actions/layoutActions";
import {
    CRUD_NONE,
    CRUD_SELECTED, CRUD_UPDATE_EDITING, CRUD_INSERT_EDITING
} from '../../redux/actions/actionTypes';
import {validateForm} from "../../utils/validationUtil";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    crudButtons: {
        // border: "solid 2px gray"
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
        [theme.breakpoints.up('xs')]: {
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

//    const [searchEnabled, setSearchEnabled] = useState(true);


    const searchText = useRef('');

    const {
        setCRUDActionNone,
        insertData,
        updateData,
        deleteData,
        cancelInsert,
        cancelUpdate
    } = props;
    const {formData, formPath, upFormPath, dataPath} = props.data;

    const handleBack = (e) => {
        setCRUDActionNone();
        props.history.goBack();
    };

    const handleUpForm = (e) => {
        setCRUDActionNone();
        props.history.push(upFormPath);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setCRUDActionNone();
        props.history.push(formPath);

        //setSearchEnabled(false);
    };

    const handleSave = (e) => {
        e.preventDefault();

        const errors = validateForm(props.data.validations, formData);
        if (errors) {
            props.setErrors(errors);
        } else {
            if (props.data.formData.id) {
                updateData(formData, dataPath);
            } else {
                insertData(formData, dataPath);
            }
            //setSearchEnabled(true);
        }
    };
    const handleDelete = (e) => {
        e.preventDefault();
        deleteData(formData, dataPath);
        props.history.push(upFormPath);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        if (props.data.formData.id) {
            cancelUpdate();
        } else {
            cancelInsert();
        }
        //setSearchEnabled(true);
    };

    const handleSearchKeyPressed = (e) => {
        //   e.preventDefault();
        if (e.charCode === 13) { // enter key pressed
            e.preventDefault();
            props.setSearchText(searchText.current.value);
            props.history.push(upFormPath);
        }

    };

    const insertButtons = () => {
        const {crudState, formPath} = props.data;


        // eslint-disable-next-line default-case
        switch (crudState) {
            case CRUD_NONE:
                return (
                    formPath ?
                        <div className={classes.crudButtons}>
                            <IconButton color="inherit" onClick={handleAdd}>
                                <AddIcon/>
                            </IconButton>
                        </div>
                        : null
                );
            case CRUD_SELECTED:
                return (
                    formPath ?
                        <div className={classes.crudButtons}>
                            <IconButton color="inherit" onClick={handleAdd}>
                                <AddIcon/>
                            </IconButton>
                            <IconButton color="inherit" onClick={handleDelete}>
                                <DeleteIcon/>
                            </IconButton>
                        </div>
                        : null
                );
            case CRUD_UPDATE_EDITING:
            case CRUD_INSERT_EDITING:
                return (
                    <div className={classes.crudButtons}>
                        <IconButton color="inherit" onClick={handleSave}>
                            <SaveIcon/>
                        </IconButton>
                        <IconButton color="inherit" onClick={handleCancel}>
                            <CancelIcon/>
                        </IconButton>
                    </div>
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
                <NavLink to="/settings" className={classes.navlink}>
                    <ListItem button key={"SettingsPage"} name={"SettingsPage"} onClick={handleMenuClose}>
                        <ListItemIcon><SettingsIcon color="primary"/></ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </NavLink>
                <NavLink to="/admin" className={classes.navlink}>
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
                    <NavLink to={"home"} className={classes.navlink}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"

                        >
                            <HomeIcon/>
                        </IconButton>
                    </NavLink>

                    <IconButton color="inherit" onClick={handleBack}>
                        <BackIcon/>
                    </IconButton>
                    <IconButton color="inherit" onClick={handleUpForm}>
                        <UpIcon/>
                    </IconButton>


                    <div className={classes.grow}/>

                    {insertButtons()}

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            onKeyPress={handleSearchKeyPressed}
                            placeholder="Search…"
                            //disabled={!searchEnabled}
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
    data: PropTypes.object.isRequired,
    setCRUDActionNone: PropTypes.func.isRequired,
    setCRUDActionInserting: PropTypes.func.isRequired,
    setCRUDActionSelected: PropTypes.func.isRequired,
    insertData: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    cancelInsert: PropTypes.func.isRequired,
    cancelUpdate: PropTypes.func.isRequired,
    setErrors: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    setSearchText: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
    {
        data: state.data
    }
);

function mapDispatchToProps() {
    return {
        setCRUDActionNone,
        setCRUDActionInserting,
        setCRUDActionSelected,
        insertData,
        updateData,
        deleteData,
        cancelInsert,
        cancelUpdate,
        setErrors,
        clearErrors,
        setSearchText
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(TopMenu));
