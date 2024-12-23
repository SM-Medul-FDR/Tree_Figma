
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import HomePage from './Pages/HomePage'
import About from './Pages/About/About'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<LayoutOne/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
      </Route>
    )
  )
  return (
    <>
          <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
