import React from 'react';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import ButtonBlack from '../components/UI/ButtonBlack';

const ModalNavigation = () => {
  return (
    <div className="modal fade" id="contactModal" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <figure><img width="60px" src="/logo192.png" alt="Simple site Logo"/></figure>
            <small>Experience for 35 years in the market, make the information received is kept very secret, always respecting the confidentiality that our customers give us.</small>

            <div className="mb-4 mt-4">
              <h5 className="mb-4 text-uppercase font-weight-bold">Sales departments</h5>
              <ButtonBlack type={"link"} text={"sales@simple-site.com"} href={"mailto:sales@simple-site.com?subject=Contato"} iconName={faEnvelope}/>

              <ButtonBlack text={"+34 000 000 000"} href={"tel:+34000000000"} iconName={faPhoneAlt}/>
            </div>

            <div className="mb-4">
              <h5 className="mb-4 text-uppercase font-weight-bold">Direction</h5>
                <ButtonBlack type={"link"} text={"sales@simple-site.com"} href={"mailto:sales@simple-site.com?subject=Contato"} iconName={faEnvelope}/>

                <ButtonBlack text={"+34 000 000 000"} href={"tel:+34000000000"} iconName={faPhoneAlt}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default ModalNavigation