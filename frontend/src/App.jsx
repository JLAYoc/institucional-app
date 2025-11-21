import QueEsMP from "./components/QueEsMP";
import ServiciosClave from "./components/ServiciosClave";
import "./App.css";

export default function App() {
  return (
    <div>
      <header className="header">
        <div className="top-bar"></div>
        <h1>Ministerio Público</h1>
        <h2>República de Guatemala</h2>
      </header>

      <main className="container">
        <section className="section">
          <QueEsMP />
        </section>

        <section className="section">
          <ServiciosClave />
        </section>
      </main>
    </div>
  );
}
