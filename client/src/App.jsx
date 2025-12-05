import { useState } from 'react';
import SaludoController from './SaludoController.js';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSaludar = async () => {
    if (!nombre || !apellidos) return;

    const response = await SaludoController.saludar({ nombre, apellidos });
    if (!response.error) {
      setMensaje(response.data);
    } else {
      setMensaje('Error al saludar');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Jaime Castañeda Rodriguez - 10mo A</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h2>Examen Unidad 2</h2>
        <hr />

        <div className="mb-3">
          <label className="form-label">Nombres</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tus nombres"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellidos</label>
          <input
            type="text"
            className="form-control"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Ingresa tus apellidos"
          />
        </div>

        <button onClick={handleSaludar} className="btn btn-primary">Saludar</button>

        {mensaje && (
          <div>
            {mensaje}
          </div>
        )}
      </div>
    </>
  )
}

export default App