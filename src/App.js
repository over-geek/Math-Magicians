import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
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
            <Route path="calculator" element={<Calculator />} />
            <Route path="quote" element={<Quote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
