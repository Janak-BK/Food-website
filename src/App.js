import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Pagenotfound from './Pages/Pagenotfound'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
