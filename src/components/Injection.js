import React from 'react';
import Video from './UI/Video';
import Footer from '../misc/Footer';

const Injection = () => {
  return(
    <div>
      <main role="main" className="mainContainer injectionContainer">
        <div className="jumbotron jumbotron-fluid paral paralsec4">
          <div className="videoContainer">
            <Video url={'http://yamato-pt.com/img/yamato_video_2.mp4'}/>
          </div>
        </div>

        <div className="container-fluid containerWhite pt-5">
          <div className="container mt-4 pt-4">
            <h2 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis </h2>
            <hr className="featurette-divider"/>
          

            <div className="col-12">
              <h2 className="featurette-heading display-4 mb-4 font-weight-bold">Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. </p>
              <p>Vivamus ex urna, ultricies ut posuere vel, placerat eget justo. Ut blandit sodales ultrices. Nunc sodales facilisis erat vitae varius. Fusce ac magna feugiat, lacinia magna nec, tempor massa.</p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

              <img class="featurette-image" alt="Yamato FA 160" title="Yamato FA 160" src="http://yamato-pt.com/img/FA_160.png"/>
            </div>

            <div className="col-12">
              <h2 className="featurette-heading display-4 mb-4 font-weight-bold">Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. </p>
              <p>Vivamus ex urna, ultricies ut posuere vel, placerat eget justo. Ut blandit sodales ultrices. Nunc sodales facilisis erat vitae varius. Fusce ac magna feugiat, lacinia magna nec, tempor massa.</p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

              <img class="featurette-image" alt="Yamato FA 160" title="Yamato FA 160" src="http://yamato-pt.com/img/yamato_serie_dm.png"/>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Injection;