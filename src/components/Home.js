import React from 'react';
import Jumbotron from './UI/Jumbotron';
import CardIcon from './UI/CardIcon';
import { faBullhorn, faSearch, faSync, faCheck } from '@fortawesome/free-solid-svg-icons';
import Video from './UI/Video';
import ButtonWhite from './UI/ButtonWhite';
import TwoSideBlockFluidLeft from './UI/TwoSideBlockFluidLeft';
import TwoSideBlockFluidRight from './UI/TwoSideBlockFluidRight';

const Home = (props) => {
  return(
    <main role="main" className="mainContainer homeContainer">
      <Jumbotron {...props}/>

      <div className="jumbotron jumbotron-fluid paral paralsec1">
        <div className="container">
          <div className="text-center">
            <h2 className="display-4 mb-4">Company dedicated to the national importation and distribution of plastic injection machinery.</h2>
            <p className="mb-5">Our human capital is to collaborate closely on each project to grow and be more competitive. Offer our experience, trust, commitment, technology and quality to meet all your expectations.</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <CardIcon iconName={faBullhorn} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula. Sed id volutpat tortor, eget dignissim nisl.'}/>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <CardIcon iconName={faSearch} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula. Sed id volutpat tortor, eget dignissim nisl.'}/>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <CardIcon iconName={faSync} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula. Sed id volutpat tortor, eget dignissim nisl.'}/>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <CardIcon iconName={faCheck} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula. Sed id volutpat tortor, eget dignissim nisl.'}/>
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron jumbotron-fluid paral paralsec4">
        <Video url={'https://cdn.videvo.net/videvo_files/video/free/2019-03/small_watermarked/181004_21_WATERDEVELOPMENT_17_preview.webm'}/>
        <div className="container text-center">
          <div className="col-12">
            <h2 className="display-2 mb-4 font-weight-bolder">Lorem Ipsum</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula.</p>

            <ButtonWhite type={'link'} text={'GO TO MOLDS'} href={'/molds'} />
          </div>
        </div>
      </div>

      <div className="jumbotron jumbotron-fluid paral paralsec3 p-0 yizumiHome__Wrap">
        <div className="container-fluid">
          <div className="row">
            <TwoSideBlockFluidLeft
              machineUrl={'http://yamato-pt.com/img/FA_160.png'}
              machineAlt={'rubber 160 FA'}
              logo={'http://yamato-pt.com/img/fcs_logo.png'}
              logoAlt={'FCS logo'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula.'}
              href={'/'}
            />

            <TwoSideBlockFluidRight
              machineUrl={'http://yamato-pt.com/img/liansu_FEI_6663.png'}
              machineAlt={'liansu fei 663'}
              logo={'http://yamato-pt.com/img/liansu_logo.png'}
              logoAlt={'Liansu'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula.'}
              href={'/'}
              catalog={'/'}
            />

            <TwoSideBlockFluidLeft
              machineUrl={'http://yamato-pt.com/img/formax_FGB-14.png'}
              machineAlt={'formax FGB-14'}
              logo={'http://yamato-pt.com/img/formax_logo.png'}
              logoAlt={'Formax'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta ipsum gravida tellus maximus, a venenatis augue vehicula.'}
              href={'/'}
              catalog={'/'}
            />

          </div>
        </div>
      </div>

    </main>
  )
}

export default Home;