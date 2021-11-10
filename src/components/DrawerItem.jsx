import React from 'react'
import styled from 'styled-components'

const Drawer = styled.h5`
margin-right: 30px;
    color: white;

    padding: 5px;



`

export default function DrawerItem({children}) {
  return (
    <Drawer>
      {children}
    </Drawer>
  )
}
