import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from "./pages/collaborator/homepage/HomePage";
import ManagerHome from "./pages/manager/homepage/HomePage";
import About from "./pages/About";
import ErrorPage from './pages/ErrorPage';
import VisualizeComponent from "./pages/VisualizeComponent";
import { MenuProvider } from "./context/MenuContext";
import { RedirectByUserType } from './utils/RedirectByUserType';
import './global.css';
import { AuthProvider } from './context/AuthContext';

// ideal to merge both homepages into same route

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manager" element={<ManagerHome />} /> {/* TODO registerPage */}
          <Route path="/home" element={
            <RedirectByUserType
              managerPage={ManagerHome} // TODO substituir por HomeManagerPage
              collaboratorPage={Home}
            />
          } />
          <Route path="/grades" element={
            <RedirectByUserType
              managerPage={ErrorPage} // TODO substituir por SearchUserPage
              collaboratorPage={ErrorPage} // TODO substituir por GradesCollaboratorPage
            />
          } />
          <Route path="/cycle" element={
            <RedirectByUserType
              managerPage={ErrorPage} // TODO substituir por CycleManagerPage
              collaboratorPage={ErrorPage} // TODO substituir por CycleCollaboratorPage
            />
          } />
          <Route path="/self-evaluation" element={
            <RedirectByUserType
              managerPage={ErrorPage} // TODO substituir por SelfEvaluationManagerPage
              collaboratorPage={ErrorPage} // TODO substituir por SelfEvaluationCollaboratorPage
            />
          } />
          <Route path="/others-evaluation" element={
            <RedirectByUserType
              managerPage={ErrorPage} // TODO substituir por OthersEvaluationManagerPage
              collaboratorPage={ErrorPage} // TODO substituir por OthersEvaluationCollaboratorPage
            />
          } />
          <Route path="/profile/:id" element={<ErrorPage/>}/> {/* TODO profilePage (usar id da URL no useEffect para acessar rota GET user by id do backend */}
          <Route path="/about" element={<About/>}/>
          <Route path="/dev" element={<VisualizeComponent />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </MenuProvider>
  </React.StrictMode>,
)
