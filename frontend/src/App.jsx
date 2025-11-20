import { useEffect, useState } from "react";

function App() {
  const [entidad, setEntidad] = useState(null);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/entidad")
      .then(res => res.json())
      .then(data => setEntidad(data));

    fetch("http://localhost:4000/api/servicios")
      .then(res => res.json())
      .then(data => setServicios(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Aplicación Institucional</h1>

      {entidad && (
        <div>
          <h2>Entidad</h2>
          <p><strong>Nombre:</strong> {entidad.nombre}</p>
          <p><strong>Descripción:</strong> {entidad.descripcion}</p>
          <p><strong>Ubicación:</strong> {entidad.ubicacion}</p>
        </div>
      )}

      <h2>Servicios</h2>
      <ul>
        {servicios.map(s => (
          <li key={s.id}>
            {s.nombre} — <strong>{s.estado}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
