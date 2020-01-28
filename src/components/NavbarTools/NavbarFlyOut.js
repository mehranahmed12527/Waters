import React from 'react';
import styled from 'styled-components';
const StylingUl = styled.ul`
display:flex;
flex-direction: column;
`;
const StylingLi = styled.li`
margin:10px 20px 10px 20px;
list-style: none;
`;
const StylingAnchor = styled.a`
text-decoration:none;
font-size:18px;
text-transform:capitalize;
color:#0077bb;
line-height: 25px;
font-weight:500;
`;
const StylingDiv =styled.div`
display:block;
width:100%;
border-top:2px solid #4f5b64;
`;

 const flyout = props => (
     
   
        <StylingDiv>
            <StylingUl>
                <StylingLi><StylingAnchor>Columns</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor>Sample Preparation and Consumables</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor>Analytical Standards and Reagents</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor>Informatics and Software</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor>Chromatography</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor>Mass Spectrometry</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor>Purification/SFE</StylingAnchor></StylingLi>
                <StylingLi><StylingAnchor>Forensic Toxicology</StylingAnchor></StylingLi>
            </StylingUl>
        </StylingDiv> 

 );
 export default flyout;