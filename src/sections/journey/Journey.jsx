import React, { useState } from 'react'
import Card from '../../components/Card';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Journey = ({journey}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <Card className="journey" onClick={() => setShowAnswer(prev => !prev)}>
            <div>
                <h5 className='journey__topic'>{journey.topic}</h5>
                <button className='journey__icon'>
                    {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {showAnswer &&
                <div className='journey__p'>
                    <p>{journey.p1}</p>
                    <p>{journey.p2}</p>
                    <p>{journey.p3}</p>
                </div>}
        </Card>
    )
}

export default Journey
