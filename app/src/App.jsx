import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dash from './pages/Dash'
import Layout from './components/Layout'
import FundsList from './pages/FundsList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dash />} />
            <Route path="/fundslist" element={<FundsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
