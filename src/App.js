import { useState } from 'react';

import Links from './components/Links';
import LogoImg from './components/Logo';
import './App.css'
function App(){
 return (
    <div className="main">
     <div>
    <LogoImg><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1qgWfKaFQucxcGCmMb3buBnO_s6DkL_vm8p4qAW_jFvmKWyb20wWmt0xwYfuHGTSdY8&usqp=CAU"/>
    </LogoImg>
    </div>
    <div className="App">
    <Links>Sign Up</Links>
    <Links >Sign In </Links>
    </div>
    </div>
  
 )
}

export default App;
