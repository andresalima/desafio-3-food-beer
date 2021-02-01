import React, {useEffect, useState} from 'react';
import foodApi from '../../API/foodAPi'
import { CategoriesType, MealsType } from '../../types/FoodType';


const Foods = () => {

  const [category, setCategory] = useState<CategoriesType[]>()
  const [categoryName, setCategoryName] = useState<string>()
  const [meals, setMeals] = useState<MealsType[]>()

  useEffect(() => {
    foodApi.get(`/categories.php`)
      .then(resposta => setCategory(resposta.data.categories))
  }, [])

  useEffect(() => {
    foodApi.get(`/filter.php?c=${categoryName}`)
      .then(resposta => setMeals(resposta.data.meals))
  }, [categoryName])

  useEffect(() => {
    if (categoryName !== undefined) {
      foodApi.get(`/search.php?s=${categoryName}`)
        .then(resposta => setMeals(resposta.data.meals))
    }
  }, [categoryName])



  return (
    <div className="food-beer-list food-shop">
      <h1>Tipos de pratos</h1>
      <p>
        Selecione uma categoria ou digite a comida (em inglês):
        <input type="text" placeholder="Digite a comida..." onChange={(event) => setCategoryName(event?.target.value)}/>
      </p>

      <ul>
          {
            category?.map((i: CategoriesType) => (
              <div key={i.idCategory} className="catalog">
              <img src={i.strCategoryThumb} alt={i.strCategory}/>
              <li onClick={() => setCategoryName(i.strCategory)}>{i.strCategory}</li>
              </div>
            ))
          }
      </ul>


      <h2>Tipo selecionado: <strong>{categoryName}</strong></h2>
      <div className="food-container">
        {
          meals?.map((i: MealsType) =>(
            <div className="food-item" key={i.idMeal}>
              <img src={i.strMealThumb} alt={i.strMeal}/>
              <p>{i.strMeal}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Foods;