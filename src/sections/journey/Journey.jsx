import React, { useState } from 'react'
import Card from '../../components/Card';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Journey = ({journey}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <Card className="journey" onClick={() => setShowAnswer(prev => !prev)}>
            <div>
                <h5 className='journey__question'>{journey.question}</h5>
                <button className='journey__icon'>
                    {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {showAnswer && <p className='journey__answer'>{journey.answer}</p>}
        </Card>
    )
}

export default Journey
