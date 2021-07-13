import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LibRegistration from './LibRegistration';
import StudRegistration from './StudRegistration';
import Librarian from './Librarian';
import Student from './Student';
import LibLogin from './LibLogin';
import StudLogin from './StudLogin';
import LibDashboard from './LibDashboard';
import AddBooks from './AddBooks';
import DeleteBooks from './DeleteBooks';
import UpdateBooks from './UpdateBooks';
import IssuedbyStudents from './IssuedbyStudents';
import DisplayBooks from './DisplayBooks';
function App() {
  return (
    
    <Router>
      <div className="App">
        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Librarian">
              <Librarian />
            </Route>
            <Route exact path="/Student">
              <Student />
            </Route>
            <Route exact path="/LibRegistration">
              <LibRegistration/>
            </Route>
            <Route exact path="/StudRegistration">
              <StudRegistration />
            </Route>
            <Route exact path="/LibLogin">
              <LibLogin/>
            </Route>
            <Route exact path="/StudLogin">
              <StudLogin />
            </Route>
            <Route exact path="/LibDashboard">
              <LibDashboard />
            </Route>
            <Route exact path="/AddBooks">
              <AddBooks />
            </Route>
            <Route exact path="/DeleteBooks">
              <DeleteBooks />
            </Route>
            <Route exact path="/UpdateBooks">
              <UpdateBooks />
            </Route>
            <Route exact path="/StudentBooks">
              < IssuedbyStudents/>
            </Route>
            <Route exact path="/DisplayBooks">
              < DisplayBooks/>
            </Route>
            
            
            {/*<Route path="*">
              <NotFound />
            </Route>*/}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;