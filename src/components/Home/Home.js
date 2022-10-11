import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import Carosel from '../Carosel/Carosel';
// import Homecards from '../Homecards/Homecards';

const Home = () => {
    // const home = useLoaderData();
    // const card= home.data;
    return (
        <div>
            <div className='mb-5'>
                <Carosel></Carosel>
            </div>
            {/* <div className='row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4'>
                {
                    card.map(homecards => <Homecards
                    key = {homecards.id}
                    homecards = {homecards}
                    ></Homecards>)
                }    
            </div> */}
        </div>
    );
};

export default Home;