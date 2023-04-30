import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route
      path='/about'
      element={<About />}
    />
    <Route
      path='/contact'
      element={<Contact />}
    />

    <Route
      path='*'
      element={<Error />}
    />
  </>
));

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
