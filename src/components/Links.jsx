import React from 'react'
import styled from 'styled-components'

const Link = styled.h5`
position: relative;
background-color: #370561;
color: white;
font-size: 25px;
margin-right: 15px;
padding: 5px;
border-radius: 6px;
cursor: pointer;

@media(max-width:800px){
 font-size: 20px;
 background-color: #0d3b0d;
}

`
export default function Links({children}) {
  return (
    <Link>
      {children}
    </Link>
  )
}
