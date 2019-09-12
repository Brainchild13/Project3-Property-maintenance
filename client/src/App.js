import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarIndex from './components/NavBar/NavBarIndex';
import './App.css';
import Registration from './components/Registration/Registration';
import RequestApp from './components/RequestForm/RequestApp';
import IssueForm from './components/IssuePage/IssueForm';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import AdminPage from './components/AdminPage/AdminPage';
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
        <Route exact path="/AdminPage" component={AdminPage} />
        {/* <Route exact path="/LoginReg" component={LoginReg} /> */}
      </Router>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
