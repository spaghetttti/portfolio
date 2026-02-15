import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.scss';

import Layout from './pages/layout/layout.component.jsx';
import Home from './pages/home/home.page.jsx';
import About from './pages/about/about.page';
import Projects from './pages/projects/projects.page';
import Contact from './pages/contact/contact.page';
import FavoriteMusic from './pages/about/favorite';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='favorite' element={<FavoriteMusic/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
