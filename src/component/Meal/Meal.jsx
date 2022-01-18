import {useEffect, useState} from 'react';
import {getMealById} from '../../api';
import {useParams, useNavigate} from 'react-router-dom';
import {Preloader} from '../Preloader/Preloader';
import {Recipy} from '../Recipy/Recipy'

function Meal () {

  const {id} = useParams();
  const [meal, setMeal] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    getMealById(id).then(data => {
      if (data.meals) {
        setMeal(data.meals[0]);
        let ingredientNew = [];
        let measureNew = [];
        for (let i = 1; i<21; i++) {
            if (data.meals[0][`strIngredient${i}`]) {
              ingredientNew.push(data.meals[0][`strIngredient${i}`]);
              measureNew.push(data.meals[0][`strMeasure${i}`]);
            }
        }
        setIngredient(ingredientNew);
        setMeasure(measureNew);
      } else navigate('/meal', { replace: true })
    })
  },[id]);

  return (
    <>
      {!meal ? <Preloader /> : <Recipy meal={meal} ingredient={ingredient} measure={measure} />}
    </>
  )
}

export {Meal};