
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import { ShopContextProvider } from './Context/Shop-Context';
function App() {

  return (
   <div className='app'>
     <ShopContextProvider >
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </ShopContextProvider>
   </div>
  )
}

export default App
