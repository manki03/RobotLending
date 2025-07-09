import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Soon from './pages/Soon.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/soon" element={<Soon/>} />
      </Routes>
    </Router>
  );
}