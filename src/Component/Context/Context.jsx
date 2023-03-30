import React from 'react';
import Form from 'react-bootstrap/Form';
import img from '../../images/shopping.png'
import Button from 'react-bootstrap/Button';

const Context = () => {
    return (
        <div className='d-flex justify-content-between align-items-center gap-5 mt-5'>
            <div className='w-50 ms-5'>
                <Form>
                    <h3 className='text-center'>Contact with Us</h3>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Control type="name" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={5} placeholder="Enter Your Massage" />
                    </Form.Group>
                </Form>
                <Button className='w-100' variant="primary">SEND EMAIL</Button>
            </div>
            <div className='w-50'>
                <img className='img-fluid' src={img} alt="" />
            </div>

        </div>
    );
};

export default Context;