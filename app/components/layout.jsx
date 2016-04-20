import React from 'react';
import { connect } from 'react-redux';

import './layout.less';

const Layout = React.createClass({
  render() {
    return (
      <div id="layout"> 
        { this.props.children }
      </div>
    );
  }
});

export default Layout
