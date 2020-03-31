import React from 'react';
import Article from './UI/Article';
import Footer from '../misc/Footer';


const News = () => {
  return(
    <div>
      <main role="main" className="mainContainer newsContainer">
        <section className="innerSection firstSection mt-4">
          <div className="container">
            <h2 className="featurette-heading display-4 mb-4 font-weight-bold">News</h2>

            <Article to={'/'}
              image={'https://www.plasticstoday.com/sites/default/files/M-Line-Muller-650.jpg'}
              title={"Pellentesque habitant morbi tristique senectus"}
              author={'Ait Amet,'}
              date={'30 mar 2020'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo.'}
            />

            <Article to={'/'}
              image={'https://www.eppm.com/downloads/8695/download/ROBOSHOT.jpg?cb=50e80331af2d77bea7926207f7cc1c90&w=451&h='}
              title={"Pellentesque habitant morbi tristique senectus"}
              author={'Ait Amet,'}
              date={'30 mar 2020'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo.'}
            />

            <Article to={'/'}
              image={'https://www.bccourier.com/wp-content/uploads/2020/03/Metal-Injection-Molding-Materials-1.jpg'}
              title={"Pellentesque habitant morbi tristique senectus"}
              author={'Ait Amet,'}
              date={'30 mar 2020'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo.'}
            />

            <Article to={'/'}
              image={'https://7mz32io9r2-flywheel.netdna-ssl.com/wp-content/uploads/2019/06/adults-coffee-colleagues-1323592-1024x633.jpg'}
              title={"Pellentesque habitant morbi tristique senectus"}
              author={'Ait Amet,'}
              date={'30 mar 2020'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo.'}
            />

          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default News;