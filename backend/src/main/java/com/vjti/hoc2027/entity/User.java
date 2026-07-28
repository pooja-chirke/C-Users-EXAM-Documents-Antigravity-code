package com.vjti.hoc2027.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

/**
 * VJTI HOC 2027 - User JPA Entity
 * 
 * Maps application users to the `users` and `user_roles` MySQL tables.
 * 
 * Features:
 * - Unique username and email constraints
 * - Encrypted BCrypt password storage
 * - Institutional affiliation and contact details
 * - Eagerly loaded Set of Role enums for Spring Security authority mapping
 * - Automatic timestamp auditing (@CreationTimestamp, @UpdateTimestamp)
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(length = 150)
    private String affiliation;

    @Column(length = 100)
    private String country;

    @Column(length = 100)
    private String designation;

    @Column(length = 20)
    private String phone;

    /**
     * Maps user roles collection from `user_roles` table.
     * Eagerly fetched so authorities are immediately available during JWT authentication.
     */
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    @Builder.Default
    private Set<Role> roles = new HashSet<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
