-- =============================================================================
-- MySQL Database Schema for VJTI HOC 2027 Conference Management System
-- 
-- System: Veermata Jijabai Technological Institute (VJTI), Mumbai
-- Conference: HOC 2027 (Quantum Computing, AI & High Performance Computing)
-- Database Engine: MySQL 8.0 / InnoDB
-- =============================================================================

CREATE DATABASE IF NOT EXISTS vjti_hoc2027_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE vjti_hoc2027_db;

-- -----------------------------------------------------------------------------
-- 1. Users Table
-- Stores user credentials, contact details, and institutional affiliation.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    affiliation VARCHAR(150),
    country VARCHAR(100),
    designation VARCHAR(100),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_user_username (username),
    INDEX idx_user_email (email)
);

-- -----------------------------------------------------------------------------
-- 2. User Roles Table
-- Maps Role-Based Access Control (ROLE_ADMIN, ROLE_CHAIR, ROLE_REVIEWER, ROLE_AUTHOR).
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS user_roles (
    user_id BIGINT NOT NULL,
    role VARCHAR(30) NOT NULL,
    PRIMARY KEY (user_id, role),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- -----------------------------------------------------------------------------
-- 3. Conferences Table
-- Stores conference schedule, venue information, and submission deadlines.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS conferences (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    acronym VARCHAR(20) DEFAULT 'HOC 2027',
    description TEXT,
    venue VARCHAR(255) DEFAULT 'VJTI Campus, Matunga, Mumbai',
    start_date DATE,
    end_date DATE,
    submission_deadline DATE,
    review_deadline DATE,
    camera_ready_deadline DATE
);

-- -----------------------------------------------------------------------------
-- 4. Tracks Table
-- Technical tracks (e.g., Quantum Computing, AI, High Performance Computing).
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tracks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    chair_id BIGINT,
    FOREIGN KEY (chair_id) REFERENCES users(id) ON DELETE SET NULL
);

-- -----------------------------------------------------------------------------
-- 5. Papers Table
-- Submitted research papers lifecycle management.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS papers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    abstract_text TEXT NOT NULL,
    keywords VARCHAR(255),
    pdf_file_path VARCHAR(255),
    camera_ready_path VARCHAR(255),
    status VARCHAR(30) DEFAULT 'SUBMITTED', -- SUBMITTED, UNDER_REVIEW, ACCEPTED, REJECTED, CAMERA_READY
    author_id BIGINT NOT NULL,
    track_id BIGINT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (track_id) REFERENCES tracks(id),
    INDEX idx_paper_status (status),
    INDEX idx_paper_author (author_id),
    INDEX idx_paper_track (track_id)
);

-- -----------------------------------------------------------------------------
-- 6. Paper Authors Table (Refinement Enhancement)
-- Supports multiple co-authors per paper with ordering and corresponding tag.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS paper_authors (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    paper_id BIGINT NOT NULL,
    author_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    affiliation VARCHAR(150),
    country VARCHAR(100),
    author_order INT NOT NULL DEFAULT 1,
    is_corresponding BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (paper_id) REFERENCES papers(id) ON DELETE CASCADE,
    INDEX idx_author_paper (paper_id)
);

-- -----------------------------------------------------------------------------
-- 7. Paper Assignments Table (Refinement Enhancement)
-- Tracks reviewer allocation by Track Chairs before peer review scores.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS paper_assignments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    paper_id BIGINT NOT NULL,
    reviewer_id BIGINT NOT NULL,
    assigned_by_chair_id BIGINT,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(30) DEFAULT 'PENDING', -- PENDING, ACCEPTED, REJECTED, COMPLETED
    deadline DATE,
    FOREIGN KEY (paper_id) REFERENCES papers(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_by_chair_id) REFERENCES users(id) ON DELETE SET NULL,
    UNIQUE KEY uk_paper_reviewer (paper_id, reviewer_id),
    INDEX idx_assignment_reviewer (reviewer_id),
    INDEX idx_assignment_status (status)
);

-- -----------------------------------------------------------------------------
-- 8. Reviews Table
-- Multi-criteria review evaluations submitted by Reviewers.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    paper_id BIGINT NOT NULL,
    reviewer_id BIGINT NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 5),
    novelty_score INT CHECK (novelty_score BETWEEN 1 AND 5),
    technical_quality_score INT CHECK (technical_quality_score BETWEEN 1 AND 5),
    comments_for_author TEXT,
    confidential_comments_for_chair TEXT,
    reviewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paper_id) REFERENCES papers(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_review_paper (paper_id)
);

-- -----------------------------------------------------------------------------
-- 9. Payments Table
-- Author & Delegate registration fee payments and transaction proof verification.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS payments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_id VARCHAR(100) NOT NULL UNIQUE,
    payment_proof_path VARCHAR(255),
    status VARCHAR(30) DEFAULT 'PENDING', -- PENDING, VERIFIED, REJECTED
    verified_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    INDEX idx_payment_user (user_id),
    INDEX idx_payment_status (status)
);

-- -----------------------------------------------------------------------------
-- 10. Certificates Table
-- Certificate generation metadata for Authors, Reviewers, Chairs, and Participants.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS certificates (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    certificate_type VARCHAR(50) NOT NULL, -- AUTHOR, REVIEWER, SESSION_CHAIR, PARTICIPANT
    file_path VARCHAR(255) NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    INDEX idx_cert_user (user_id)
);
