import { useState, useEffect, VFC } from 'react';
import { execTest } from "lib/api/test"

import './App.css';

const App: VFC = () => {
  const [message, setMessage] = useState<string>("")

  const handleExecTest = async () => {
    const res = await execTest()

    if (res.status === 200) {
      setMessage(res.data.message)
    }
  }

  useEffect(() => {
    handleExecTest()
  }, [])

  return (
    <h1>{message}</h1>
  )
}

export default App;
