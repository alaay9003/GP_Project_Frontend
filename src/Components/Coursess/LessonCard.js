import React from 'react'
import { Link } from 'react-router-dom'

function LessonCard(props) {
    return (
        <>
            <Link to={props.num} className='link text-black '>

                <div className='d-flex gap-2 p-3 LessonCard' >
                    <div>{props.num}</div>
                    <div>{props.name}</div>
                </div>
            </Link>
        </>
    )
}

export default LessonCard