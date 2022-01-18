import {useNavigate} from 'react-router-dom';

function NotFound () {

  const navigate = useNavigate();

  return (
    <>
      <h1>Page not found</h1>
      <div className='back_btn' onClick={() => navigate(-1)}>Go back</div>
    </>
  )
}

export {NotFound};