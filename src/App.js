import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddEmp from './components/AddEmp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/add' element={<AddEmp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
