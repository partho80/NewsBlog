import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import  { Header }  from './components';
import {HomePage, DetailPage, LoginPage, WritePage} from "./pages"

function App() {

  return (
    <div className="App">   
      <Header />
        <Routes >         
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/" element={<HomePage />}/>
          <Route />
        </Routes>
    </div>
  );
}

export default App;
