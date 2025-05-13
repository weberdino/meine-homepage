// src/App.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down">
          Hi, ich bin <span className="text-indigo-400">Dino Weber</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6" data-aos="fade-up">
          Webentwickler & Coding-Enthusiast
        </h2>
        <p className="max-w-xl mb-8" data-aos="fade-up">
          Ich entwickle gerne Funktionen um diese mit .
        </p>
        <a href="#kontakt" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition" data-aos="zoom-in">
          Kontakt aufnehmen
        </a>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="py-20 px-6 md:px-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Über mich</h2>
        <p className="max-w-3xl">
          Ich bin ein heranstrebender Fullstack Entwickler
          Neben meiner Arbeit als Software Enginneer beschäftige ich mich gerne mit Game Development und kreativen Coding-Experimenten.
        </p>
      </section>

      {/* Projekte */}
      <section id="projekte" className="py-20 px-6 md:px-20 bg-gray-800" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10">Projekte</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Portfolio-Website</h3>
            <p className="mb-2">Meine eigene Portfolio-Website erstellt mit Vite + React.</p>
            <a href="https://github.com/dein-github/portfolio" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              Code auf GitHub ansehen
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">GameDev-Projekt: "Slayer"</h3>
            <p className="mb-2">Ein 3D-Game Projekt entwickelt mit Unity, mit verschiedenen Systemen entwickelt mit der Hinsicht diese Modular und Skalierbar zu gestalten.</p>
            <a href="https://github.com/dein-github/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              Game-Code auf GitHub ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <li>Unity /C#</li>
          <li>OOP, PHP und Python</li>
          <li> --- </li>
          <li>React / Vite / JavaScript</li>
          <li>Node.js / Express.js</li>
          <li>Unity / Godot Game Development</li>
          <li>HTML / CSS / TailwindCSS</li>
        </ul>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6 md:px-20 text-center bg-gray-800" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
        <p className="mb-4">Schreib mir eine E-Mail an:</p>
        <a href="mailto:dein.email@example.com" className="text-indigo-400 underline">
          dein.email@example.com
        </a>
        <p className="mt-4">oder folge mir auf <a href="https://github.com/dein-github" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">GitHub</a>.</p>
      </section>

    </div>
  );
}

export default App;
