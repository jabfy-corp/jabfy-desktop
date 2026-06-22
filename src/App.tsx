import { useState } from 'react'

function App() {
  const [status, setStatus] = useState('Ready')

  return (
    <div className="app">
      <header className="header">
        <h1>Jabfy Desktop</h1>
        <p className="status">Status: {status}</p>
      </header>
      <main className="main">
        <div className="card">
          <h2>Welcome to Jabfy</h2>
          <p>Smart Home orchestration powered by local AI</p>
          <button onClick={() => setStatus('Connected')}>
            Connect to Core
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
