import React from 'react';
import AppBar from './common/appBar'


class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  dashboard = () => {
    return (
      <div className='d-flex'>
        <AppBar />
      </div>
    )
  }

  render() {
    return (this.dashboard());
  }
}

export default Root;