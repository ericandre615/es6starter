import React from 'react';
import { Link } from 'react-router-dom';

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="info">
          <h1>Info Section</h1>
          <ul>
            <li>React 15</li>
            <li>React Router 4</li>
            <li>ES2015</li>
            <li>Webpack</li>
          </ul>
      </section>
    );
  }
}

export default Info;
