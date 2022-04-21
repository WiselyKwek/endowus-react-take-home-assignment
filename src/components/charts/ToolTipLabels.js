import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
import Dot from './Dot'

const ToolTipLabels = ({ label, value, fontColor, dotColor, special }) => {
  return (
    <>
        <Row>
            <Col style={{color: fontColor}}>
              <div>
                {/* <div style={{ borderRadius: "100%", backgroundColor: "blue", width:10, height:10, display: 'inline-block'}}></div> */}
                {
                  !special ?
                    <Dot dotColor={dotColor}/> :
                    ""
                }
                {label}
              </div>
            </Col>
            <Col>{value}</Col>
        </Row>
    </>
  )
}

export default ToolTipLabels