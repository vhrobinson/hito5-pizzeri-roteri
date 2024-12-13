import { PiEyesFill } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { formatCurr } from "../../utils/formatCurr";
function CardPizza({imagecrc, title, descri, description, price}) {
    return (
      <>
      <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={imagecrc} alt="Sunset in the mountains"></img>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 flex justify-center border-b-2 border-gray-400">{title}</div>
                            <span>{descri}</span>

                            <p class="text-gray-700 text-base  border-b-2 border-gray-400"> {description} </p>
                            <div class="flex justify-center items-center border-b-2 border-gray-400">
                                <h1 className=" font-bold text-xl text-red-500">${formatCurr(price)}</h1>
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
      </>
    )
  }
  
  export default CardPizza