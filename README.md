# VJTI HOC 2027 - International Conference Management System

### Veermata Jijabai Technological Institute (VJTI), Mumbai
**International Conference on Quantum Computing, Artificial Intelligence and High Performance Computing (HOC 2027)**

---

## Technical Stack & Architecture

- **Frontend**: React 18, Vite, JavaScript (JSX), Bootstrap 5, React Router v6, Axios, React Hook Form.
- **Backend**: Java 21, Spring Boot 3, Spring Security, JWT Authentication, Spring Data JPA, Hibernate, Maven.
- **Database**: MySQL 8.0 (schema & seed scripts under `/database`).
- **Storage**: Local/Cloud File Storage (`/uploads` directory for papers, camera-ready copies, certificates, payment proofs).

---

## Directory Hierarchy

```
VJTI-HOC-Conference/
├── .antigravity/         # IDE settings, templates, workflows
├── frontend/             # React 18 + Vite + Bootstrap 5 Web Application
│   ├── public/
│   └── src/
│       ├── assets/       # Images, Logos, Icons, Brochure PDF
│       ├── components/   # Common, Navbar, Footer, Hero, Cards, Forms, Dashboard
│       ├── layouts/      # MainLayout, AuthLayout, DashboardLayout
│       ├── pages/        # Home, About, Committee, CallForPapers, Tracks, Registration, etc.
│       ├── routes/       # AppRoutes, ProtectedRoutes
│       ├── services/     # Axios API service modules
│       ├── hooks/        # Custom React Hooks
│       ├── context/      # AuthContext, NotificationContext
│       ├── utils/        # Helpers, Validators, Formatters
│       ├── styles/       # Custom Bootstrap & CSS styles
│       ├── App.jsx
│       └── main.jsx
├── backend/              # Spring Boot 3 (Java 21) REST API Service
│   ├── src/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── dto/
│   ├── security/
│   ├── config/
│   ├── middleware/
│   ├── upload/
│   ├── notification/
│   ├── certificate/
│   └── payment/
├── database/             # MySQL schema.sql, seed.sql, migrations
├── uploads/              # Papers, Camera-ready, Certificates, Payment proofs
├── api/                  # API Specifications & Postman collections
├── docs/                 # System Architecture & Documentation
├── README.md
└── package.json
```

---

## Workflow Phases

1. **Public Portal**: Conference details, Call for Papers, Track information, Organizing Committee, Keynote Speakers, Registration guidelines.
2. **Authentication & Authorization**: Role-Based Access Control (Admin, Track Chair, Reviewer, Author).
3. **Paper Lifecycle**: Submission -> Track Assignment -> Peer Review -> Acceptance/Rejection -> Camera Ready Upload.
4. **Conference Services**: Certificate Generation, Payment Proof Verification, Automated Email Notifications.
