import NavTabs from "./components/NavTabs";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage";
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <Container className="App">
      <ThemeProvider theme={theme}>
          <NavTabs />
        <CssBaseline />
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
      </ThemeProvider>
    </Container>
  );
}

export default App;
