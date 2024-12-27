import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";


function Achievements() {
  return (

    <div className="container">

      <h2 className="text-center my-5">Achievements</h2>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body className='text-center'>
              
              <Card.Title ><FaTrophy className="icons text-warning"/></Card.Title>
              <Card.Title ><h4>5 Ballon d'Or</h4></Card.Title>
              <Card.Text>
                Awarded for his outstanding football career.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <Card.Body className='text-center'>
              
              <Card.Title ><FaStar className="icons text-primary"/></Card.Title>
              <Card.Title ><h4>UEFA Champions League</h4></Card.Title>
              <Card.Text>
              Won 5 UEFA Champions League titles.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <Card.Body className='text-center'>
              
              <Card.Title ><FaCrown className="icons text-success"/></Card.Title>
              <Card.Title ><h4>European Champion</h4></Card.Title>
              <Card.Text>
              Led Portugal to victory in Euro 2016.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div >


  )
}

export default Achievements