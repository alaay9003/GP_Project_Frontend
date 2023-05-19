import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../util/SubTitle'
import PathCard from './PathCard'

function LearnPathContainer() {
    return (
        <Container className='my-4 p-2 ' >
            <SubTitle title='Learning Paths' />
            <Row className='justify-content-evenly m-3'>
                <PathCard />
                <PathCard />
                <PathCard />


            </Row>
        </Container>
    )
}

export default LearnPathContainer