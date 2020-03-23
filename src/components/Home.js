import React, { Component } from 'react';
import Jumbotron from './UI/Jumbotron';

class Home extends Component {
  render() {
    return(
      <main role="main" className="mainContainer homeContainer">
        <Jumbotron {...this.props}/>
      </main>
    )
  }
}

export default Home;