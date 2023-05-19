import React from 'react'
import { Button, Container } from 'react-bootstrap'

function Survey() {
    return (
        <div >

            <Container className='text-center my-5'>

                <h1>Survey</h1>
                <div className='d-flex flex-column justify-content-center text-center align-items-center'>
                    <input type={'email'} placeholder='Email' className='my-3 inp' />
                    <input type={'text'} placeholder='Your Name' className='my-3 inp' />
                    <input type={'text'} placeholder='Your Phone' className='my-3 inp' />
                    <textarea className='inp my-3' placeholder='Tell us About you need ' rows="5" style={{ resize: "none" }} />
                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </div>

            </Container>
        </div>
    )
}

export default Survey