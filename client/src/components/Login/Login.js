import React, { Component } from 'react';
import './styleLogin.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  async componentDidMount() {
    // any data fetching from the db should be done here
    // const { data } = await axios.get('some/api/route');
    // this.setState({ issues: data.issues })

  }

  onChangeHandler = event => {
    console.log(event.target.name);
    const { name } = event.target;
    if (name === 'email') {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }

    // this.setState({ ...this.state, [name]: event.target.value })
  };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log(this.state);

    // axios post with state data
  };

  render() {
    return (
      <div className="login-clean">
        <form onSubmit={this.onSubmitHandler}>
          <h2 className="sr-only">Login Form</h2>
          {/* <div className="illustration">
            <i className="icon ion-ios-navigate" />
          </div> */}
          <div className="form-group1">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onChangeHandler}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChangeHandler}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div>
          <a className="forgot" href="#">
            Forgot your email or password?
          </a>
        </form>
      </div>
    );
  }
}
