import './Recipy.sass';
import {useNavigate} from 'react-router-dom';

function Recipy (props) {

  const {measure, ingredient, meal} =props;
  const {strMealThumb, strMeal, strCategory, strArea, strInstructions, strYoutube} = meal;
  const navigate = useNavigate();

  return(
    <div className='meal'>
      <img className='meal_img' src={strMealThumb} alt="imgMeal" />
      <div className='meal_title'>{strMeal}</div>
      <div className='meal_category'>Category: {strCategory}</div>
      <div className='meal_area'>Area: {strArea}</div>
      <div className='meal_instruction'>{strInstructions}</div>
      <div className='meal_wrap'>
        <div className='meal_ingredient'>
          <div className='meal_ingredient_item title'>Ingredient</div>
          {ingredient.map((el, ind) => <div key={ind} className='meal_ingredient_item'><span>{el}</span></div>)}
        </div>
        <div className='meal_measure'>
          <div className='meal_measure_item title'>Measure</div>
          {measure.map((el, ind) => <div key={ind} className='meal_measure_item'>{el}</div>)}
        </div>
      </div>
      {strYoutube ? (
        <div className='meal_video'>
          <div className='meal_video_title'>Video Recipe</div>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title={strMeal} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      ) : ''}
      <div className='back_btn' onClick={() => navigate(-1)}>Go back</div>
    </div>
  )
}

export {Recipy};