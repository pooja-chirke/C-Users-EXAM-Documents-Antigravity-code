package com.vjti.hoc2027.service;

import com.vjti.hoc2027.dto.request.LoginRequest;
import com.vjti.hoc2027.dto.request.RegisterRequest;
import com.vjti.hoc2027.dto.response.JwtResponse;
import com.vjti.hoc2027.dto.response.UserResponse;
import com.vjti.hoc2027.entity.User;

/**
 * VJTI HOC 2027 - Authentication Service Interface
 * 
 * Defines business logic contracts for user authentication, account registration,
 * and current session profile retrieval.
 * 
 * @author VJTI HOC 2027 Development Team
 */
public interface AuthService {

    /**
     * Authenticates user credentials and generates a signed Bearer JWT token.
     */
    JwtResponse authenticateUser(LoginRequest loginRequest);

    /**
     * Registers a new user account with BCrypt password hashing and role assignment.
     */
    User registerUser(RegisterRequest registerRequest);

    /**
     * Retrieves sanitized user profile response for the authenticated user.
     */
    UserResponse getCurrentUserProfile(String username);
}
