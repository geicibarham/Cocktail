
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Ingredient from './components/ingredient/Ingredient';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="random-drink" element={<Ingredient />} />
        </Routes>
        <Footer />
  </BrowserRouter>
  );
}

export default App;
