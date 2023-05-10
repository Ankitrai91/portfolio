import { Button, Col } from "react-bootstrap";

export const 
ProjectCard = ({ title, description, imgUrl,live,gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span style={{fontSize:'10px'}}>{description}</span>
         <span style={{display:'flex', justifyContent:'center' ,}}>
       {gitLink &&( <div style={{margin:'2rem'}}><a href={gitLink}>
    <Button className="btn btn-secondary">Github</Button>
</a>
       </div>) } 
       {live && <div style={{margin:'2rem'}}><a href={live}>
    <Button className="btn btn-secondary">Live</Button>
</a>

       </div>  }
         </span> 
        </div>
      </div>
    </Col>
  )
}
