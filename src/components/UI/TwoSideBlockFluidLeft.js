import React from 'react';
import ButtonBlack from './ButtonBlack';


const TwoSideBlockFluidLeft = (
  { machineUrl, machineAlt, logo, logoAlt, text, href, catalog }
  ) => {
    return(
      <div className="d-flex">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2 bgGrey text-center align-items-center">
          <figure>
            <img src={machineUrl} alt={machineAlt} />
          </figure>
        </div>

        <div className="col-lg-6 col-md-12 col-12 order-md-1 order-lg-2 order-1 align-self-center">
            <div className="d-flex justify-content-lg-end justify-content-center">
              <figure className="logo">
                <img className="order-lg-1 order-md-1" src={logo} alt={logoAlt} />
              </figure>
            </div>
            <p className="p-4">{text}</p>
            <div className="btnBottom row justify-content-lg-end justify-content-center no-gutters pt-3">
              <ButtonBlack type={'link'} text={'Go to Web'} href={href}/>
              {catalog &&
                <ButtonBlack type={'link'} text={'Go to Web'} href={catalog}/>
              }
            </div>
        </div>
      </div>
    )
}

export default TwoSideBlockFluidLeft;