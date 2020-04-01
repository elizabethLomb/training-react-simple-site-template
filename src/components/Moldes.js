import React from 'react';
import Jumbotron from './UI/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import Footer from '../misc/Footer';

const Moldes = (props) => {
  return(
    <div>
      <main role="main" className="mainContainer modelsContainer">
        <Jumbotron {...props}/>
      
        <section className="innerSection firstSection pt-4">
          <div className="container text-center pt-4">
            <h2 className="display-3 pt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo. </p>
            <p></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut.</p>
          </div>
        </section>

        <section className="innerSection">
          <div className="container">
            <hr className="featurette-divider" />

            <h2 className="display-5 pt-4 mb-3 font-weight-bolder text-uppercase">
              <FontAwesomeIcon icon={faCheckDouble} />
              Pellentesque habitant
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo. Ut blandit sodales ultrices. Nunc sodales facilisis erat vitae varius. Fusce ac magna feugiat, lacinia magna nec, tempor massa.</p>
          </div>
        </section>

        <section className="innerSection">
          <div className="container">
            <hr className="featurette-divider" />

            <h2 className="display-5 pt-4 mb-3 font-weight-bolder text-uppercase">
              <FontAwesomeIcon icon={faCheckDouble} />
              Pellentesque habitant
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo. Ut blandit sodales ultrices. Nunc sodales facilisis erat vitae varius. Fusce ac magna feugiat, lacinia magna nec, tempor massa.</p>
          </div>
        </section>

        <section className="innerSection">
          <div className="container">
            <hr className="featurette-divider" />

            <h2 className="display-5 pt-4 mb-3 font-weight-bolder text-uppercase">
              <FontAwesomeIcon icon={faCheckDouble} />
              Pellentesque habitant
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo. Ut blandit sodales ultrices. Nunc sodales facilisis erat vitae varius. Fusce ac magna feugiat, lacinia magna nec, tempor massa.</p>
          </div>
        </section>

      </main>

      <Footer/>
    </div>
  )
}

export default Moldes;