import React from 'react';
import NavBarIndex from './components/NavBar/NavBarIndex';
import './App.css';
import Registration from './components/Registration/Registration';
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
        <h1 className="headz">Test</h1>
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
