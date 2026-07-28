package com.vjti.hoc2027.exception;

import com.vjti.hoc2027.dto.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

/**
 * VJTI HOC 2027 - Global Exception Handler
 * 
 * Intercepts all uncaught exceptions thrown across REST controllers
 * and returns standardized ApiResponse JSON payloads with proper HTTP status codes.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handles 404 Resource Not Found exceptions.
     */
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> handleResourceNotFound(ResourceNotFoundException ex) {
        return new ResponseEntity<>(ApiResponse.error(ex.getMessage()), HttpStatus.NOT_FOUND);
    }

    /**
     * Handles 400 Bad Request validation exceptions.
     */
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ApiResponse<String>> handleBadRequest(BadRequestException ex) {
        return new ResponseEntity<>(ApiResponse.error(ex.getMessage()), HttpStatus.BAD_REQUEST);
    }

    /**
     * Handles 403 Forbidden access denied exceptions.
     */
    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse<String>> handleAccessDenied(AccessDeniedException ex) {
        return new ResponseEntity<>(
            ApiResponse.error("Access denied: You do not have permission to perform this action"),
            HttpStatus.FORBIDDEN
        );
    }

    /**
     * Handles DTO validation errors (@Valid failures).
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Map<String, String>>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return new ResponseEntity<>(
            ApiResponse.<Map<String, String>>builder()
                    .success(false)
                    .message("Validation failed")
                    .data(errors)
                    .build(),
            HttpStatus.BAD_REQUEST
        );
    }

    /**
     * Fallback handler for unhandled 500 server exceptions.
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<String>> handleGlobalException(Exception ex) {
        return new ResponseEntity<>(
            ApiResponse.error("An unexpected internal error occurred: " + ex.getMessage()),
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}
