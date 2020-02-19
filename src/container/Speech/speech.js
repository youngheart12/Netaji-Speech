import React, { Component } from 'react'
import {Container,Row,Col,Button, InputGroup, InputGroupAddon, Input,
    Form, FormGroup,Modal,ModalBody,ModalFooter,ModalHeader
} from 'reactstrap'
import ListOfSpeech from '../listOfSpeech/listofSppech';

export default class speech extends Component {
    state={
        toggle:false,
        authorName:null,
        authorSpeech:null,
        authorSpeechTag:null,
        turnButton:false,
        filterVlaueAuthor:null,  //default value for speechDetails
        speechDetails:[
{
    authorName:"Dilip kumar",
    authorSpeech:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    tokenize:["Delhi","Election"]
},
{
    authorName:"Mayank",
    authorSpeech:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    tokenize:["Mumbai","Highlights"]
},
{
    authorName:"Mayank Soni",
    authorSpeech:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    tokenize:["Record","Statics"]
}
        ]
    }

//searching filter method
   setFilterValueHandler=()=>{
    let filterValue=document.getElementById("filterValue").value;
    const a=this.state.speechDetails.filter((speech)=>{
        return speech.authorName.toLocaleLowerCase() === filterValue.toLocaleLowerCase();
    })
    this.setState({
        speechDetails:a
    })
    
   }

//toggleAddModelHandler
    toggleDetailsForm=()=>{
        this.setState({toggle:!this.state.toggle})
    }

//for taking input value with validation
    onChangeHandler=(e)=>{
        this.setState({
                [e.target.name]:e.target.value
        })
        const {authorName,authorSpeech,authorSpeechTag}=this.state;
        if(authorName && authorSpeech && authorSpeechTag)
        {
            this.isButtonDisabled();
        }
    }

    //submit button disable and enable
    isButtonDisabled()
    {
        const {authorName,authorSpeech,authorSpeechTag}=this.state;
        if(authorName.length>5 && authorSpeech.length>5 && authorSpeechTag.length>1)
        {
            this.setState({
                turnButton:true
            })
        }
    }

    // clear input box after submitting
    clearInputHandler=()=>{
       
      this.setState({
          authorName:null,
          authorSpeech:null,
          authorSpeechTag:null
      })

        
    }

    //submit handler
    submitHandler=(e)=>{
        e.preventDefault();
        const {authorName,authorSpeech,authorSpeechTag}=this.state;
        const tokenize=authorSpeechTag.split(",");

        const data={
            authorName,
            authorSpeech,
            tokenize
        }
     var copySpeechDetails=this.state.speechDetails;
     copySpeechDetails.push(data);
     this.setState({
         speechDetails:copySpeechDetails,
         toggle:!this.state.toggle
     })
  
    }



    render() {
        
        return (
            <Container fluid>
                <Row style={{backgroundColor:"null",padding:"45px"}} >
                    <Col md="12" xs="12" sm="12" style={{padding:"25px"}}>
                        <br></br>
                    <InputGroup>
        <Input placeholder="Search by author name" color="success" id="filterValue" bsSize="lg"/>
        <InputGroupAddon addonType="append">
          <Button color="success" onClick={this.setFilterValueHandler}>Search</Button>
        </InputGroupAddon>
      </InputGroup>
                    </Col>



                    <Col md="12" xs="12" sm="12" style={{padding:"25px"}}>
                        <Button onClick={this.toggleDetailsForm} block color="danger" outline><h3>Add New Speech</h3></Button>
                        
                     </Col>
                     <div>
                     <Modal isOpen={this.state.toggle} toggle={this.toggleDetailsForm} >
        <ModalHeader toggle={this.toggleDetailsForm}>Add New Speech</ModalHeader>
        <ModalBody style={{padding:"25px",color:"black"}}>
        <Form >
      <FormGroup row>
        <Col  style={{padding:"5px"}}>
          <Input type="text" name="authorName"  placeholder="Enter Author Name"  onChange={this.onChangeHandler} />
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col  style={{padding:"5px"}}>
          <Input type="textarea" name="authorSpeech"  placeholder="Enter the text of Speech "  onChange={this.onChangeHandler} />
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col style={{padding:"5px"}}>
          <Input type="text" name="authorSpeechTag"  placeholder="Enter the keywords using , " onChange={this.onChangeHandler} />
        </Col>
      </FormGroup>
      
                    </Form>
        </ModalBody>
        <ModalFooter>
        {this.state.turnButton? <Button color="success"  onClick={this.submitHandler}>Submit</Button>: <Button color="success"  disabled>Submit</Button>}
          <Button color="secondary" onClick={this.toggleDetailsForm}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
                   

                </Row>
                <Row>
                    <ListOfSpeech speechDetail={this.state.speechDetails} filterValue={this.state.filterVlaueAuthor}></ListOfSpeech>
                </Row>
            </Container>
        )
    }
}
