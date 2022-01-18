import { useState, useEffect } from 'react';
import {getAllCategories} from '../../api';
import {Preloader} from '../Preloader/Preloader';
import {CategoryList} from '../CategoryList/CategoryList';
import {Search} from '../Search/Search';
import {useLocation, useNavigate} from 'react-router-dom';

function Home () {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const {pathname, search} = useLocation();
  const navigate = useNavigate();


  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
    navigate(`${pathname}?search=${str}`);
  }

  useEffect(()=> {
    getAllCategories().then(data => {
      setCatalog(data.categories);
      setFilteredCatalog(search ? data.categories.filter(item =>
        item.strCategory
        .toLowerCase()
        .includes(search.split('=')[1].toLowerCase()))
        : data.categories);
    });
  }, [search])

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoryList catalog = {filteredCatalog} />}
    </>
  )
}

export {Home};