package com.vjti.hoc2027.controller;

import com.vjti.hoc2027.dto.request.LoginRequest;
import com.vjti.hoc2027.dto.request.RegisterRequest;
import com.vjti.hoc2027.dto.response.ApiResponse;
import com.vjti.hoc2027.dto.response.JwtResponse;
import com.vjti.hoc2027.dto.response.UserResponse;
import com.vjti.hoc2027.entity.User;
import com.vjti.hoc2027.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

/**
 * VJTI HOC 2027 - Authentication REST Controller
 * 
 * Exposes endpoints for user login authentication, account registration,
 * and current session user profile retrieval.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    /**
     * POST /api/auth/login
     * Authenticates credentials and returns JWT Bearer token payload.
     */
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<JwtResponse>> loginUser(@Valid @RequestBody LoginRequest loginRequest) {
        JwtResponse jwtResponse = authService.authenticateUser(loginRequest);
        return ResponseEntity.ok(ApiResponse.success("User authenticated successfully", jwtResponse));
    }

    /**
     * POST /api/auth/register
     * Registers a new user account.
     */
    @PostMapping("/register")
    public ResponseEntity<ApiResponse<User>> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        User registeredUser = authService.registerUser(registerRequest);
        return new ResponseEntity<>(
                ApiResponse.success("User registered successfully. Please login to continue.", registeredUser),
                HttpStatus.CREATED
        );
    }

    /**
     * GET /api/auth/me
     * Returns sanitized profile metadata for the authenticated session user.
     */
    @GetMapping("/me")
    public ResponseEntity<ApiResponse<UserResponse>> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();
        UserResponse userResponse = authService.getCurrentUserProfile(currentUsername);
        return ResponseEntity.ok(ApiResponse.success("Current user profile retrieved", userResponse));
    }
}
