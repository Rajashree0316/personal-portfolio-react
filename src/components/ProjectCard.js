import { Col, Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


export const ProjectCard = ({ title, description, imgUrl,demoLink,gitLink}) => {
  return (
    <Col size={12} sm={6} md={4} style={{marginBottom: '60px'}}>
    <Card className="project-card-view ">
      <Card.Img variant="top" src={imgUrl} alt="card-img" />
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-body-title">{title}</Card.Title>
        <Card.Text className="project-card-body-desc">
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{border:"none"}} className="btnClass">
        <Button
          variant="primary"
          href={demoLink}
          target="_blank"
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
        <Button
          variant="secondary"
          href={gitLink}
          target="_blank"
        >
          <BsGithub /> &nbsp;
          {"Github"}
        </Button>
      </Card.Footer>
    </Card>
    
    </Col>
  )
}