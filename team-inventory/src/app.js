import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './app.css';

class App extends React.Component {
  render() {
    const reactVersion = require('../package.json').dependencies['react'];

    return (
      <div className="content" role="main">
        <div className="card highlight-card card-small">

          <svg id="rocket" xmlns="http://www.w3.org/2000/svg" width="101.678" height="101.678" viewBox="0 0 101.678 101.678">
            <title>Rocket Ship</title>
            <g id="Group_83" data-name="Group 83" transform="translate(-141 -696)">
              <circle id="Ellipse_8" data-name="Ellipse 8" cx="50.839" cy="50.839" r="50.839" transform="translate(141 696)" fill="#dd0031"/>
              <g id="Group_47" data-name="Group 47" transform="translate(165.185 720.185)">
                <path id="Path_33" data-name="Path 33" d="M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z" transform="translate(0.371 3.363)" fill="#fff"/>
                <path id="Path_34" data-name="Path 34" d="M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z" transform="translate(0 0.005)" fill="#fff"/>
              </g>
            </g>
          </svg>

          <span>Team Inventory is running!</span>

          <svg id="rocket-smoke" xmlns="http://www.w3.org/2000/svg" width="516.119" height="1083.632" viewBox="0 0 516.119 1083.632">
            <title>Rocket Ship Smoke</title>
            <path id="Path_40" data-name="Path 40" d="M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z" transform="translate(-147.025 -140.939)" fill="#f5f5f5"/>
          </svg>

        </div>

        <h2>Resources</h2>
        <p>React version: {reactVersion}</p>
      </div>

    );
  }
}

class InventoryElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('inventory-element', InventoryElement);
