import "./App.css";
import Counter from "./Counter";
// import Nav from './Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Nlist from "./Nlist";
import Aboutus from "./Aboutus";
import { MaterialUI } from "./MaterialUI";
import { Paper } from "@mui/material";
import { Navbar2 } from "./Navbar2";
import { Fetchapi } from "./Fetchapi";
function App() {
  return (
    <Router>
      <div className="App">
        <Paper sx={{ padding: "10px", minHeight: "573px" }} elevation={4}>
          <Navbar2 />
          <div>
            <Switch className="content">
              <Route exact path="/counter">
                <Counter />
              </Route>
              <Route exact path="/Nlist">
                <Nlist />
              </Route>
              <Route exact path="/Aboutus">
                <Aboutus />
              </Route>
              <Route exact path="/MaterialUI">
                <MaterialUI />
              </Route>
              <Route exact path="/Fetchapi">
                <Fetchapi />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          {/* <Nav/> */}
        </Paper>
      </div>
    </Router>
  );
}

export default App;
