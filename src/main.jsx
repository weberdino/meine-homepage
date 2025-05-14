import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThreeDPage from './3d/ThreeDPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/meine-homepage">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/3d" element={<ThreeDPage />} />
    </Routes>
  </BrowserRouter>
);
