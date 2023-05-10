import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { db } from "./firebase";


export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };


  const [status, setStatus] = useState({});
  const [form, setForm] = useState({});
  const [loading,setLoading] = useState(false)



  let handleSubmit = (e) =>{
  
    e.preventDefault();
    if (form.fname=='' || form.lname=='' || form.email=='' ||  form.phone=='' || form.message=='') {
      alert("Please Enter all details");
    } else {
      setLoading(true);
      db.collection("contacts").add({
        fname: form.fname,
        lname: form.lname,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }).then(() => {
          alert("form submitted");
          setLoading(false);
          setForm({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            message: "",
          });
        })
        .catch((error) => {
          alert(error.message);
        });
    }

  }

 

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={form.fname}
            onChange={(e) => {
              setForm({ ...form, fname: e.target.value });
            }}
                          
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={form.lname}
                          onChange={(e) => {
                            setForm({ ...form, lname: e.target.value });
                          }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={form.message}
                          onChange={(e) => {
                            setForm({ ...form, message: e.target.value });
                          }}
                        ></textarea>
                        <button style={{marginLeft:'20px',borderRadius:'2rem'}} onClick={handleSubmit}>
                    { !loading ?     <span>Submit</span> :<div class="spinner-border text-primary" role="status">
  <span class="sr-only"></span>
</div>}
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
