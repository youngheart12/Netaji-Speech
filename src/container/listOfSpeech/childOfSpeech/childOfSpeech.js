import React from 'react';
import {Row,Col,Container, Button, Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, CardFooter} from 'reactstrap';
import './childOfSpeech.css';
const childOfSpeech=(props)=>
{
return(
    <Container fluid>
        <Row>
            <Col sm="12" md="12" xs="12">
            <Card>
     <CardHeader><h4>Author Name:{props.authorName}</h4></CardHeader>
        <CardBody>
          <CardTitle><h6 style={{textDecoration:"underline"}}>Speech</h6></CardTitle>
          <CardSubtitle> Speech details</CardSubtitle>
          <CardText>{props.authorSpeech}</CardText>
          <Button color="info" onClick={props.editButton}>Edit</Button>
          <Button color="danger" style={{float:"right"}} onClick={props.deleteButton}> Delete</Button>
        </CardBody>
        <CardFooter><h5>Tags:{props.tokenize}</h5></CardFooter>
      </Card>
            </Col>
        </Row>
        <br></br>
    </Container>
)
}
export default childOfSpeech;