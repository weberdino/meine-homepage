// src/App.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div >
          <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <Link to="/">Home</Link>
            <Link to="/3d">3D Page</Link>
            <Link to="/test">Test</Link>
          </nav>
      
      {/* Hero */}
      <div className="text-red">Tailwind funktioniert?</div>
    </div>
  );
}

export default App;
