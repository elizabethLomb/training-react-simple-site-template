import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonWhite = ({text, href, iconName, type, target}) => {
  if(type !== "button"){
    return(
      <a className="btn btn-outline-light btn-lg text-uppercase" href={href} target={target}>
        {iconName && (
          <FontAwesomeIcon className="mr-2" icon={iconName}/>
        )}
        {text}
      </a>
    )
  }

  return(
    <button type="button" className="btn btn-outline-light btn-lg text-uppercase" href={href} target={target}>
      {iconName && (
        <FontAwesomeIcon className="mr-2" icon={iconName}/>
      )}
      {text}
    </button>
  )
}

export default ButtonWhite;

