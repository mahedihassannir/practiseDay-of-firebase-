import React, { useContext } from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
    




    return (
        <div>
            
            <nav className='flex h-20 justify-between items-center px-40  '>
                <h1>Free <span className='text-lg text-orange-500'>Hotel</span></h1>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Register">Register</Link>
                    <Link to="/Login">Login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;