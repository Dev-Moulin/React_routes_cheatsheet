import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";

function App() {
  return (
    <BrowserRouter> {/* 📌 Engloble toute l'application pour activer le routing */}
      <Navbar />
      <main>
        <Routes> {/* 📌 Contient toutes les routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/book/:bookSlug" element={<Book />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
