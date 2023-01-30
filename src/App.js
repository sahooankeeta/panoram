import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import {Login,SignUp,Header} from "./components";
const App=()=>{
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
