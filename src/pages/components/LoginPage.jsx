import { useState } from 'react';

function LoginPage() {
  
  const [password, setPassword] = useState('');
  

  const validarPassword = () => {
    if (password.length >= 6) {
      alert("Contraseña aceptada.");
    } else {
      alert("La contraseña debe tener al menos 6 caracteres.");
    }
  };

  return (

      <form  className="max-w-sm mx-auto" autoComplete="off">
        <h1 className="text-3xl">Login </h1>
          <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-white">Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white
               focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="name@email.com" required />
          </div>
          <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-white
              ">Password</label>
        <input type="password" id="password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white
               focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" required />
          </div>
          
       
          <button onClick={validarPassword} type="submit" className="text-white
           bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Login</button>
          
      </form>

  );
};
  
  export default LoginPage