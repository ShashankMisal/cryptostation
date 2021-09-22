import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#2e3809",
        },
        secondary: {
            main: "#EA6F66",
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                img: {
                    maxWidth: "100%",
                    height: "auto"
                },
                a: {
                    textDecoration: "none"
                }
            }
        }
    }
})

export default theme