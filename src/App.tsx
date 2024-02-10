import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateForm from './components/CreateForm'
import NavBar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
          <Route path='/' element={(<h1>No page</h1>)} />
          <Route path='/create-form' element={(<CreateForm />)}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


