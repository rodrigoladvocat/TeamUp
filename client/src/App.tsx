import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <>
      <MenuProvider>
        <BrowserRouter>
          <Routes>
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
