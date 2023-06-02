
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Book from './components/Book'
import ItemDetails from './components/ItemDetails'
function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/'  element={ <Home/>}/>
      <Route path='/item'  element={<ItemDetails/>} />
      <Route path='/book'  element={<Book/>} />
      <Route  path='/login'  element={<Login/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
