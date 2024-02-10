import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateForm from './components/CreateForm'
import NavBar from './components/Navbar'
import Categories from './components/Quotes'

function App() {

  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
          <Route path='/' element={(<Categories />)} />
          <Route path='/create-form' element={(<CreateForm />)}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


