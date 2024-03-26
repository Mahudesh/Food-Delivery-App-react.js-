import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Landingpage from './Component/Landingpage';
import Firstpage from './Component/Firstpage';
import Privacy from './Component/Privacy';
import Terms from './Component/Terms';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Firstpage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Landingpage' element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
