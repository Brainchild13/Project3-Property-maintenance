import React, { Component } from 'react';
import './styleReg.css';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      user_email: '',
      password: '',
      tenant_location: '',
      tenant_unit_number: ''
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
      // function Registration(props) {
      //   return (
      <div className="sign-up">
        <div class="form-container">
          {/* <div class="image-holder" /> */}
          <form method="post">
            <h2 class="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div class="form-group1">
              <input
                class="form-control2"
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={this.onChangeHandler}
                value={this.state.first_name}
              />
              <input
                class="form-control2"
                type="text"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <div class="form-group1">
              <select class="form-control3" name="tenant_location">
                <option value="">Select Address</option>
                <option value="1717 E Walnut Ave">
                  1717 E Walnut Ave., El Segundo CA 90066
                </option>
                <option value="8000 Westwood Blvd., Westwood CA 90046">
                  8000 Westwood Blvd., Westwood CA 90046
                </option>
                <option value="2424 Wilshire Bl, Century City CA 90088">
                  2424 Wilshire Bl, Century City CA 90088
                </option>
                <option value="2500 Sawtelle Bl, Santa Moinca CA 90044">
                  2500 Sawtelle Bl, Santa Moinca CA 90044
                </option>
              </select>
              <input
                class="form-control4"
                type="text"
                name="tenant_unit_number"
                placeholder="Unit #"
                onChange={this.onChangeHandler}
                value={this.state.tenant_unit_number}
              />
            </div>
            {/* <div class="form-group1">
            <input
              class="form-control4"
              type="tenant_unit_number"
              name="tenant_unit_number"
              placeholder="Unit #"
            />
          </div> */}
            <div class="form-group1">
              <input
                class="form-control"
                type="text"
                name="user_email"
                placeholder="Email"
                onChange={this.onChangeHandler}
                value={this.state.user_email}
              />
            </div>
            <div class="form-group1">
              <input
                class="form-control"
                type="text"
                name="password"
                placeholder="Password"
                onChange={this.onChangeHandler}
                value={this.state.password}
              />
            </div>
            <div class="form-group1">
              <input
                class="form-control"
                type="text"
                name="password-repeat"
                placeholder="Password (repeat)"
              />
            </div>
            <div class="form-group1">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" />I agree to
                  the license terms.
                </label>
              </div>
            </div>
            <div class="form-group1">
              <button class="btn btn-primary btn-block" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// export default Registration;
