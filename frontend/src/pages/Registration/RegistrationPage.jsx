/**
 * VJTI HOC 2027 - Registration Page
 *
 * User registration page for conference participants.
 *
 * @file VJTI-HOC-Conference/frontend/src/pages/Registration/RegistrationPage.jsx
 */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const RegistrationPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        organization: "",
        designation: "",
        category: "",
        country: "India",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        /* ===============================
           BASIC VALIDATION
           =============================== */

        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phone ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.organization ||
            !formData.category
        ) {
            setError("Please fill in all required fields.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password do not match.");
            return;
        }

        /*
         * NOTE:
         * This page currently performs frontend validation only.
         * Connect this function to your Spring Boot registration API
         * when the backend endpoint is ready.
         */

        setSuccess(
            "Registration details validated successfully. Please proceed to login."
        );

        setTimeout(() => {
            navigate("/login");
        }, 1800);
    };

    return (
        <MainLayout
            title={
                <>
                    <div>Conference Registration</div>

                    <div
                        style={{
                            fontFamily:
                                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                            fontSize: "30px",
                            lineHeight: "1.6",
                            marginTop: "8px",
                            color: "#ffffff",
                        }}
                    >
                        परिषद नोंदणी
                    </div>
                </>
            }
            subtitle={
                <>
                    <div>
                        Create your account to participate in VJTI HOC 2027.
                    </div>

                    <div
                        style={{
                            fontFamily:
                                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                            fontSize: "18px",
                            lineHeight: "1.9",
                            marginTop: "10px",
                            color: "rgba(255,255,255,0.75)",
                        }}
                    >
                        VJTI HOC 2027 मध्ये सहभागी होण्यासाठी आपले खाते तयार करा.
                    </div>
                </>
            }
            badge={
                <>
                    <span>REGISTER 2027</span>

                    <span
                        style={{
                            fontFamily:
                                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                            marginLeft: "12px",
                        }}
                    >
                        नोंदणी २०२७
                    </span>
                </>
            }
        >
            <div className="container py-4">
                <div className="row justify-content-center">

                    {/* =====================================================
              REGISTRATION FORM
              ===================================================== */}

                    <div className="col-lg-9 col-xl-8">

                        <div className="card border-0 shadow-sm rounded-4 card-hoc bg-white">

                            <div className="card-body p-4 p-md-5">

                                {/* Header */}

                                <div className="text-center mb-4">

                                    <div className="text-vjti-maroon mb-3">
                                        <i className="bi bi-person-plus-fill display-5"></i>
                                    </div>

                                    <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
                                        Create Conference Account
                                    </h3>

                                    <h5
                                        className="fw-bold"
                                        style={{
                                            fontFamily:
                                                "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                                            color: "#800000",
                                        }}
                                    >
                                        परिषद खाते तयार करा
                                    </h5>

                                    <p className="text-muted mb-0">
                                        Please enter your details carefully.
                                    </p>

                                </div>


                                {/* =================================================
                    SUCCESS MESSAGE
                    ================================================= */}

                                {success && (
                                    <div
                                        className="alert alert-success border-0 rounded-3"
                                        role="alert"
                                    >
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        {success}
                                    </div>
                                )}


                                {/* =================================================
                    ERROR MESSAGE
                    ================================================= */}

                                {error && (
                                    <div
                                        className="alert alert-danger border-0 rounded-3"
                                        role="alert"
                                    >
                                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                        {error}
                                    </div>
                                )}


                                {/* =================================================
                    FORM
                    ================================================= */}

                                <form onSubmit={handleSubmit}>

                                    {/* Name */}

                                    <div className="row g-3 mb-3">

                                        <div className="col-md-6">

                                            <label
                                                htmlFor="firstName"
                                                className="form-label fw-semibold"
                                            >
                                                First Name
                                                <span className="text-danger">*</span>
                                            </label>

                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="form-control"
                                                placeholder="Enter first name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-md-6">

                                            <label
                                                htmlFor="lastName"
                                                className="form-label fw-semibold"
                                            >
                                                Last Name
                                                <span className="text-danger">*</span>
                                            </label>

                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="form-control"
                                                placeholder="Enter last name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* Marathi Name */}

                                    <div className="mb-3">

                                        <small
                                            className="text-muted"
                                            style={{
                                                fontFamily:
                                                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                                            }}
                                        >
                                            आपले नाव अचूकपणे भरा.
                                        </small>

                                    </div>


                                    {/* Email */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="email"
                                            className="form-label fw-semibold"
                                        >
                                            Email Address
                                            <span className="text-danger">*</span>
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="example@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* Phone */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="phone"
                                            className="form-label fw-semibold"
                                        >
                                            Mobile Number
                                            <span className="text-danger">*</span>
                                        </label>

                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Enter mobile number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* Organization */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="organization"
                                            className="form-label fw-semibold"
                                        >
                                            Institute / Organization
                                            <span className="text-danger">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            className="form-control"
                                            placeholder="Enter institute or organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* Designation */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="designation"
                                            className="form-label fw-semibold"
                                        >
                                            Designation
                                        </label>

                                        <input
                                            type="text"
                                            id="designation"
                                            name="designation"
                                            className="form-control"
                                            placeholder="Professor / Research Scholar / Student / Industry"
                                            value={formData.designation}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    {/* Category */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="category"
                                            className="form-label fw-semibold"
                                        >
                                            Registration Category
                                            <span className="text-danger">*</span>
                                        </label>

                                        <select
                                            id="category"
                                            name="category"
                                            className="form-select"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="">
                                                Select registration category
                                            </option>

                                            <option value="faculty">
                                                AICTE Faculty / Research Scholars - ₹8,000 / $185
                                            </option>

                                            <option value="industry">
                                                Industry Participation - ₹8,000 / $185
                                            </option>

                                            <option value="pg-student">
                                                AICTE PG Students - ₹6,000 / $125
                                            </option>

                                        </select>

                                    </div>


                                    {/* Country */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="country"
                                            className="form-label fw-semibold"
                                        >
                                            Country
                                        </label>

                                        <select
                                            id="country"
                                            name="country"
                                            className="form-select"
                                            value={formData.country}
                                            onChange={handleChange}
                                        >

                                            <option value="India">
                                                India
                                            </option>

                                            <option value="Other">
                                                Other Country
                                            </option>

                                        </select>

                                    </div>


                                    {/* Password */}

                                    <div className="row g-3 mb-4">

                                        <div className="col-md-6">

                                            <label
                                                htmlFor="password"
                                                className="form-label fw-semibold"
                                            >
                                                Password
                                                <span className="text-danger">*</span>
                                            </label>

                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Minimum 6 characters"
                                                value={formData.password}
                                                onChange={handleChange}
                                                minLength={6}
                                                required
                                            />

                                        </div>


                                        <div className="col-md-6">

                                            <label
                                                htmlFor="confirmPassword"
                                                className="form-label fw-semibold"
                                            >
                                                Confirm Password
                                                <span className="text-danger">*</span>
                                            </label>

                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                className="form-control"
                                                placeholder="Re-enter password"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                minLength={6}
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* =================================================
                      TERMS
                      ================================================= */}

                                    <div className="alert alert-light border rounded-3 mb-4">

                                        <div className="d-flex align-items-start">

                                            <i className="bi bi-info-circle-fill text-vjti-maroon me-2 mt-1"></i>

                                            <div>

                                                <strong>
                                                    Registration Information
                                                </strong>

                                                <p className="small text-muted mb-0 mt-1">
                                                    Registration fees are applicable after paper
                                                    acceptance according to the selected category.
                                                </p>

                                                <p
                                                    className="small text-muted mb-0 mt-1"
                                                    style={{
                                                        fontFamily:
                                                            "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                                                    }}
                                                >
                                                    पेपर स्वीकारल्यानंतर निवडलेल्या वर्गानुसार
                                                    नोंदणी शुल्क लागू होईल.
                                                </p>

                                            </div>

                                        </div>

                                    </div>


                                    {/* =================================================
                      SUBMIT BUTTON
                      ================================================= */}

                                    <button
                                        type="submit"
                                        className="btn btn-vjti-maroon fw-semibold w-100 py-2"
                                    >
                                        <i className="bi bi-person-check-fill me-2"></i>

                                        Create Account

                                        <span
                                            className="ms-2"
                                            style={{
                                                fontFamily:
                                                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                                            }}
                                        >
                                            खाते तयार करा
                                        </span>

                                    </button>

                                </form>


                                {/* =================================================
                    LOGIN LINK
                    ================================================= */}

                                <div className="text-center mt-4">

                                    <p className="text-muted mb-2">
                                        Already have an account?
                                    </p>

                                    <Link
                                        to="/login"
                                        className="fw-semibold text-vjti-maroon text-decoration-none"
                                    >
                                        Login to your account
                                    </Link>

                                    <span
                                        className="mx-2 text-muted"
                                    >
                                        |
                                    </span>

                                    <Link
                                        to="/registration"
                                        className="fw-semibold text-vjti-maroon text-decoration-none"
                                    >
                                        Registration Fees
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </MainLayout>
    );
};

export default RegistrationPage;