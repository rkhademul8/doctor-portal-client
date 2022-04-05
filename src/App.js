
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
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';



function App() {
  return (
    <div className="App">

    <AuthProvider>

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

          <Route path="/register">
           <Register />
          </Route>

        

          
        </Switch>
     </Router>


    </AuthProvider>
    </div>
  );
}

export default App;
