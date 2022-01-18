import {Footer} from './component/Footer/Footer';
import {Header} from './component/Header/Header';
import {Routes, Route} from 'react-router-dom';

import {Home} from './component/Home/Home';
import {NotFound} from './component/NotFound/NotFound';
import {Category} from './component/Category/Category';
import {Meal} from './component/Meal/Meal';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='category/:name' element={<Category />} />
            <Route path='meal/:id'  element={<Meal />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
