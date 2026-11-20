
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout_Page from './pages/Layout_Page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout_Page/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
