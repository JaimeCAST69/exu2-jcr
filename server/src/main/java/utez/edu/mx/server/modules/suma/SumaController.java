package utez.edu.mx.server.modules.suma;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import utez.edu.mx.server.utils.APIResponse;

@RestController
@RequestMapping("/operaciones")
@CrossOrigin(origins = "*")
public class SumaController {

    private final SumaService sumaService;

    public SumaController(SumaService sumaService) {
        this.sumaService = sumaService;
    }

    @PostMapping("/suma")
    public ResponseEntity<APIResponse> sumar(@RequestBody DTOSuma dto) {
        double resultado = sumaService.sumar(dto.getNumero1(), dto.getNumero2());
        APIResponse response = new APIResponse(
                "Suma generada exitosamente",
                resultado,
                HttpStatus.OK);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
