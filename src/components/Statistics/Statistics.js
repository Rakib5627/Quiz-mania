import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
     
    const loadedData = useLoaderData();
    const quizData = loadedData.data;

    return (
        <div>
            <div>
            <h1 className='text-info'>Chart of questions per quiz:</h1>
            <div className='d-flex justify-content-center'>
                <LineChart width={600} height={300} data={quizData} margin={{ top: 6, right: 6, bottom: 6, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#3498db" />
                <CartesianGrid strokeDasharray="5 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart></div>
        </div>
        </div>
    );
};

export default Statistics;