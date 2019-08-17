import React from 'react';
import NavBarIndex from './components/NavBar/NavBarIndex';
import './App.css';
import Registration from './components/Registration/Registration';
import RequestApp from './components/RequestForm/RequestApp';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Discover from './pages/Discover';
// import About from './pages/About';
// import Search from './pages/Search';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    // <Router>
    <div>
      <NavBarIndex />
      <Wrapper>
        <center>
          <h1 className="headz">Request Form</h1>
        </center>
        <RequestApp />
        <center>
          <h1 className="headz">Login and Registration Forms</h1>
        </center>
        <Login />
        <Registration />
        {/* <Route exact path="/" component={About} /> */}
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/discover" component={Discover} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
      </Wrapper>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
