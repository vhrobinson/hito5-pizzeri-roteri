import { useEffect, useState} from "react"
import axios from "axios"
import Header from "./components/Header"
import CardPizza from "./components/CardPizza"
import "./Home.css"

function Home() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    // Hacemos una solicitud GET a la API del backend
    axios.get('http://localhost:5000/api/pizzas')
      .then(response => {
        setPizzas(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Hubo un error al obtener las pizzas:', error);
      });
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="grid-container">
        {
          pizzas.map((pizza) => {
            return <div key={pizza.id}>  
                <CardPizza
                  imagecrc={pizza.img}
                  title={pizza.name}
                  descri={pizza.desc}
                  description={
                    <div>
                      {pizza.ingredients.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                      ))}
                    </div>
                  }
                  price={pizza.price}
                /> </div>
             
             
            })
           
          }
      </div>

    </>
  )
}



export default Home