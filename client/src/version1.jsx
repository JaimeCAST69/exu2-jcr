import { useState } from 'react';
import SaludoController from './SaludoController.js';

import OperacionesController from './SumaController.js';

function App() {
    // Estados para los dos números y el resultado
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [resultado, setResultado] = useState(null)
    const [mensaje, setMensaje] = useState('')

    const handleSumar = async (e) => {
        e.preventDefault()

        // Validamos que haya números
        if (numero1 === '' || numero2 === '') {
            setMensaje('Por favor ingresa ambos números')
            return
        }

        // Preparamos el objeto para enviar (convertimos a float o int según necesites)
        const payload = {
            numero1: parseFloat(numero1),
            numero2: parseFloat(numero2)
        }

        // Llamamos al controlador
        const response = await OperacionesController.sumar(payload)

        if (!response.error) {
            // Asumiendo que tu backend devuelve el resultado en 'data'
            setResultado(response.data)
            setMensaje('Suma realizada con éxito')
        } else {
            setMensaje('Ocurrió un error al sumar')
            setResultado(null)
        }
    }

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
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="text-center mb-4">Realizar Suma</h3>

                                <form onSubmit={handleSumar}>
                                    <div className="mb-3">
                                        <label className="form-label">Número 1</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={numero1}
                                            onChange={(e) => setNumero1(e.target.value)}
                                            placeholder="0"
                                            step="any" // Permite decimales
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Número 2</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={numero2}
                                            onChange={(e) => setNumero2(e.target.value)}
                                            placeholder="0"
                                            step="any"
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Calcular Suma
                                        </button>
                                    </div>
                                </form>

                                {/* Sección de Resultados */}
                                <div className="mt-4">
                                    {mensaje && (
                                        <div className={`alert ${resultado !== null ? 'alert-success' : 'alert-danger'} text-center`}>
                                            {mensaje}
                                        </div>
                                    )}

                                    {resultado !== null && (
                                        <div className="text-center">
                                            <h4>Resultado: <span>{resultado}</span></h4>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
/*
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
          <div className="alert alert-success mt-4" role="alert">
            {mensaje}
          </div>
        )}
      </div>
    </>
  )
}

export default App*/