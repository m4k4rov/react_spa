import {MealItem} from '../MealItem/MealItem';

function MealList ({meals = []}) {
  return (
    <div className="list">
      {meals.map(el => <MealItem key = {el.idMeal} {...el} />)}
    </div>
  )
}

export {MealList};