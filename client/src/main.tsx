import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/collaborator/homepage/HomePage";
import ManagerHome from "./pages/manager/homepage/HomePage";
import About from "./pages/About";
import VisualizeComponent from "./pages/VisualizeComponent";
import { MenuProvider } from "./context/MenuContext";
import './global.css';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/manager" element={<ManagerHome />} /> // Updated component name
            <Route path="/notas" />
            <Route path="/avaliacoes" />
            <Route path="/about" element={<About/>}/>
            <Route path="/dev" element={<VisualizeComponent />} />
          </Routes>
        </BrowserRouter>
      </MenuProvider>
  </React.StrictMode>,
)
