import './App.css'
import Footer from './Components/Header'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import MyWork from './pages/Mywork';
import SecretPath from './pages/SecretPath';
import Blog from './pages/Blog';
import axios from 'axios';
axios.defaults.baseURL ='https://backendmario.onrender.com'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/mistrabajo' element={<MyWork />} />
          <Route path='/secretpath' element={<SecretPath />} />
          <Route path='/:id' element={<Blog />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
