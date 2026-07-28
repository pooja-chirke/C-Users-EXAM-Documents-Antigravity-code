package com.vjti.hoc2027.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * VJTI HOC 2027 - Bad Request Exception
 * 
 * Thrown when an incoming request fails business validation rules (e.g. duplicate username,
 * duplicate email, invalid arguments). Maps to HTTP 400 BAD_REQUEST.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
