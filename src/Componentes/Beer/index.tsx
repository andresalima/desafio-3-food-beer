import React, { useEffect, useState } from 'react';
import berrAPI from '../../API/beerAPI'
import { BeerType } from '../../Types/BeerType';


const Beer = () => {
 
    const [beer, setBeer] = useState<BeerType[]>()
    const [show, setShow] = useState<Boolean>(false)
  
    useEffect(() => {
        berrAPI.get (``)
          .then(Resposta=> setBeer(Resposta.data))
      })
    
      return (
        <div className="food-beer-list food-shop">
    
    <h1>Tipos de Cerveja</h1>
      <button onClick={() => setShow(!show)}>Buscar Cerveja</button>
      <div className="beers-list">
      {
        show &&
        beer?.map((i: BeerType) => (
          <div className="beer" key={i.name}>
            <img src={i.image_url} alt="Buzz" />
            <h3>{i.name}</h3>
            <span>{i.tagline}</span>
            <small>{i.description}</small>
          </div>
                  ))
                }
                </div>
              </div>
            );
          }
          
export default Beer;
    

  

