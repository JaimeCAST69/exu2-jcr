const SaludoController = {};
const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

SaludoController.saludar = async (payload) => {
    try {
        const response = await fetch(`${API_URL}/saludo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    } catch (err) {
        console.error(err);
        return { error: true, message: 'Error de conexión' };
    }
}

export default SaludoController;