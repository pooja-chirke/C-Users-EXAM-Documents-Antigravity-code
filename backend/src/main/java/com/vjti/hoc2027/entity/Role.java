package com.vjti.hoc2027.entity;

/**
 * VJTI HOC 2027 - System Roles Enum
 * 
 * Defines the Role-Based Access Control (RBAC) authorities across the application.
 * 
 * Role Matrix:
 * - ROLE_ADMIN: System-wide administration, user management, global configurations.
 * - ROLE_CHAIR: Conference Track management, assigning reviewers, final decision making.
 * - ROLE_REVIEWER: Reviewing assigned papers, submitting scores & feedback.
 * - ROLE_AUTHOR: Submitting research papers, uploading camera-ready copies.
 * 
 * @author VJTI HOC 2027 Development Team
 */
public enum Role {
    ROLE_ADMIN,
    ROLE_CHAIR,
    ROLE_REVIEWER,
    ROLE_AUTHOR
}
