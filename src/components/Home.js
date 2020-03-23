import React from 'react';
import Jumbotron from './UI/Jumbotron';

const Home = (props) => {
  return(
    <main role="main" className="mainContainer homeContainer">
      <Jumbotron {...props}/>
    </main>
  )
}

export default Home;