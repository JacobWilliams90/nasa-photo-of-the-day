import React from 'react';
import { CustomButton } from './StyledButton';
import { StyledHead } from './StyledHead';

const Header = () => {
    return (
        <StyledHead>
            {
            <h1>Nasa Photo of the day</h1>
            }
            {<CustomButton>
                <a href='http://www.nasa.gov'>Take me back to NASA</a>
            </CustomButton>
            }
        </StyledHead>
    )
}

export default Header;