import Home from './components/Home';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Product from './components/Product';
import Credit from './components/Credit';

function App() {


  return (
    <>
      <BrowserRouter>
      <Navigation/>

        <Routes>
          <Route index element={<Home />} />
          <Route path = "home" element ={<Home/>}></Route>
          <Route path = "shop"  element ={<Product/>}> </Route>
          <Route path = "credit"  element ={<Credit/>}> </Route>

        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
