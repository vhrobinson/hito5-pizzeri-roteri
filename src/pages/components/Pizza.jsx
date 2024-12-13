import  { useEffect, useState } from 'react';
import { PiEyesFill } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { formatCurr } from "../../utils/formatCurr";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    // Hacemos una solicitud GET para obtener la primera pizza
    fetch('http://localhost:5000/api/pizzas/p001')
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema con la solicitud');
        }
        return response.json();
      })
      .then(data => {
        setPizza(data); // Guardamos la primera pizza en el estado
      })
      .catch(error => {
        console.error('Error al obtener la pizza:', error);
      });
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>; // Muestra un mensaje mientras se carga la pizza
  }

  return (
    <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={pizza.img} alt="Sunset in the mountains"></img>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 flex justify-center border-b-2 border-gray-400">{pizza.name}</div>
                            <span>{pizza.desc}</span>

                            <p class="text-gray-700 text-base  border-b-2 border-gray-400"><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')} </p>
                            <div class="flex justify-center items-center border-b-2 border-gray-400">
                                <h1 className=" font-bold text-xl text-red-500">${formatCurr(pizza.price)}</h1>
                            </div>
                        </div>
                        <div class="flex justify-center items-center">
                            <div>
                            <button  className="flex justify-center item-centerinline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ver Más <PiEyesFill /></button>
                            </div>
                            <div>
                            <button class="flex justify-center item-centerinline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Añadir <TiShoppingCart /></button>
                            </div>
                        </div>
                </div>
      
    </div>
  );
};

export default Pizza;