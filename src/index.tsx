import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Form from './components/Form.tsx'
import List from './components/List.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { useState } from 'react'

function AppProvider() {
  // Setting the state to pass down the languages as props to the components: 
  const initialState = [{name: 'Succession', rating: 1}]
  const [show, setShow] = useState(initialState)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        <Route index element={<List show={show}/>}/>
        <Route path="add" element={<Form setShow={setShow}/>}/>
      </Route>
    )
  )

  return <RouterProvider router={routes}/>
}

document.addEventListener('DOMContentLoaded', () => {
createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider/>,
)
})
