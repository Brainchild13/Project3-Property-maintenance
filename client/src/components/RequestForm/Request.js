import React from 'react';
import './styleRequest.css';

function Request(props) {
  return (
    <div className="sign-up">
      <div class="form-container">
        <div class="image-holder" />
        <form method="post">
          <h2 class="text-center">
            <strong>Maintenance Request</strong>
          </h2>
          <div class="form-group">
            <input
              class="form-control2"
              type="first_name"
              name="first_name"
              placeholder="first_name"
            />
            <input
              class="form-control2"
              type="last_name"
              name="last_name"
              placeholder="Last Name"
            />
          </div>
          <div class="form-group">
            <select class="form-control3" name="user_address">
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
              type="tenant_unit_number"
              name="tenant_unit_number"
              placeholder="Unit #"
            />
          </div>
          {/* <div class="form-group">
            <input
              class="form-control4"
              type="tenant_unit_number"
              name="tenant_unit_number"
              placeholder="Unit #"
            />
          </div> */}
          <div class="form-group">
            <input
              class="form-control"
              type="user_email"
              name="user_email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              name="password-repeat"
              placeholder="Password (repeat)"
            />
          </div>
          <div class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" />I agree to the
                license terms.
              </label>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Request;
