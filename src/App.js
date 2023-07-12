import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="quote" element={<QuotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
