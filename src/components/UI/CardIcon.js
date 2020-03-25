import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardIcon = ({ iconName, title, text }) => {
  return(
    <div className="card border-light mb-5 text-center cardIcon">
      <div className="card-body">
        <div className="card-icon-top">
          <FontAwesomeIcon icon={iconName}/>
        </div>
        <h3 className="card-title text-uppercase mb-4 mt-4">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}

export default CardIcon;