package com.vjti.hoc2027.dto.request;

import com.vjti.hoc2027.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Set;

/**
 * VJTI HOC 2027 - Registration Request DTO
 * 
 * Payload wrapper for user account creation requests.
 * Enforces field validations before processing in AuthService.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Data
public class RegisterRequest {

    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Email is required")
    @Email(message = "Email address must be valid")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 100, message = "Password must be at least 6 characters")
    private String password;

    @NotBlank(message = "Full name is required")
    private String fullName;

    private String affiliation;
    private String country;
    private String designation;
    private String phone;

    /**
     * Requested roles for registration (e.g., ROLE_AUTHOR, ROLE_REVIEWER).
     */
    private Set<Role> roles;
}
