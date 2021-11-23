

import { Route, Routes } from 'react-router';
import Homepage from './Pages/Homepage';
import Recipe from './Pages/Recipe';
import Error from './Pages/Error';
import './styles/global.css';
import Spinner from './components/Spinner';




function App() {



  return (

    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='recipes/:id' element={<Recipe />} />
      <Route path='*' element={<Error />} />
      <Route path='loading' element={<Spinner />} />
    </Routes>







  )

}

export default App;
