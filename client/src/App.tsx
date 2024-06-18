import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/collaborator/homepage/HomePage";
import About from "./pages/About";
import { MenuProvider } from "./context/MenuContext";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <MenuProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/notas" />
            <Route path="/avaliacoes" />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </>
  );
}

export default App;
