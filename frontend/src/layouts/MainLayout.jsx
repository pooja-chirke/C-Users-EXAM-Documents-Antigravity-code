/**
 * ===========================================================
 * VJTI HOC 2027
 * Main Layout
 * Responsive Layout for
 * Desktop | Laptop | Tablet | Android | iPhone
 * ===========================================================
 */

import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = ({
  children,
  title,
  subtitle,
  badge,
  fullWidth = false,
}) => {
  return (
    <div
      className="d-flex flex-column min-vh-100 bg-light"
      style={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* ==========================
            NAVBAR
      =========================== */}

      <Navbar />

      {/* ==========================
         PAGE HEADER (Optional)
      =========================== */}

      {title && (
        <section
          className="bg-vjti-navy text-white border-bottom border-secondary"
          style={{
            marginTop: "78px",
            paddingTop: "55px",
            paddingBottom: "55px",
          }}
        >
          <div className="container text-center">

            {badge && (
              <span
                className="badge bg-vjti-maroon border border-warning text-vjti-gold px-3 py-2 mb-3"
                style={{
                  fontSize: "0.9rem",
                  letterSpacing: "1px",
                }}
              >
                {badge}
              </span>
            )}

            <h1
              className="fw-bold text-white mb-3"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="text-white-50 mx-auto"
                style={{
                  maxWidth: "850px",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ==========================
            MAIN CONTENT
      =========================== */}

      <main
        className="flex-grow-1"
        style={{
          width: "100%",
        }}
      >
        {fullWidth ? (
          children
        ) : (
          <div
            className="container"
            style={{
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            {children}
          </div>
        )}
      </main>

      {/* ==========================
             FOOTER
      =========================== */}

      <Footer />
    </div>
  );
};

export default MainLayout;