import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import Login from './component/Login';


const App = () => {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter> 
  );
};

export default App;
