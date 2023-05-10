import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { db } from "./firebase";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (email=='') {
      alert("please enter your email");
    } else {
      setLoading(true);
      db.collection("emails").add({
        
        email: email,
       
      }).then(() => {
          alert("form submitted");
          setLoading(false);
          setEmail('')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">{loading? <>loading</> :<>Submitted</>}</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
