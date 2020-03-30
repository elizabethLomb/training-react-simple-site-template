import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from '../components/UI/ButtonWhite';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return(
    <footer className="mainFooter">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 pt-3 text-center text-lg-left">
            <div className="d-flex flex-column h-100">
              <div className="pt-5 pt-lg-8 pb-4 footerInfo">
                <Link to="/">
                  <img width="60px" src="/logo192.png" alt="Simple site Logo"/>
                </Link>

                <span className="mt-3 fs--1 d-block">Lorem ipsum dolor sit amet, consectetur adipiscing. Cras tincidunt ex ut nunc venenatis</span>
                <span>Portugal</span>
                <hr/>

                <span className="d-block text-uppercase font-weight-bold mb-2">Sales</span>
                <ButtonWhite text={"+34 000 000 000"} href={"tel:+34000000000"} iconName={faPhoneAlt}/>
              </div>
            </div>
          </div>

          <div className="footerOtherInfo col d-flex flex-column mb-2 mt-3 pl-lg-7">
            <div className="row pt-5 pt-lg-8 pb-4 pb-lg-6">
              <div className="col-6 col-lg-6">
                <h2 className="h6 mb-1 mb-lg-4 text-uppercase font-weight-bold">
                  <Link to="/injection">Injection</Link>
                </h2>
                <ul className="pt-2 mb-5 fw-light list-unstyled">
                  <li className="my-1">
                    <Link to="/injection">Plastic Injection</Link>
                  </li>
                  <li className="my-1">
                    <Link to="/injection">Die casting aluminium</Link>
                  </li>
                  <li className="my-1">
                    <Link to="/injection">Rubber Injection</Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg-6">
                <h2 className="h6 mb-1 mb-lg-4 text-uppercase font-weight-bold">
                  <Link to="/molds">Molds</Link>
                </h2>
                <ul className="pt-2 mb-5 fw-light list-unstyled">
                  <li className="my-1">
                    <Link to="/molds">Plastic Injection</Link>
                  </li>
                  <li className="my-1">
                    <Link to="/molds">Die casting aluminium</Link>
                  </li>
                  <li className="my-1">
                    <Link to="/molds">Rubber Injection</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;