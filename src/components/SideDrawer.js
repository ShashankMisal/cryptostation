import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Homepage from "./Homepage";


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    contentPage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "Center",
    },
    menuButton: {
        position: "absolute",
        top: "20px",
        left: "40px"
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        // necessary for content to be below app bar
        justifyContent: 'center',
    },
    content: {
        flexGrow: 1,
        transition: theme?.transitions?.create('margin', {
            easing: theme?.transitions.easing.sharp,
            duration: theme?.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme?.transitions?.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function SideDrawer() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const linkStyle = {
        textDecoration: "none",
        color: "black",
    }
    const listItemStyle = {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }

    return (
        <div className={classes.root}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader} style={{ backgroundColor: "rgb(7 0 32)", color: "white" }}>

                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon style={{ color: "white" }} />
                    </IconButton>
                </div>
                <List>

                    <Link to={`/`} style={linkStyle}>
                        <ListItem style={listItemStyle} button>
                            <ListItemIcon><HomeIcon /> </ListItemIcon>
                            <ListItemText primary="HOME" />
                        </ListItem>
                    </Link>

                    <Link to={`/cryptocurrencies`} style={linkStyle}>
                        <ListItem style={listItemStyle} button>
                            <ListItemIcon><LocalAtmIcon /> </ListItemIcon>
                            <ListItemText primary="CryptoCurrencies" />
                        </ListItem>
                    </Link>

                    <Link to={`/exchanges`} style={linkStyle}>
                        <ListItem style={listItemStyle} button >
                            <ListItemIcon><AccountBalanceIcon /> </ListItemIcon>
                            <ListItemText primary="Exchanges" />
                        </ListItem>
                    </Link>

                    <Link to={`/news`} style={linkStyle}>
                        <ListItem style={listItemStyle} button>
                            <ListItemIcon><LiveTvIcon /> </ListItemIcon>
                            <ListItemText primary="Crypto News" />
                        </ListItem>
                    </Link>
                </List>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >


                <div className={classes.contentPage}>


                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/exchanges">
                            {/* <Exchanges /> */}
                        </Route>
                        <Route exact path="/cryptocurrencies">
                            {/* <Cryptocurrencies /> */}
                        </Route>
                        <Route exact path="/crypto/:coinId">
                            {/* <CryptoDetails /> */}
                        </Route>
                        <Route exact path="/news">
                            {/* <News /> */}
                        </Route>
                    </Switch>

                </div>
            </main>
        </div>
    );
}
