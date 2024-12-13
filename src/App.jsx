import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pizza from './pages/components/Pizza'
import Home from './pages/Home'
import Cart from './pages/components/Cart'
import LoginPage from './pages/components/LoginPage'
import Register from './pages/components/Register'

import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
         <main className='flex-grow'> 
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/pizza' element={<Pizza />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<Register/>}/>
            
          </Routes>
        </main>
        <Footer />
      </div>
      
    </>
  )
}
export default App
