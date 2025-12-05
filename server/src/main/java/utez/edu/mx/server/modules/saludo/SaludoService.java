package utez.edu.mx.server.modules.saludo;

import org.springframework.stereotype.Service;

@Service
public class SaludoService {
    public String saludar(String nombre, String apellidos) {
        return "Hola " + nombre + " " + apellidos + ", ¿Cómo estás?";
    }
}
