import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import Contact from './Pages/Contact/Contact'
import Knowledge from './Pages/Knowledge/Knowledge'
import Intervention from './Pages/Interventions/Intervention'
import Governance from './Pages/Governance/Governance'
import Foun from './Pages/Foundation/Foun'
import Home from './Pages/Home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Impact from './Pages/Impact/Impact'
import Login from './Pages/login/Login'
import Signup from './Pages/signup/signup'
import Selom from './Pages/testimonial/Selom-apanya'

const App = () => {
  return (
    <>
    <div >
      <Header/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/knowledge" element={<Knowledge/>}/>
      <Route path="/foundation" element={<Foun/>}/>
      <Route path="/intervention" element={<Intervention/>}/>
      <Route path="/governance" element={<Governance/>}/>
      <Route path='/impact' element={<Impact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/testimonial/:author' element={<Selom/>}/>
      
    </Routes>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App