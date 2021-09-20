import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

class InventoryElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('inventory-element', InventoryElement);
