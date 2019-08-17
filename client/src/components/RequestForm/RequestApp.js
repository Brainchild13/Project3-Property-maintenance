import React, { Component } from 'react';
import './styleReq.css';

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
      <div className="request-maintenance">
        <form onSubmit={this.onSubmitHandler}>
          <h2 className="sr-only">Maintenance Request Form</h2>
          <div class="form-group">
            <input
              className="form-control"
              type="item1"
              name="item1"
              placeholder="Issue #1"
            />
          </div>
          <div className="form-group">
            <input
              class="form-control"
              type="item2"
              name="item2"
              placeholder="Issue #2"
            />
            <div className="form-group">
              <input
                className="form-control"
                type="item3"
                name="item3"
                placeholder="Issue #3"
              />
            </div>
            <div className="form-group">
              <input
                class="form-control"
                type="item4"
                name="item4"
                placeholder="Issue #4"
              />
            </div>
            <div className="form-group">
              {/* <input
                class="form-control2"
                type="item4"
                name="item4"
                placeholder="Issue #4"
              /> */}
              <button className="btn2 btn-primary btn-block2" type="submit">
                Upload Zoomed In Image
              </button>
              <button className="btn2 btn-primary btn-block2" type="submit">
                Upload Additional Image
              </button>
              <button className="btn2 btn-primary btn-block2" type="submit">
                Upload Zoomed In Image
              </button>
              <button className="btn2 btn-primary btn-block2" type="submit">
                Upload Additional Image
              </button>
            </div>
            {/* <input
              class="form-control2"
              type="last_name"
              name="last_name"
              placeholder="Last Name"
            /> */}
          </div>
          {/* <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onChangeHandler}
              value={this.state.email}
            />
          </div> */}
          {/* <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChangeHandler}
              value={this.state.password}
            />
          </div> */}
          {/* <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div> */}
          {/* <a className="forgot" href="#">
            Forgot your email or password?
          </a> */}
        </form>
      </div>
    );
  }
}
