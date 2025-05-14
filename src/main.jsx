import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ThreeDPage from './3d/ThreeDPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/meine-homepage">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/3d" element={<ThreeDPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
