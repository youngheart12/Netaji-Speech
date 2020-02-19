import React from 'react';
import {Row,Col,Container} from 'reactstrap'

import Speech from '../../container/Speech/speech';
import  './layout.css';
function layout()
{
    return (
<Container fluid>
<Row>
    <Col xs="12" md="12" sm="12" style={{padding:"0px"}}>
        <div className="headerBanner">
            <h1>Netaji Speeches</h1>
        </div>
    </Col>
</Row>
<Row>
    <Col xs="12" md="12" sm="12" style={{padding:"0px"}}>
        <Speech></Speech>
    </Col>
   
</Row>
</Container>
    );
}
export default layout;