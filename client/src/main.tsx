import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import CollaboratorHomePage from "./pages/collaborator/homepage/CollaboratorHomePage";
import A from "./pages/collaborator/GradesPage/GradesPage";
import ManagerHomePage from "./pages/manager/homepage/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from './pages/ErrorPage';
import VisualizeComponent from "./pages/VisualizeComponent";
import CycleCollaboratorPage from './pages/collaborator/cycle/CycleCollaboratorPage';
import SelfEvaluationCollaboratorPage from './pages/collaborator/SelfEvaluationCollaboratorPage';
import { MenuProvider } from "./context/MenuContext";
import { RedirectByUserType } from './utils/RedirectByUserType';
import { AuthProvider } from './context/AuthContext';
import { CycleProvider } from './context/CycleContext';
import './global.css';
import CollaboratorProfile from './pages/CollaboratorProfilePage';
import GradesManagerPage from './pages/manager/GradesManagerPage/GradesManagerPage';
import UserProfile from './pages/UserProfile';


// ideal to merge both homepages into same route

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
    <AuthProvider>
    <CycleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfile/>}/> {/* TODO profilePage (usar id da URL no useEffect para acessar rota GET user by id do backend */}
          <Route path="/profile/:id" element={<CollaboratorProfile/>}/> {/* TODO profilePage (usar id da URL no useEffect para acessar rota GET user by id do backend */}
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/dev" element={<VisualizeComponent />} />
          <Route path="/a" element={<A />} />


          {/* 4 rotas do menu */}
          <Route path="/home" element={
            <RedirectByUserType
            managerPage={ManagerHomePage} // TODO substituir por HomeManagerPage
            collaboratorPage={CollaboratorHomePage}
            />
          } />
          <Route path="/grades" element={
            <RedirectByUserType
            managerPage={GradesManagerPage} // TODO substituir por SearchUserPage
            collaboratorPage={ErrorPage} // TODO substituir por GradesCollaboratorPage
            />
          } />
          <Route path="/evaluations" element={
            <RedirectByUserType
            managerPage={CycleCollaboratorPage} // TODO substituir por CycleManagerPage
            collaboratorPage={CycleCollaboratorPage} // TODO substituir por CycleCollaboratorPage
            />
          } />

          {/* 2 rotas para os 2 fluxos de avaliação */}
          <Route path="/self-evaluation" element={
            <RedirectByUserType
            managerPage={ErrorPage} // TODO substituir por SelfEvaluationManagerPage
            collaboratorPage={SelfEvaluationCollaboratorPage} // TODO substituir por SelfEvaluationCollaboratorPage
            />
          } />
          <Route path="/others-evaluation" element={
            <RedirectByUserType
            managerPage={ErrorPage} // TODO substituir por OthersEvaluationManagerPage
            collaboratorPage={ErrorPage} // TODO substituir por OthersEvaluationCollaboratorPage
            />
          } />
        </Routes>
      </BrowserRouter>
    </CycleProvider>
    </AuthProvider>
    </MenuProvider>
  </React.StrictMode>,
)
