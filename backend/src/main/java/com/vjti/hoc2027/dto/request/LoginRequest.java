package com.vjti.hoc2027.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * VJTI HOC 2027 - Login Request DTO
 * 
 * Payload wrapper for user authentication requests.
 * Accepts either username or email address along with password.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Data
public class LoginRequest {

    @NotBlank(message = "Username or email is required")
    private String usernameOrEmail;

    @NotBlank(message = "Password is required")
    private String password;
}
