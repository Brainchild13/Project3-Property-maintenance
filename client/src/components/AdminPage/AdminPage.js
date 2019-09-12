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
      <div className="admin-form form">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Admin Page</h2>
          <div className="row header-underline">
            <div className="header-maint-man">
              Maintenance
              <br /> Man
            </div>
            <div className="header-clean-rating">
              Clean
              <br />
              Rating
            </div>
            <div className="header-work-rating">
              Work
              <br />
              Rating
            </div>
          </div>

          {this.state.issuesFromDB.length > 0 &&
            this.state.issuesFromDB.map(issue => {
              return (
                <div>
                  <div className="row">
                    <div className="assignedto">{issue.assigned_to}</div>
                    <div className="clean-rating">
                      {issue.manager_cleanliness_rating}
                    </div>
                    <div className="work-rating">
                      {issue.manager_work_rating}
                    </div>
                  </div>
                  <div className="row">
                    <div className="workorder">WO# {issue.issue_number}</div>
                    <div className="items"></div>
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
