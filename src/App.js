
import React from 'react'
import StudentLoginPage from './StudentLoginPage'
import "./App.css"
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataTable from './DataTable'
import GeneratePassword from './GeneratePassword'
function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<StudentLoginPage/>}/>
     <Route path='/data' element={<DataTable/>}/>
     <Route path='/passwordgenerate' element={<GeneratePassword/>}/>
    </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
