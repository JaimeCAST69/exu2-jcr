package utez.edu.mx.server.modules.saludo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import utez.edu.mx.server.utils.APIResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SaludoController {

    private final SaludoService saludoService;

    public SaludoController(SaludoService saludoService) {
        this.saludoService = saludoService;
    }

    @PostMapping("/saludo")
    public ResponseEntity<APIResponse> saludar(@RequestBody DTOSaludo dto) {
        String mensaje = saludoService.saludar(dto.getNombre(), dto.getApellidos());
        APIResponse response = new APIResponse(
                "Saludo generado exitosamente",
                mensaje,
                HttpStatus.OK);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
