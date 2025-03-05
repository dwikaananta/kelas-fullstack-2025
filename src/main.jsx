import './index.css'
import { StrictMode } from 'react'
import { RootRoute } from './routes/root';
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootRoute />
  </StrictMode>,
)






// const App = () => {
//   return (
//     <div>
//       <Header />
//       <nav>
//         <h1>App Name</h1>
//         <div>
//           <a href="">Home</a>
//           <a href="">About</a>
//           <a href="">Login</a>
//         </div>
//       </nav>
//     </div>
//   )
// }

// const Content = ({ children, title }) => {
//   return (
//     <div className='bg-zinc-700 text-white rounded'>
//       <h1 className='text-2xl'>{title}</h1>
//       {children}
//     </div>
//   )
// }