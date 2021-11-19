import LandingPage from './pages/LandingPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Categorie from './pages/Categorie';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/categorie" element={<Categorie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
