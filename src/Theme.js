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
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                a: {
                    textDecoration: "none"
                }
            }
        }
    }
})

export default theme