package com.vjti.hoc2027.security;

import com.vjti.hoc2027.entity.User;
import com.vjti.hoc2027.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * VJTI HOC 2027 - User Details Service Implementation
 * 
 * Spring Security UserDetailsService querying UserRepository to load UserPrincipal objects.
 * Supports authentication by either username or email address.
 * 
 * @author VJTI HOC 2027 Development Team
 */
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username or email: " + usernameOrEmail)
                );

        return UserPrincipal.create(user);
    }
}
