import React from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "30px",
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        maxWidth: 300
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchBar({setSearchTerm}) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>

            <InputBase
                className={classes.input}
                placeholder="Search Cryptocurrency......"
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />

            <Divider className={classes.divider} orientation="vertical" />

            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>

        </Paper>
    );
}