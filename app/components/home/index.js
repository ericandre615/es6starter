import React from 'react';
import { Link } from 'react-router-dom';

import './home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="home">
          <h1>{ this.props.message } Home Section</h1>
          <p>Lorem ipsum stuff</p>
          <Link to="/no-route">No Route</Link>
          <Link to="/info">Info</Link>
      </section>
    );
  }
}

Home.defaultProps = {
  message: 'Hello'
}

export default Home;
