import React from 'react';
import { Routes } from './routes/app.routes'


function App() {
  return <div className="text-center bg-gray-300 h-screen">
    <h1 className="text-3xl font-semibold uppercase">My app</h1>
    {Routes()}
  </div>
}

export default App; 
