import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Records from './pages/Records';
import Doctors from './pages/Doctors';
import Chatroom from './pages/Chatroom';

function App() {
  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/chatroom" element={<Chatroom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
