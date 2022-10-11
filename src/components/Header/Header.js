import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between bg-light'>
            <div className='ms-5'>
                <h4> <span className='text-info'>Quiz</span> <span className='bg-info text-white rounded'>Mania</span></h4>
            </div>
            <div className='me-5'>
            <Link className='text-decoration-none mx-2' to='/'>Home</Link>
            <Link className='text-decoration-none mx-2' to='/topics'>Topics</Link>
            <Link className='text-decoration-none mx-2' to='/statistics'>Statistics</Link>
            <Link className='text-decoration-none mx-2' to='/blogs'>Blogs</Link>
            </div>
        </div>
    );
};

export default Header;