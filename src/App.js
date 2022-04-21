import React from 'react'
import './App.css';
import Header from "./components/Header"
import InputFields from './components/InputFields';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseLineChart from './components/charts/CourseLineChart'
import { Container, Row, Col} from 'react-bootstrap'


function App() {
  
  
  

  return (
    <div className="container">
      {/* Header Component containing description */}
      <Header />

      {/* input fields components */}
      <InputFields />
      
      <Container fluid>
        <Row>
          <Col className="mx-auto">
            <React.Fragment>
              <CourseLineChart/>
            </React.Fragment>
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default App;
