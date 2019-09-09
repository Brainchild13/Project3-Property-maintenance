import React, { Component } from 'react';
import axios from 'axios';
import './styleAdminPage.css';
import { isNull } from 'util';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issuesFromDB: []
    };
  }

  componentDidMount() {
    // any data fetching from the db should be done here
    // const { data } = await axios.get('some/api/route');
    // this.setState({ issues: data.issues })

    const fetchIssues = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/requests/');

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

  render() {
    return (
      <div className="admin-form">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Admin Page</h2>
          <div className="row header-underline">
            <div className="col-sm-6 header-maint-man">Maintenance Man</div>
            <div className="col-sm-3 header-clean-rating">Clean Rating</div>
            <div className="col-sm-3 header-work-rating">Work Rating</div>
          </div>

          {this.state.issuesFromDB.length > 0 &&
            this.state.issuesFromDB.map(issue => {
              return (
                <div>
                  <div className="row">
                    <div className="col-sm-6 assignedto">
                      {issue.assigned_to}
                    </div>
                    <div className="col-sm-3 clean-rating">
                      {issue.manager_cleanliness_rating}
                    </div>
                    <div className="col-sm-3 work-rating">
                      {issue.manager_work_rating}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">WO# {issue.issue_number}</div>
                    <div className="col-sm-7"></div>
                  </div>
                  <div>{issue.item1}</div>
                  <div>{issue.item2}</div>
                  <div>{issue.item3}</div>
                  <div>{issue.item4}</div>
                  <hr />
                </div>
              );
            })}
        </form>
      </div>
    );
  }
}
