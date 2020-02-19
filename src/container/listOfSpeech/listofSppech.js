import React, { Component } from 'react'
import ChildSpeech from './childOfSpeech/childOfSpeech';
import {Col,Modal,ModalBody,ModalHeader,Form,FormGroup,ModalFooter,Input,Button} from 'reactstrap'
export default class listofSppech extends Component {
   state={
       speechDetails:[],
       isModal:false,
       editKey:null,
       editAuthorName:null,
       editAuthorSpeech:null,
       editTokenize:null
      
   }
   componentDidMount()
   {
       this.setData();
   }

   componentDidUpdate(prevProps,nextProps)
   {
        if(prevProps.speechDetails!==this.props.speechDetails)
        {
            this.setData();
        }
   }

   toggleHandler=()=>{
       this.setState({isModal:!this.state.isModal})
   }

   setData=()=>{
       const data=this.props.speechDetail;
       this.setState({
           speechDetails:data
       })
   }
 
deleteHandler=(key)=>{
    var a=this.state.speechDetails;
    a.splice(key,1);
    this.setState({
        speechDetail:a,
        
    })
}

editHandler=(key)=>{
    let {authorName,authorSpeech,tokenize}=this.props.speechDetail[key];
   const stringTokeinze=tokenize.toString();
    this.setState({
        editAuthorName:authorName,
        editAuthorSpeech:authorSpeech,
        editTokenize:stringTokeinze,
        isModal:true,
        editKey:key
    })
    
}

submitHandler=(e)=>{
    e.preventDefault();
    const {editAuthorName,editAuthorSpeech,editTokenize,editKey}=this.state;
const Tokenize=editTokenize.split(",");
    const data={
        authorName:editAuthorName,
        authorSpeech:editAuthorSpeech,
        tokenize:Tokenize
    
    }
 
 var copySpeechDetails=this.state.speechDetails;
 copySpeechDetails[editKey]=data;

 this.setState({
     speechDetails:copySpeechDetails,
     isModal:!this.state.isModal
 })

}


editOnChangeHandler=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
}
    

render() {
    return (
           
            <Col md="12" xs="12" sm="12" style={{padding:"0px"}}>
{this.props.speechDetail.map((speech,key)=>{
    return <ChildSpeech authorName={speech.authorName}
    authorSpeech={speech.authorSpeech}
    tokenize={speech.tokenize.map((tags)=>{
        return <Button color="danger" style={{margin:"5px"}}>{tags}</Button>
    })}
    deleteButton={this.deleteHandler.bind(this,key)}
    editButton={this.editHandler.bind(this,key)}
    ></ChildSpeech>
})}
 <div>
                     <Modal isOpen={this.state.isModal} toggle={this.toggleHandler} >
        <ModalHeader toggle={this.toggleHandler}>Edit this speech</ModalHeader>
        <ModalBody style={{padding:"25px",color:"black"}}>
        <Form >
      <FormGroup row>
        <Col  style={{padding:"5px"}}>
          <Input type="text" name="editAuthorName"  placeholder="Enter Author Name" defaultValue={this.state.editAuthorName} onChange={this.editOnChangeHandler} />
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col  style={{padding:"5px"}}>
          <Input type="textarea" name="editAuthorSpeech"  placeholder="Enter the text of Speech " defaultValue={this.state.editAuthorSpeech} onChange={this.editOnChangeHandler}  />
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col style={{padding:"5px"}}>
          <Input type="text" name="editTokenize"  placeholder="Enter the keywords using , " defaultValue={this.state.editTokenize} onChange={this.editOnChangeHandler}  />
        </Col>
      </FormGroup>
      
                    </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="success"  onClick={this.submitHandler} >Submit</Button>
          <Button color="secondary" onClick={this.toggleDetailsForm}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>

            </Col>
           
          
            
            
        )
    }
}
