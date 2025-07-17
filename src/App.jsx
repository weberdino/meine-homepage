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
          </nav>
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-500 to-yellow-800  min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down">
          Hi, ich bin <span className="text-indigo-400">Dino</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6" data-aos="fade-up">
          Anwendungsentwickler mit Fokus auf Backend-Logik, APIs und Datenmodelle
        </h2>
        <p className="max-w-xl mb-8" data-aos="fade-up">
          Ich entwickle gern skalierbare Backend-Lösungen und API-Schnittstellen für Webanwendungen
        </p>
        <a href="#kontakt" className="bg-indigo-500 hover:bg-indigo-600 py-3 px-6 rounded-full transition" data-aos="zoom-in">
          Kontakt aufnehmen
        </a>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="py-20 px-6 md:px-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Über mich</h2>
        <p className="max-w-3xl mb-6 text-lg leading-relaxed">
          Hi, ich entwickle gern durchdachte Backend-Systeme, baue APIs und kümmere mich darum, 
          dass Daten dort ankommen, wo sie gebraucht werden. Besonders Spaß macht mir, komplexe Logik 
          verständlich und sauber umzusetzen. <br /><br />
          Nebenbei interessiere ich mich auch für Game- und 3D-Development mit Unity oder Blender – einfach, 
          weil’s Spaß macht und man dabei viel über Struktur und Architektur lernt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
            <div>
              <h3 className="text-xl font-semibold mb-2">Code & Logik</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>OOP mit C#, PHP, Python, JavaScript</li>
                <li>SQL & Datenbankmodellierung</li>
                <li>REST APIs, CRUD-Operations</li>
                <li>Versionskontrolle mit Git</li>
              </ul>
            </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend & Sicherheit</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Node.js, Express.js</li>
              <li>OAuth, JWT, Hashing</li>
              <li>Sicherheitsgrundlagen & Authentifizierung</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Tools & Prozesse</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Jira, Confluence</li>
              <li>Scrum, Kanban</li>
              <li>Grundlagen in CI/CD</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Weitere Kenntnisse</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React, TailwindCSS</li>
              <li>GameDev mit Unity, Godot</li>
              <li>3D-Prototyping mit Blender</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projekte */}
      <section id="projekte" className="py-20 px-6 md:px-20 bg-gray-800" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10">Projekte</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Portfolio-Website</h3>
            <p className="mb-2">Meine eigene Portfolio-Website erstellt mit Vite + React.</p>
            <a href="https://github.com/weberdino/meine-homepage" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              Code auf GitHub ansehen
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">GameDev-Projekt: "Slayer"</h3>
            <p className="mb-2">Ein 3D-Game Projekt entwickelt mit Unity, mit verschiedenen Systemen entwickelt mit der Hinsicht diese Modular und Skalierbar zu gestalten.</p>
            <a href="https://github.com/weberdino/sort" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              Game-Code auf GitHub ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
        <p className="mb-4">Schreib mir eine E-Mail an:</p>
        <a href="mailto:weber.dino@gmail.com" className="text-indigo-400 underline">
          weber.dino@gmail.com
        </a>
        <p className="mt-4">oder folge mir auf <a href="https://github.com/weberdino" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">GitHub</a>.</p>

      </section>

    </div>
  );
}

export default App;
