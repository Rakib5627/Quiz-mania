import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carosel from '../Carosel/Carosel';
import Homecards from '../Homecards/Homecards';

const Home = () => {
    const home = useLoaderData();
    const card= home.data;
    return (
        <div>
            <div className='mb-5'>
                <Carosel></Carosel>
            </div>
            <div>
                  <Link to={`/topics`} className='btn btn-info'>All Quizes</Link>
            </div>
            <div className='row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 mt-5'>
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

export default Home;