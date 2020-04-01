import React from 'react';
import Footer from '../misc/Footer';
import CardIcon from './UI/CardIcon';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return(
    <div>
      <main role="main" className="mainContainer contactContainer">
        <div id="map" className="paral mb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6363566324094!2d-3.7056774482926724!3d40.41690596345009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a07d7dc7%3A0x694aee57da1dc679!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1585762516022!5m2!1ses!2ses" height="565" frameBorder="0" allowFullScreen></iframe>
        </div>

        <div className="container mt-4 pt-4">
          <h2 className="display-4 mb-4 mt-4 pt-4 font-weight-bold">Contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit.</p>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <CardIcon
                iconName={faEnvelope}
                title={'SalesDepartment'}
                text={'sales@hello.com'}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <CardIcon
                iconName={faPhoneAlt}
                title={'Contact'}
                text={'hello@hello.com'}
              />
            </div>
          </div>

          
          
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact;