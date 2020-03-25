import React from 'react';
import ButtonWhite from './ButtonWhite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Jumbotron = (props, style) => {
  if(props.match.path === '/'){
    style = 'home'
  } else if(props.match.path === '/molds') {
    style = 'molds'
  } else {
    style = 'accesories'
  }

  return(
    <div className={`jumbotron jumbotron-fluid paral paralsec ${style}`}>
      {props.match.path === '/' &&
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-12">
              <h2 className="display-1 mb-4">Solutions for the plastic Industry</h2>
              <p className="mb-4 h4">We specialize in the design and manufacture of highly technical molds.</p>

              <div className="introBottom row pt-4">
                <div className="col-lg-6 col-md-6 col-12 pt-0 mb-4 text-lg-right">
                  <ButtonWhite text={'Injection'} href={'/injection'} />
                </div>
                <div className="col-lg-6 col-md-6 col-12 pt-0 mb-4 text-lg-left">
                  <ButtonWhite text={'Contact-us'} href={'/contact'} />
                </div>
              </div>

            </div>
          </div>
          <span className="scrollDown bounce d-inline-block d-none d-lg-block d-xl-block">
            <FontAwesomeIcon icon={faChevronDown}/>
          </span>
        </div>
      }
    </div>
  )

  
}

export default Jumbotron;