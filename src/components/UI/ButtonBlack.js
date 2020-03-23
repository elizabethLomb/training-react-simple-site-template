import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonBlack = ({text, href, iconName, type}) => {
  if(type !== "button"){
    return(
      <a className="btn btn-outline-dark mr-3" href={href}>
        {iconName && (
          <FontAwesomeIcon className="mr-2" icon={iconName}/>
        )}
        {text}
      </a>
    )
  }

  return(
    <button type="button" className="btn btn-outline-dark mr-3" href={href}>
      {iconName && (
        <FontAwesomeIcon className="mr-2" icon={iconName}/>
      )}
      {text}
    </button>
  )
}

export default ButtonBlack;