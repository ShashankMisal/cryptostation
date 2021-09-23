import * as React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    navBtns: {
        padding: theme.spacing(1.5),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}))


export default function NavTabs() {

    const classes = useStyles();

    const linkStyle = {
        textDecoration: "none",
        color: "black",
    }

    const activeNavStyle = {
        color: "white",
        backgroundColor: "#2e3809",
        borderRadius: "16px",
        padding:"4px"
    }


    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ overflowX: "auto" }}
            p={1.5}
            sx={{ width: '100%', bgcolor: 'background.paper' }}>

            <NavLink exact to={`/`} style={linkStyle} activeStyle={activeNavStyle}>
                <span className={classes.navBtns}>Home</span>
            </NavLink>

            <NavLink to={`/cryptocurrencies`} style={linkStyle} activeStyle={activeNavStyle}>
                <span className={classes.navBtns}>CryptoCurrencies</span>
            </NavLink>

            <NavLink to={`/news`} style={linkStyle} activeStyle={activeNavStyle}>
                <span className={classes.navBtns}>CryptoNews</span>
            </NavLink>



        </Box>
    );
}