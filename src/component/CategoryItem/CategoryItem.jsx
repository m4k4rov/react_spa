import {Link} from 'react-router-dom';

function CategoryItem (props) {
  const {strCategory, strCategoryThumb, strCategoryDescription} = props;
  return (
    <div className="card">
      <div className="card_wrap">
        <img className="card_img" src={strCategoryThumb} alt={strCategory} />
        <div className="card_name">{strCategory}</div>
        <div className="card_desc">{strCategoryDescription}</div>
      </div>
      <hr />
      <Link to = {`category/${strCategory}`} className='card_btn' >Watch category</Link>
    </div>
  )
}

export {CategoryItem};