import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <div className="text-white py-5" id="formsection">

      <div className='container text-center'>

        <h2 className='mb-4'>Contact</h2>

        <Form >

          <div className="row">

            <div className='col-md-6 mb-3'>

              <Form.Control type="text" placeholder="Your Name" />
            </div>

            <div className='col-md-6 mb-3'>

            <Form.Control type="email" placeholder="Your Email" />

            </div>

            
          </div>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

            <Form.Control as="textarea" placeholder="Your Message" rows={5} />
          </Form.Group>


          <Button variant="primary" type="submit" className='text-center '>
            Send Message
          </Button>


        </Form>
      </div>
    </div>

  )
}

export default ContactForm