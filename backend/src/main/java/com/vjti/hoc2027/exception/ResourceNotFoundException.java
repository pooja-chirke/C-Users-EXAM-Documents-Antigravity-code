package com.vjti.hoc2027.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * VJTI HOC 2027 - Resource Not Found Exception
 * 
 * Thrown when a requested entity (User, Paper, Track, Review) cannot be found in the database.
 * Maps to HTTP 404 NOT_FOUND.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not found with %s : '%s'", resourceName, fieldName, fieldValue));
    }
}
