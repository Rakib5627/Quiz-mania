import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Homecards from '../Homecards/Homecards';

const Topics = () => {
    
    const home = useLoaderData();
    const card= home.data;

    return (
        <div>
            <div className='row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4'>
                {
                    card.map(homecards => <Homecards
                    key = {homecards.id}
                    homecards = {homecards}
                    ></Homecards>)
                }    
            </div>
        </div>
    );
};

export default Topics;