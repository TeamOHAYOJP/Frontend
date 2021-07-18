import { useState, useEffect, VFC } from 'react';
import { execTest } from "lib/api/test"

import Header from 'layouts/Header'

const App: VFC = () => {
  return (
    <div className="conteiner">
      <div>
        <Header/>

      </div>
    </div>
  )
}

export default App;
