package utez.edu.mx.server.utils;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class APIResponse {
    private String message;
    private Object data;
    private boolean error;
    private HttpStatus status;

    public APIResponse(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
    }

    public APIResponse(String message, Object data, HttpStatus status) {
        this.message = message;
        this.data = data;
        this.status = status;
    }

    public APIResponse(String message, HttpStatus status, boolean error) {
        this.message = message;
        this.status = status;
        this.error = error;
    }
}