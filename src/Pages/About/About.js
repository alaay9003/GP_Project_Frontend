import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MemberCard from '../../Components/About/MemberCard'
import Navs from '../../Components/NavBar/Navs'
import img1 from '../../Images/mem1.jpg'
import img2 from '../../Images/team-01.jpg'
import img3 from '../../Images/team-02.jpg'
import img4 from '../../Images/team-03.jpg'
import img5 from '../../Images/team-04.jpg'
import img6 from '../../Images/team-05.png'


function About() {
    return (
        <>
            <Navs />
            <Container className='text-center justify-content-center d-flex flex-column align-items-center'>
                <Row>

                    <h1 className='bg-main text-main fit my-5 p-2'>Our Team Member</h1>
                </Row>
                <Row className='justify-content-center m-3'>
                    <MemberCard Name={'Mohamed Mokhtar'} image={img1} face={'https://www.facebook.com/mohamed.mokhtar.27/'} tweeter={'https://twitter.com/MOHAMED6MOKHTAR'} linkedin={'https://www.linkedin.com/in/mohamed-mokhtar-57557522a/'} />
                    <MemberCard Name={'Mohamed Khalid'} image={img2} />
                    <MemberCard Name={'Omar '} image={img3} />
                    <MemberCard Name={'Amr '} image={img4} />
                    <MemberCard Name={'Yousef'} image={img5} />
                    <MemberCard Name={'Eid'} image={img6} />

                </Row>
            </Container>


        </>
    )
}

export default About