-- Seed Data for VJTI HOC 2027 Conference System
USE vjti_hoc2027_db;

-- 1. Insert Default Conference Record
INSERT INTO conferences (title, acronym, description, venue, start_date, end_date, submission_deadline, review_deadline, camera_ready_deadline)
VALUES (
    'International Conference on Quantum Computing, Artificial Intelligence and High Performance Computing',
    'HOC 2027',
    'Premier international technical conference hosted by Veermata Jijabai Technological Institute (VJTI), Mumbai.',
    'Veermata Jijabai Technological Institute (VJTI), Matunga, Mumbai - 400019, India',
    '2027-01-20',
    '2027-01-22',
    '2026-10-31',
    '2026-11-30',
    '2026-12-15'
) ON DUPLICATE KEY UPDATE title=title;

-- 2. Insert Default Tracks
INSERT INTO tracks (name, description) VALUES
('Quantum Computing & Information Processing', 'Quantum algorithms, quantum error correction, quantum cryptography, and quantum hardware simulators.'),
('Artificial Intelligence & Deep Learning', 'Generative AI, LLMs, computer vision, natural language processing, and scalable machine learning.'),
('High Performance Computing & Cloud Architecture', 'Parallel computing, GPU acceleration, exascale computing systems, supercomputing architectures, and cloud infrastructure.')
ON DUPLICATE KEY UPDATE name=name;

-- 3. Seed Default Admin User (Password: admin123 -> BCrypt Hash)
INSERT INTO users (username, email, password, full_name, affiliation, country, designation)
VALUES ('admin', 'admin@vjti.ac.in', '$2a$10$e7W7XkF4uD9vE.vR3QeY.OQ/kK6L5M0R.9X8W.Z1A2B3C4D5E6F7G', 'VJTI HOC Admin', 'VJTI Mumbai', 'India', 'System Administrator')
ON DUPLICATE KEY UPDATE username=username;

-- 4. Seed Admin Role
INSERT INTO user_roles (user_id, role)
SELECT id, 'ROLE_ADMIN' FROM users WHERE username = 'admin'
ON DUPLICATE KEY UPDATE role=role;
