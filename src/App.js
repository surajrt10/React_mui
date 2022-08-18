import './App.css';
import Counter from './Counter';
// import Nav from './Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import List from './List';
import Aboutus from './Aboutus';
import { MaterialUI } from './MaterialUI';
import { Paper } from '@mui/material';
import { Navbar2 } from './Navbar2';
function App() {
  
  return (
    <Router>
      <div className='App'>

    <Paper sx={{padding:"10px",minHeight:"573px"}} elevation={4}>
        <Navbar2/>
        <div>
        <Switch className='content'>
          <Route exact path='/counter'>
          <Counter/>
          </Route>
          <Route exact path='/list'>
          <List/>
          </Route>
          <Route exact path='/Aboutus'>
          <Aboutus/>
          </Route>
          <Route exact path='/MaterialUI'>
          <MaterialUI/>
          </Route>
          <Route  path='/'>
            <Home/>
            </Route> 


        </Switch>
      </div>
    </Paper>
      </div>
    </Router>
  );
}

export default App;
