import { useState } from 'react';

import DrawerItem from './components/DrawerItem'
import Sitename from './components/Sitename';
import './App.css'
function App(){
    const [theme,setTheme]=useState("light");
 return (
    <div className="main">
     <div>
    <Sitename>Site Name
    </Sitename>
    </div>
    <div className="App">
    <DrawerItem>About us </DrawerItem>
    <DrawerItem >Prices </DrawerItem>
    <DrawerItem >Start Page</DrawerItem>
    <DrawerItem >Offer</DrawerItem>
    <DrawerItem >Contact</DrawerItem>
    </div>
    </div>
  
 )
}

export default App;
