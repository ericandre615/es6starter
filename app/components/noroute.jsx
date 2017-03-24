import React from 'react';

class NoRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Route not found</p>
      </div>
    );
  }
}

export default NoRoute
