import styled from 'styled-components';

// const CustomButton = styled.button({
//     background: 'darkblue',
//     color: 'white',
//     border: 'none',
//     borderRadius: 4,
//     padding: '10px 15px',
//     '&:hover': {
//         opacity: 0.7
//     }
// })

const CustomButton = styled.button`
    text-decoration: none; 
    background: darkblue;
    color: white;
    border: none;
    border-radius: 4px;
    &:hover {
        opacity: 0.7;
    }
    
    a:visited {
        color: white;
      }
`

export { CustomButton };