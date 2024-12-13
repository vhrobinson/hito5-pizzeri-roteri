import { formatCurr } from "../utils/formatCurr";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

function Navbar() {
    const total = 25000;
    const token = false;
  return (
    <>
  <nav className="bg-gray-800">
  <div className="px-2 sm:px-6 lg:px-8 h-14 bg-gradient-to-r from-purple-600 to-pink-600">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
       
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
       
          <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          
        </div>
        <div className="hidden sm:ml-6 sm:block item-center">
          <div className="flex space-x-4">
           
            <Link to={'/'} href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Pizzería Vittorio-Emanuele</Link>
            <Link to={'/'} href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">HOME</Link>  
         
            <div>
            
                { token ? (
                    <div>
                           
                    <Link to={'/'} href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Profile</Link>
                    <Link to={'/'} href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</Link>
                    </div>
                ):(
                    <div>
                    
                      
                    

                    <Link to={'/login'} href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</Link>
                    <Link to={'/register'} href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Register</Link>
                    </div>
                )
                }
            </div>
          </div>
        </div>
      </div>
       

        
        <div>
          <div>
            <Link to={'/cart'}>
            <button type="button" >              
              <span className="flex justify-center items-center m-3"><TiShoppingCart /></span>
              
            </button>
            <span>${formatCurr(total)}</span>
            </Link>
          </div>

  
          
        </div>
     
    </div>
  </div>

  
</nav>

    </>
  )
}

export default Navbar