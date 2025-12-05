
package utez.edu.mx.server.modules.suma;

import org.springframework.stereotype.Service;

@Service
public class SumaService {
    public double sumar(double numero1, double numero2) {
        return numero1 + numero2;
    }
}
