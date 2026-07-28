package com.vjti.hoc2027.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

/**
 * VJTI HOC 2027 - JWT Response DTO
 * 
 * Returned upon successful authentication via POST /api/auth/login.
 * Contains Bearer access token and authenticated user metadata.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {

    private String token;

    @Builder.Default
    private String tokenType = "Bearer";

    private Long id;
    private String username;
    private String email;
    private String fullName;
    private Set<String> roles;
}
