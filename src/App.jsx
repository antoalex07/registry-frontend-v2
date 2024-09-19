import { Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react';

const Home = React.lazy(() => import('./pages/home/Home'));

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
