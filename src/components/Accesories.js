import React from 'react';
import Jumbotron from './UI/Jumbotron';
import Footer from '../misc/Footer';

const Accesories = (props) => {
  return(
    <div>
      <main role="main" className="mainContainer accesoriesContainer">
        <Jumbotron {...props}/>

        <section className="innerSection firstSection">
          <div className="container">
            <h2 className="display-3 pt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt ex ut nunc venenatis, in tincidunt est tempus. Quisque non lacus eget lorem varius suscipit. Maecenas volutpat metus mauris, in malesuada dui lobortis ut. Vivamus ex urna, ultricies ut posuere vel, placerat eget justo. Ut blandit sodales ultrices. Nunc sodales facilisis erat vitae varius. Fusce ac magna feugiat, lacinia magna nec, tempor massa.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis augue non augue consectetur ornare sed ut ex. Sed eu magna eu sapien ultrices dapibus eu eu nulla. Praesent gravida bibendum purus et venenatis. Praesent turpis eros, tempus accumsan leo nec, egestas vulputate sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tincidunt porta dolor, eu sodales eros convallis ac. Vivamus tempor dignissim velit id porta.</p>
            <p>Mauris consectetur rhoncus lorem, ac viverra quam semper ac. Etiam et lorem at risus imperdiet volutpat eu in nisl. Vestibulum vestibulum libero in gravida tristique. Integer vulputate nunc vitae dapibus ultricies. In massa nibh, tempus nec metus scelerisque, elementum finibus ante. Curabitur mattis cursus nisi, ut laoreet neque. Aenean lacinia nibh vitae volutpat scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sed vulputate urna. Proin sagittis mollis mauris, iaculis interdum eros condimentum ac. Mauris mattis massa quis nulla dapibus, quis egestas diam consectetur. </p>
            <p>Fusce vestibulum mi ut ante dictum, eget pretium dolor ornare. Nunc et risus ipsum. Suspendisse aliquam, erat vel rutrum fringilla, neque orci porta mi, ac laoreet tortor orci id ipsum. In pulvinar lorem nec lacus fermentum pulvinar. Integer semper lobortis libero, eget rhoncus lacus auctor a. Suspendisse vehicula ex nec tristique porta. </p>
            <p>Pellentesque auctor, lectus nec varius consectetur, arcu lorem finibus magna, non rhoncus leo erat at elit. In ac rutrum odio. Proin in massa eget augue convallis malesuada. Nullam semper a nulla blandit molestie. Nullam ac velit pulvinar, mollis neque eu, iaculis leo. Nam viverra, neque id tempus egestas, magna dolor hendrerit nisi, eget iaculis mi purus vitae leo. Fusce pharetra lorem vel iaculis pellentesque. Pellentesque ac nisi nec nibh hendrerit varius.</p>
            <p>Donec feugiat eleifend mi nec ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos:</p>
            <ul>
              <li>Mauris consectetur rhoncus lorem, ac viverra quam semper ac.</li>
              <li>Mauris consectetur rhoncus lorem, ac viverra quam semper ac.</li>
              <li>Mauris consectetur rhoncus lorem, ac viverra quam semper ac.</li>
              <li>Mauris consectetur rhoncus lorem, ac viverra quam semper ac.</li>
              <li>Mauris consectetur rhoncus lorem, ac viverra quam semper ac.</li>
              <li>Mauris consectetur rhoncus lorem, ac viverra quam semper ac.</li>
            </ul>
          </div>
        </section>
      </main>
    
    <Footer/>
    </div>
  )
}

export default Accesories;