import './App.css'

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
      <header>
        <h1>Bienvenido a DelCarmen</h1>
        <p>Una landing page simple con React + Vite + TS</p>
              </header>

      <main>
        <section style={{ marginTop: "2rem" }}>
          <h2>Sobre el proyecto</h2>
          <p>
            Este sitio está desplegado en GitHub Pages usando Vite y TypeScript.
            <p>Se convertira en una single page application para la parroquia Nuestra Señora del Carmen y San Maximiliano Kolbe</p>
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Contáctanos
          </button>
        </section>
      </main>

      <footer style={{ marginTop: "3rem", fontSize: "14px", color: "#555" }}>
        © 2026 DelCarmen. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
