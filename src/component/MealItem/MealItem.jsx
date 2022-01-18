import {Link} from 'react-router-dom';

function MealItem (props) {
  const {strMeal, strMealThumb, idMeal} = props;
  return (
    <div className="card">
      <div className="card_wrap">
        <img className="card_img" src={strMealThumb} alt={idMeal} />
        <div className="card_name">{strMeal}</div>
      </div>
      <Link to = {`/meal/${idMeal}`} className='card_btn' >Watch meal</Link>
    </div>
  )
}

export {MealItem};