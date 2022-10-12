import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qquestions from '../Qquestions/Qquestions';

const Quizes = () => {

    const quizes = useLoaderData();
    // console.log(quizes);
    const quiz =quizes.data;
    const{name , total , questions}= quiz;
    console.log(quiz);

    return (
        <div>
            <div className='mt-5 text-info'>
                <h2>Question topic :{name}</h2>
                <p>Total questioons :{total}</p>
            </div>
            <div>
                {
                    questions.map( quizQuestion => <Qquestions
                        key={quizQuestion.id}
                        quizQuestion={quizQuestion}
                    ></Qquestions>
                    )
                }
            </div>
        </div>  
    );
};

export default Quizes;