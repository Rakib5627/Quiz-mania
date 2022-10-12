import React from 'react';
import { Link } from 'react-router-dom';

const Homecards = (homecards) => {
    console.log(homecards.homecards);
    const {name , total ,logo, id }= homecards.homecards;
    


    return (
        <div>
                <div className="col">
                  <div className="card h-100"> 
                     <img className="card-img-top bg-info" src={logo} alt="" />
                     <div className="card-body">
                       <h5 className="card-title">Name : {name}</h5>
                       <p className="card-text"><small>{total} Questions</small></p>
                     </div>
                     <div className="">
                      <Link to={`/${id}`} className='btn btn-success'>Start Quiz</Link>
                     </div>
                  </div>
                </div>
        </div>
    );
};

export default Homecards;