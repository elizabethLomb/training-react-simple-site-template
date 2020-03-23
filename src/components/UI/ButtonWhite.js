import React from 'react';

const ButtonWhite = ({text, href, iconName, type}) => {
  if(type !== "button"){
    return(
      <a className="btn btn-outline-light btn-lg text-uppercase" href={href}>
        {text}
      </a>
    )
  }

  return(
    <button type="button" className="btn btn-outline-light btn-lg text-uppercase" href={href}>
      {text}
    </button>
  )
}

export default ButtonWhite;

