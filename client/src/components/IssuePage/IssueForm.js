import React, { Component } from 'react';
import axios from 'axios';
import './styleIssue.css';
// import { URL } from '../config/env'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // closeup_image: '',
      completion_image_closeup_image: '',
      completion_image_zoom_out: '',
      zoom_out_image: '',
      //needed to this to issue
      issue_number: '',
      //No sure if this is the place the info gets added
      tenant_comment: '',
      tenant_work_rating: '',
      tenant_cleanliness_rating: '',
      manager_comment: '',
      manager_work_rating: '',
      manager_cleanliness_rating: '',
      date_approved: '',
      completion_date: '',
      assigned_to: '',
      showForm: true,
      issuesFromDB: []
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    // any data fetching from the db should be done here
    // const { data } = await axios.get('some/api/route');
    // this.setState({ issues: data.issues })

    const fetchIssues = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/issues');

        if (data) {
          console.log(data);
          this.setState({ issuesFromDB: data });
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchIssues();
  }

  onChangeHandler = event => {
    console.log(event.target.name);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = async event => {
    event.preventDefault();
    console.log(this.state);

    try {
      const {
        assigned_to,
        date_approved,
        tenant_comment,
        tenant_work_rating,
        tenant_cleanliness_rating,
        issue_number,
        manager_comment,
        manager_work_rating,
        manager_cleanliness_rating,
        completion_date
      } = this.state;

      const { data, status } = await axios.post(
        'http://localhost:8080/api/requests',
        {
          assigned_to,
          date_approved,
          tenant_comment,
          tenant_cleanliness_rating,
          tenant_work_rating,
          issue_number,
          manager_comment,
          manager_work_rating,
          manager_cleanliness_rating,
          completion_date
        }
      );

      if (status === 200) {
        this.setState({ showForm: false });
        // Route to a different page
        // hide the form and show that tennent data
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="issue-form">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Issue Form</h2>
          <div className="form-group">
            <input
              className="form-control5"
              type="text"
              name="issue_number"
              placeholder="Issue #"
              onChange={this.onChangeHandler}
              value={this.state.issue_number}
            />
            <select
              className="form-control6"
              name="assigned_to"
              onChange={this.onChangeHandler}
              value={this.state.assigned_to}
            >
              <option value="">Maint Man</option>
              <option value="Tom Jones">Tom Jones</option>
              <option value="Rick Berry">Rick Berry</option>
              <option value="Michael Jackson">Michael Jackson</option>
              <option value="Elvis Presley">Elvis Presley</option>
              <option value="Billy Joel">Billy Joel</option>
              <option value="Herbie Hancock">Herbie Hancock</option>
              <option value="Masta Ace">Masta Ace</option>
            </select>
            <input
              className="form-control7"
              type="date"
              name="date_approved"
              placeholder="Date Assigned"
              onChange={this.onChangeHandler}
              value={this.state.date_approved}
            />
          </div>
          Jack Jones (tenant)
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unit#
          5
          <br />
          12517 Greene Ave., Los Angeles, CA 90064
          {this.state.issuesFromDB.length > 0 &&
            this.state.issuesFromDB.map(issue => {
              return (
                <div className="issues">
                  Issue #{issue.id} {issue.issue_name}
                </div>
              );
            })}
          <br />
          {this.state.showForm ? (
            <div className="form-group">
              <b>Tenant Comment</b>
              {/* <br /> */}
              <input
                className="form-control"
                type="text"
                name="tenant_comment"
                placeholder="Tenant Comment Here"
                onChange={this.onChangeHandler}
                value={this.state.tenant_comment}
              />
              <select
                className="form-control4"
                name="tenant_work_rating"
                onChange={this.onChangeHandler}
                value={this.state.tenant_work_rating}
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
                value={this.state.tenant_cleanliness_rating}
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
          ) : (
            <h4>Your review has been submitted</h4>
          )}
          <div className="form-group">
            <b>Manager Comment</b>
            <input
              className="form-control"
              type="text"
              name="manager_comment"
              placeholder="Manager Comment Here"
              onChange={this.onChangeHandler}
              value={this.state.manager_comment}
            />
            <select
              className="form-control8"
              name="manager_work_rating"
              onChange={this.onChangeHandler}
              value={this.state.manager_work_rating}
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
              value={this.state.manager_cleanliness_rating}
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
              value={this.state.completion_date}
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
                  name="completion_image_closeup_image"
                  onChange={this.onChangeHandler}
                  value={this.state.completion_image_closeup_image}
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
                  name="completion_image_zoom_out"
                  onChange={this.onChangeHandler}
                  value={this.state.completion_image_zoom_out}
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
                  name="zoom_out_image"
                  onChange={this.onChangeHandler}
                  value={this.state.zoom_out_image}
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Select Zoom Out Image #3
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Submit Updates
            </button>
          </div>
        </form>
      </div>
    );
  }
}
