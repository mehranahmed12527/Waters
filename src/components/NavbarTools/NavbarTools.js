import React from 'react';
import styled from 'styled-components';
const StylingUl = styled.ul`
display:flex;
`;
const StylingLi = styled.li`
margin:10px 20px 10px 20px;
list-style: none;
border-top:2px solid white;
&:hover{
    border-top:2px solid #4f5b64;
    background-size: cover;
}
`;
const StylingAnchor = styled.a`
text-decoration:none;
font-size:18px;
text-transform:capitalize;
color:#4f5b64;
`;
 const toolbar = props => (
     <header>  
         <nav>
        <div>
        <StylingUl>
                <StylingLi><StylingAnchor href="#">Products</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor href="#">Services</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor href="#">Support</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor href="#">Education</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor href="#">StylingLibrary</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor href="#">About Waters</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor href="#">Shop</StylingAnchor></StylingLi>
        </StylingUl>
        </div> 
         </nav>
     </header>
 );
 export default toolbar;