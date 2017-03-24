import React from 'react';
import { connect } from 'react-redux';

import './layout.less';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="layout">
        { this.props.children }
      </div>
    );
  }
}

export default Layout
