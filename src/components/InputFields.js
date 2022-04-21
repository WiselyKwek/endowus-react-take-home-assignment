import { useState } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'


const InputFields = () => {
    return (
    <Form>
        <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Initial Investment</Form.Label>
                <Form.Control type="number" placeholder="Enter Initial Investment Amount" />
                
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                <Form.Label>Monthly Investment</Form.Label>
                <Form.Control type="number" placeholder="Monthly Investment Amount" />
                <Form.Text className='text-muted'>
                    Recommended Amount: $1,000
                </Form.Text>
            </Form.Group>
            
        </Row>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    )
}

export default InputFields