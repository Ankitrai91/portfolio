import htmllogo from '../assets/img/htmllogo.png'
import csslogo from "../assets/img/csslogo.png";
import javascriptlogo from "../assets/img/javascriptlogo.png";
import reactlogo from "../assets/img/reactlogo.png";
import mongodblogo from "../assets/img/mongodblogo.png";
import nodejslogo from "../assets/img/nodejslogo.png";
import firebaselogo from "../assets/img/firebaselogo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} autoPlay infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmllogo} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={csslogo} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascriptlogo} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactlogo} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={mongodblogo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={nodejslogo} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={firebaselogo} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
