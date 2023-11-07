import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import CadastroProdutos from "./pages/CadastroProdutos"

function App() {

 return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/CadastroProdutos" element={<CadastroProdutos/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App