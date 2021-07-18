
import { VFC } from 'react';

import { HeaderDefault }  from 'layouts/Header'
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SingIn'
      
      
const App: VFC = () => {
  return (
    <div className="h-screen conteiner bg-gray-250">
      <div>
        <HeaderDefault/>
        <SignUp />
        <SignIn />
      </div>
    </div>
  )
}

export default App;
