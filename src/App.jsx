
import Home from "./Components/Home/home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import profile from './assets/images/head-whatsapp-2.png'
function App() {


  return (
    <>
      <BrowserRouter>
    <FloatingWhatsApp phoneNumber='+44 2035001420' accountName='Home soluctions' avatar={profile}/>
   
    
    <Routes>
       <Route path="/" element={<Home/>}/>
    </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App
