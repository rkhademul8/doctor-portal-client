
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Pages/Login/Login/Login';



function App() {
  return (
    <div className="App">

     <Router>
     <Switch>
     <Route exact path="/">
             <Home />
            </Route>
            
     <Route path="/appoinment">
           <Appoinment />
          </Route>

          <Route path="/home">
           <Home />
          </Route>

          <Route path="/login">
           <Login />
          </Route>

        

          
        </Switch>
     </Router>

    </div>
  );
}

export default App;
