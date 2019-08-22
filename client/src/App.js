import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarIndex from './components/NavBar/NavBarIndex';
import './App.css';
import Registration from './components/Registration/Registration';
import RequestApp from './components/RequestForm/RequestApp';
import IssueForm from './components/IssuePage/IssueForm';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
// import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    // <Router>
    <div>
      <Router>
        <NavBarIndex />
        <Route exact path="/" component={Login} />
        <Route exact path="/Registration" component={Registration} />
        <Route exact path="/Request" component={RequestApp} />
        <Route exact path="/Issue" component={IssueForm} />
        {/* <Route exact path="/Supervisor" component={Supervisor} /> */}
      </Router>
      {/* <NavBarIndex />
      <Wrapper>
        <center>
          <h1 className="headz">Issue Page</h1>
        </center>
        <IssueForm />
        <center>
          <h1 className="headz">Request Form</h1>
        </center>
        <RequestApp />
        <center>
          <h1 className="headz">Login and Registration Forms</h1>
        </center>

        <Login />
        <Registration />
      </Wrapper> */}
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
