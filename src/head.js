import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            {
            <h1>Nasa Photo of the day</h1>
            }
            {
            <a href='http://www.nasa.gov'>Take me back to NASA</a>
            }
        </div>
    )
}

export default Header;