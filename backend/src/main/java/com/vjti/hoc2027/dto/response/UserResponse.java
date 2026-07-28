package com.vjti.hoc2027.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

/**
 * VJTI HOC 2027 - User Response DTO
 * 
 * Sanitized profile details returned for current user and user management endpoints.
 * Omits sensitive credentials like password hashes.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Long id;
    private String username;
    private String email;
    private String fullName;
    private String affiliation;
    private String country;
    private String designation;
    private String phone;
    private Set<String> roles;
}
