import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello world!</h1>
  </StrictMode>,
)

const App = () => {
  return (
    <nav>
      <h1>App Name</h1>
      <div>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Login</a>
      </div>
    </nav>
  )
}