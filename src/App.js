import NavTabs from "./components/NavTabs";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage";
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'
import { CssBaseline } from "@mui/material";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <NavTabs />
        <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/exchanges">
          {/* <Exchanges /> */}
        </Route>
        <Route path="/cryptocurrencies">
            <Cryptocurrencies />
        </Route>
        <Route path="/crypto/:coinId">
          {/* <CryptoDetails /> */}
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
