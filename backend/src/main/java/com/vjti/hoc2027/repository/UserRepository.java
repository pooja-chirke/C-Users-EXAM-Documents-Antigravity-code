package com.vjti.hoc2027.repository;

import com.vjti.hoc2027.entity.Role;
import com.vjti.hoc2027.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * VJTI HOC 2027 - User JPA Repository
 * 
 * Data access layer for User entity persistence and authentication queries.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Finds a user by unique username.
     */
    Optional<User> findByUsername(String username);

    /**
     * Finds a user by unique email address.
     */
    Optional<User> findByEmail(String email);

    /**
     * Finds a user by matching either username OR email address.
     * Used during authentication to allow users to log in with either identifier.
     */
    Optional<User> findByUsernameOrEmail(String username, String email);

    /**
     * Checks if a user already exists with the given username.
     */
    Boolean existsByUsername(String username);

    /**
     * Checks if a user already exists with the given email address.
     */
    Boolean existsByEmail(String email);

    /**
     * Retrieves all users possessing a specific role (e.g. all REVIEWERs or CHAIRs).
     */
    List<User> findByRolesContaining(Role role);
}
