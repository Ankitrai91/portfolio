import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { HashLink } from 'react-router-hash-link';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "front-end developer", "Full Stack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Ankit Rai`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "front-end developer", "Full Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p>"Hi there! My name is Ankit, and I am a front-end developer. My passion for technology and design has led me to become an expert in HTML, CSS, JavaScript, and popular frameworks such as React and Angular. I am also proficient in using Git and other tools to streamline my workflow and ensure smooth collaboration with other team members.Throughout my career, I have worked on numerous projects that have challenged me to grow and develop my skills.
In addition to my technical skills, I value collaboration, communication, and attention to detail. I approach every project with a focus on problem-solving and continuous improvement, and I am always eager to learn new things and stay up-to-date with the latest industry trends.
Please take a look at my portfolio to see some examples of my work, and feel free to get in touch if you have any questions or would like to discuss a potential project. I look forward to hearing from you!" </p>
                 
               
                  <Nav.Link
                href="#connect"
                
              >
                                 <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>

              </Nav.Link>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
