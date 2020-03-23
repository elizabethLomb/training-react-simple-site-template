import React from 'react';
import Jumbotron from './UI/Jumbotron';

const Moldes = (props) => {
  return(
    <main role="main" className="mainContainer modelsContainer">
      <Jumbotron {...props}/>
    </main>
  )
}

export default Moldes;