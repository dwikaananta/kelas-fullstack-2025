import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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

const Content = ({ children, title }) => {
  return (
    <div className='bg-zinc-700 text-white rounded'>
      <h1 className='text-2xl'>{title}</h1>
      {children}
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Content title="Title for content 1">
      Children of content 1
    </Content>
    <Content title="Title for content 2">
      Children of content 2
    </Content>
  </StrictMode>,
)