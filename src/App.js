
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import F from './components/f';

import Formwithhook from './components/Formwithhook';
import Form from './components/Formwithouthooklib';

function App() {
  return (
    <div className="App">
      <div >
        <NavLink to='/'>Form1</NavLink>
        <NavLink to='/2'>Form2</NavLink>
        <NavLink to='/3'>Form3</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Formwithhook/>}/>
        <Route path='/2' element={<F/>}/>
        <Route path='/3' element={<Form/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
