import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function MemberCard({ Name, image, face, tweeter, linkedin }) {
    return (
        <>
            <Col className='fit text-center justify-content-center team m-4'>
                <div className='d-flex fit align-items-center pt-3'>
                    <img src={image} alt='t' className='reduce  ' style={{ width: "300px", height: "300px" }} />
                    <ul className='fit'>
                        <li><a href={face}><i className="fa-brands fa-facebook my-3 click hovFace"></i></a> </li>
                        <li><a href={tweeter}><i className="fa-brands fa-twitter my-3 click hovTweet"></i></a> </li>
                        <li><a href={linkedin}><i className="fa-brands fa-linkedin my-3 click hovlink"></i></a> </li>
                    </ul>
                </div>
                <Row className=' fit my-4  m-auto text-primary fs-4 fw-bold'><p>{Name}</p></Row>
            </Col>


        </>
    )
}

export default MemberCard