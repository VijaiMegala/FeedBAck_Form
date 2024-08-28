import { Routes, Route } from 'react-router-dom'
// import './App.css'
import { Admin } from './pages/Admin/Admin'
import { CreateForm } from './pages/CreateForm/CreateForm'


function App() {

  return (
    <>
    <Routes>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/create-form' element={<CreateForm/>}></Route>
    </Routes>
    </>
  )
}

export default App
