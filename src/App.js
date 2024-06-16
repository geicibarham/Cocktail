import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Ingredient from './components/ingredient/Ingredient';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="random-drink" element={<Ingredient />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
