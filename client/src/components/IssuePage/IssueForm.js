import React, { Component } from 'react';
import './styleIssue.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue_name: '',
      issue_description: '',
      issue_category: '',
      cost: '',
      closeup_image: '',
      zoom_out_image: '',
      completion_image_closeup_image: '',
      completion_image_zoom_out: '',
      //needed to this to issue
      issue_number: '',
      //No sure if this is the place the info gets added
      tenant_comment: '',
      tenant_work_rating: '',
      tenant_cleanliness_rating: '',
      manager_comment: '',
      manager_work_rating: '',
      manager_cleanliness_rating: '',
      completion_date: ''
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
      <div className="issue-form">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Issue Form</h2>
          Tenant Name
          here&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unit#
          <br />
          1213 Venice Blvd., Los Angeles CA 90066
          <div className="form-group">
            <input
              className="form-control5"
              type="text"
              name="item1"
              placeholder="Issue #"
              onChange={this.onChangeHandler}
              value={this.state.item1}
            />
            <select
              className="form-control6"
              name="item1_category"
              onChange={this.onChangeHandler}
              value={this.state.item1_category}
            >
              <option value="">Maint Man</option>
              <option value="Plumbing">Tom Jones</option>
              <option value="Electric">Rick Berry</option>
              <option value="Patch-and-paint">Michael Jackson</option>
              <option value="Exterminator">Elvis Presley</option>
              <option value="Locksmith">Billy Joel</option>
              <option value="Cleaning">Herbie Hancock</option>
              <option value="Landscaping-Tree-Trimming">Masta Ace</option>
            </select>
            <input
              className="form-control7"
              type="date"
              name="item1"
              placeholder="Date Assigned"
              onChange={this.onChangeHandler}
              value={this.state.item1}
            />
          </div>
          Issue #1 feeds in here
          <br />
          Issue #2 feeds in here
          <br />
          Issue #3 feeds in here
          <br />
          Issue #4 feeds in here
          <br />
          <div className="form-group">
            <b>Tenant Comment</b>
            {/* <br /> */}
            <input
              className="form-control"
              type="text"
              name="tenant_comment"
              placeholder="Tenant Comment Here"
              onChange={this.onChangeHandler}
              value={this.state.item1}
            />
            <select
              className="form-control4"
              name="tenant_work_rating"
              onChange={this.onChangeHandler}
              value={this.state.item1_category}
            >
              <option value="">Work Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select
              className="form-control4"
              name="tenant_cleanliness_rating"
              onChange={this.onChangeHandler}
              value={this.state.item1_category}
            >
              <option value="">Cleanliness Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button className="btn btn-primary btn-block" type="submit">
              Submit Request
            </button>
          </div>
          <div className="form-group">
            <b>Manager Comment</b>
            <input
              className="form-control"
              type="text"
              name="manager_comment"
              placeholder="Manager Comment Here"
              onChange={this.onChangeHandler}
              value={this.state.item1}
            />
            <select
              className="form-control8"
              name="manager_work_rating"
              onChange={this.onChangeHandler}
              value={this.state.item1_category}
            >
              <option value="">Work Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select
              className="form-control9"
              name="manager_cleanliness_rating"
              onChange={this.onChangeHandler}
              value={this.state.item1_category}
            >
              <option value="">Clean Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <input
              className="form-control10"
              type="date"
              name="completion_date"
              placeholder="Date Completed"
              onChange={this.onChangeHandler}
              value={this.state.item1}
            />
          </div>
          <div className="form-group">
            {/* THESE ARE THE UPLOAD IMAGE BUTTONS */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  name="closeup_image"
                  onChange={this.onChangeHandler}
                  value={this.state.closeup_image}
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Select Close Up Image #1
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  name="zoom_out_image"
                  onChange={this.onChangeHandler}
                  value={this.state.zoom_out_image}
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Select Zoom Out Image #2
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  name="closeup_image2"
                  onChange={this.onChangeHandler}
                  value={this.state.closeup_image2}
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Select Zoom Out Image #3
                </label>
              </div>
            </div>
            {/* <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  name="zoom_out_image2"
                  onChange={this.onChangeHandler}
                  value={this.state.zoom_out_image2}
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Select Zoom Out Image #4
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  name="zoom_out_image3"
                  onChange={this.onChangeHandler}
                  value={this.state.zoom_out_image3}
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Select Zoom Out Image #5
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  name="zoom_out_image4"
                  onChange={this.onChangeHandler}
                  value={this.state.zoom_out_image4}
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Select Zoom Out Image #6
                </label>
              </div>
            </div> */}
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    );
  }
}
