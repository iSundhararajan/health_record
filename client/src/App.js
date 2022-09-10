import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Records from './pages/Records';

function App() {
  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
