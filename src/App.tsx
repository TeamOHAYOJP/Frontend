import { useState, useEffect, VFC } from 'react';
import { execTest } from "lib/api/test"

import Header from 'layouts/Header'
import Footer from 'layouts/Footer'

const App: VFC = () => {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App;
