import { useState, useEffect, VFC } from 'react';
import { execTest } from "lib/api/test"

import Header from 'layouts/Header'

const App: VFC = () => {
  return (
    <div className="h-screen conteiner bg-gray-250">
      <div>
        <Header/>

      </div>
    </div>
  )
}

export default App;
