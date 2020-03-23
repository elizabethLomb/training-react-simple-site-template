import React from 'react';
import Jumbotron from './UI/Jumbotron';

const Accesories = (props) => {
  return(
    <main role="main" className="mainContainer accesoriesContainer">
      <Jumbotron {...props}/>
    </main>
  )
}

export default Accesories;