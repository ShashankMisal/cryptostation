import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        position: "relative",
        bottom: 0,
        width: "100%",
        maxWidth: "sm",
    },
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Typography variant="body2" style={{ padding: "8px 8px" }}>
                {"Copyright © by "}
                <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/shashank-misal-8018b419a/"
                >
                   cryptostation
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </div>
    );
}

export default Footer;