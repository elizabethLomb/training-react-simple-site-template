import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import ButtonBlack from '../components/UI/ButtonBlack';

const Navigation = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <h1>
          <Link to='/' className="navbar-brand">
          <img width="60px" src="/logo192.png" alt="Simple site Logo"/>
        </Link>
        </h1>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink to='/' className="nav-link" activeClassName="active">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/injection' className="nav-link" activeClassName="active">Injection</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/molds' className="nav-link" activeClassName="active">Molds</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/news' className="nav-link" activeClassName="active">News</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/accesories' className="nav-link" activeClassName="active">Accesories</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/contact' className="nav-link" activeClassName="active">Contact</NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="mr-4">
            <button type="button" className="btn p-0" data-toggle="modal" data-target="#contactModal" >
              <FontAwesomeIcon icon={faEnvelope}/>
            </button>
          </li>
          <li>
          <ButtonBlack text={"+34 000 000 000"} href={"tel:+34000000000"} iconName={faPhoneAlt}/>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navigation;