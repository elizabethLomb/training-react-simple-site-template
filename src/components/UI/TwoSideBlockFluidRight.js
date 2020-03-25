import React from 'react';
import ButtonBlack from './ButtonBlack';

const TwoSideBlockFluidRight = (
  { machineUrl, machineAlt, logo, logoAlt, text, href, catalog }
  ) => {
    return(
      <div className="d-flex">
        <div className="col-lg-6 col-md-12 col-12 align-self-center order-md-1">
          <div className="d-flex justify-content-lg-start justify-content-center">
            <figure className="logo">
              <img className="order-lg-1 order-md-1" src={logo} alt={logoAlt} />
            </figure>
          </div>

          <p className="mt-4">{text}</p>
          <div className="btnBottom row justify-content-lg-start justify-content-center no-gutters pt-3">
            <ButtonBlack type={'link'} text={'Go to Web'} href={href}/>
            {catalog &&
              <ButtonBlack type={'link'} text={'Catalog'} href={catalog}/>
            }
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-12 bgGrey text-center order-md-2">
          <figure>
            <img src={machineUrl} alt={machineAlt} />
          </figure>
        </div>
      </div>
    )
}

export default TwoSideBlockFluidRight;