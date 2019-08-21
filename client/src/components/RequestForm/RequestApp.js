import React, { Component } from 'react';
import './styleReq.css';

export default class RequestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1_category: '',
      item1: '',
      item2_category: '',
      item2: '',
      item3_category: '',
      item3: '',
      item4_category: '',
      item4: '',
      closeup_image: '',
      zoom_out_image: '',
      closeup_image2: '',
      zoom_out_image2: '',
      zoom_out_image3: '',
      zoom_out_image4: ''
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
          <h2>Maintenance Req Form</h2>
          {/* <div>Name Address Unit</div> */}
          <div className="form-group">
            <select
              className="form-control4"
              name="item1_category"
              onChange={this.onChangeHandler}
              value={this.state.item1_category}
            >
              <option value="">Category</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electric">Electric</option>
              <option value="Patch-and-paint">Patch/Paint</option>
              <option value="Exterminator">Exterminator</option>
              <option value="Locksmith">Locksmith</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Landscaping-Tree-Trimming">Trim Trees</option>
            </select>
            <input
              className="form-control2"
              type="text"
              name="item1"
              placeholder="Issue #1"
              onChange={this.onChangeHandler}
              value={this.state.item1}
            />
            {/* </div>
          <div className="form-group"> */}
            <select
              className="form-control4"
              name="item2_category"
              onChange={this.onChangeHandler}
              value={this.state.item2_category}
            >
              <option value="">Category</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electric">Electric</option>
              <option value="Patch-and-paint">Patch/Paint</option>
              <option value="Exterminator">Exterminator</option>
              <option value="Locksmith">Locksmith</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Landscaping-Tree-Trimming">Trim Trees</option>
            </select>
            <input
              className="form-control2"
              type="text"
              name="item2"
              placeholder="Issue #2"
              onChange={this.onChangeHandler}
              value={this.state.item2}
            />
            <div className="form-group">
              <select
                className="form-control4"
                name="item3_category"
                onChange={this.onChangeHandler}
                value={this.state.item3_category}
              >
                <option value="">Category</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electric">Electric</option>
                <option value="Patch-and-paint">Patch/Paint</option>
                <option value="Exterminator">Exterminator</option>
                <option value="Locksmith">Locksmith</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Landscaping-Tree-Trimming">Trim Trees</option>
              </select>
              <input
                className="form-control2"
                type="text"
                name="item3"
                placeholder="Issue #3"
                onChange={this.onChangeHandler}
                value={this.state.item3}
              />
              {/* </div>
            <div className="form-group"> */}
              <select
                className="form-control4"
                name="item4_category"
                onChange={this.onChangeHandler}
                value={this.state.item4_category}
              >
                <option value="">Category</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electric">Electric</option>
                <option value="Patch-and-paint">Patch/Paint</option>
                <option value="Exterminator">Exterminator</option>
                <option value="Locksmith">Locksmith</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Landscaping-Tree-Trimming">Trim Trees</option>
              </select>
              <input
                className="form-control2"
                type="text"
                name="item4"
                placeholder="Issue #4"
                onChange={this.onChangeHandler}
                value={this.state.item4}
              />
            </div>
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
            <div className="input-group mb-3">
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
            </div>
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
