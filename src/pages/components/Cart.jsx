
import { pizzaCart } from "./data/pizzaCart"
import { useState } from "react"



function Cart() {
    const [carro,setCarro]=useState(pizzaCart)
    const handleAgregar = (index) =>{
        carro[index].count++
        setCarro([...carro])

    }
    const handleQuitar = (index) =>{
        carro[index].count--
        const existePizza = carro.filter((pizza) => pizza.count > 0)
        setCarro([...existePizza])
        
    }
    return (
        <>
            <div className="space-y-4">
                {carro.map((pizza, index) => {
                    return (
                        <div className="flex items-center p-4 border rounded-lg shadow-lg" key={index}>
                            <img src={pizza.img} alt={pizza.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                            <div className="flex-1 text-center text-lg font-medium">{pizza.name}</div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => handleAgregar(index)} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition">+</button>
                                <div className="text-lg">{pizza.count}</div>
                                <button   onClick={() => handleQuitar(index)} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition">-</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}



export default Cart