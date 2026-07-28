package com.vjti.hoc2027.service;

import com.vjti.hoc2027.dto.request.LoginRequest;
import com.vjti.hoc2027.dto.request.RegisterRequest;
import com.vjti.hoc2027.dto.response.JwtResponse;
import com.vjti.hoc2027.dto.response.UserResponse;
import com.vjti.hoc2027.entity.Role;
import com.vjti.hoc2027.entity.User;
import com.vjti.hoc2027.exception.BadRequestException;
import com.vjti.hoc2027.exception.ResourceNotFoundException;
import com.vjti.hoc2027.repository.UserRepository;
import com.vjti.hoc2027.security.JwtTokenProvider;
import com.vjti.hoc2027.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * VJTI HOC 2027 - Authentication Service Implementation
 * 
 * Implements business operations for user login, account registration,
 * BCrypt password encoding, and profile retrieval.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    @Override
    public JwtResponse authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        Set<String> roles = userPrincipal.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toSet());

        return JwtResponse.builder()
                .token(jwt)
                .tokenType("Bearer")
                .id(userPrincipal.getId())
                .username(userPrincipal.getUsername())
                .email(userPrincipal.getEmail())
                .fullName(userPrincipal.getFullName())
                .roles(roles)
                .build();
    }

    @Override
    @Transactional
    public User registerUser(RegisterRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            throw new BadRequestException("Username is already taken: " + registerRequest.getUsername());
        }

        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new BadRequestException("Email address is already in use: " + registerRequest.getEmail());
        }

        Set<Role> roles = new HashSet<>();
        if (registerRequest.getRoles() != null && !registerRequest.getRoles().isEmpty()) {
            roles.addAll(registerRequest.getRoles());
        } else {
            roles.add(Role.ROLE_AUTHOR); // Default assigned role for new user registration
        }

        User user = User.builder()
                .username(registerRequest.getUsername())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .fullName(registerRequest.getFullName())
                .affiliation(registerRequest.getAffiliation())
                .country(registerRequest.getCountry())
                .designation(registerRequest.getDesignation())
                .phone(registerRequest.getPhone())
                .roles(roles)
                .build();

        return userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getCurrentUserProfile(String username) {
        User user = userRepository.findByUsernameOrEmail(username, username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));

        Set<String> roles = user.getRoles().stream()
                .map(Role::name)
                .collect(Collectors.toSet());

        return UserResponse.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .fullName(user.getFullName())
                .affiliation(user.getAffiliation())
                .country(user.getCountry())
                .designation(user.getDesignation())
                .phone(user.getPhone())
                .roles(roles)
                .build();
    }
}
