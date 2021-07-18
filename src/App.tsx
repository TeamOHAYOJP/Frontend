import { VFC } from 'react';

import { HeaderDefault }  from 'layouts/Header'

const App: VFC = () => {
  return (
    <div className="h-screen conteiner bg-gray-250">
      <div>
        <HeaderDefault/>
      </div>
    </div>
  )
}

export default App;
