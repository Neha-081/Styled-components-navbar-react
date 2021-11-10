import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
img{
  position: absolute;
height: 50px;
width: 140px;



}
@media(max-width:700px){
  img{
    display: none;
  }

}


`




export default function LogoImg({children}) {
    return (
      <Logo>
        {children}
      </Logo>
    )
  }