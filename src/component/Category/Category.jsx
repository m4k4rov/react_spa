import {useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getFilteredCategory} from '../../api';
import {Preloader} from '../Preloader/Preloader';
import {MealList} from '../MealList/MealList';

function Category () {
  const {name} = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then(data => {if (data.meals) {setMeals(data.meals)} else navigate('/category', { replace: true })});
  }, [name]);

  return (
    <>
      {!meals.length ? <Preloader /> : <MealList meals = {meals} />}
      <div className='back_btn' onClick={() => navigate(-1)}>Go back</div>
    </>
  )
}

export {Category};