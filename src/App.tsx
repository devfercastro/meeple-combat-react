import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const increse = (): boolean => {
    let out: boolean = false;

    if (count < 10) {
      setCount((count) => count + 1);
      out = true;
    } else out = false;

    return out;
  }

  const decrese = (): boolean => {
    let out: boolean = false;

    if (count > 0) {
      setCount((count) => count - 1);
      out = true;
    } else out = false;

    return out;
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>Count is {count}</div>
        <button onClick={() => increse()}>
          Increse
        </button>
        <button onClick={() => decrese()}>
          Decrese
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
