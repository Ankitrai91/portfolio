import { Button, Col } from "react-bootstrap";

export const 
ProjectCard = ({ title, description, imgUrl,live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>title</h4>
          <span style={{fontSize:'10px'}}>{description}</span>
         <div style={{display:'flex'}}>
         <a href={live}>
    <Button>Live</Button>
</a>
         </div> 
        </div>
      </div>
    </Col>
  )
}
