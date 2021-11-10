import React from 'react'
import styled from 'styled-components'

const Site = styled.h5`
color: white;
float: left;
background-color: #8b8bdb;
padding: 2px;

margin: 5px 200px 0px 10px;

`




export default function Sitename({children}) {
    return (
      <Site>
        {children}
      </Site>
    )
  }