import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/sastahay-logo.png'

export default function Footer() {
  return (
    <footer
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
      className="pt-5 pb-4 px-3 px-md-5 bg-myPrimary text-light"
    >
      <div className="container-fluid px-lg-5">
        <div className="row g-4 pb-5 align-items-start">
          {/* Column 1: Logo & Company Nav Links */}
          <div className="col-12 col-md-4 col-lg-4">
            {/* SastaHay Logo SVG */}
            <div className="d-flex align-items-center mb-4">
             <Link to={`/`} className="navbar-brand fs-2 fw-bold mb-0">
                        <img alt='logo' src={Logo} style={{width: "150px"}} />
                    </Link>
            </div>

            {/* Company Nav Links */}
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 fw-medium fs-6 text-white-75">
              {/* <li>
                <Link to="/about" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link to="/faqs" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  Terms &amp; Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div className="col-12 col-md-4 col-lg-4">
            <h5 className="fw-bold mb-4 fs-5 text-white">Customer Service</h5>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 fw-medium fs-6">
              <li>
                <Link to="/contact" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/installments" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  Installments Plan
                </Link>
              </li>
              <li>
                <Link to="/e-warranty" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  E-Warranty Activation
                </Link>
              </li>
              <li>
                <Link to="/seller-registration" className="text-white text-decoration-none opacity-90 hover-opacity-100 transition">
                  Sell on SastaHay
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Secure Payment Methods & App Badge */}
          <div className="col-12 col-md-4 col-lg-4">
            <h5 className="fw-bold mb-4 fs-5 text-white">Secure Payments Methods</h5>

            {/* Payment Method Badges Row */}
            <div className="d-flex flex-wrap gap-2 align-items-center mb-4">
              {/* 1LINK */}
              <div
                className="bg-white rounded-2 d-flex align-items-center justify-content-center px-2 py-1 shadow-sm"
                style={{ width: '52px', height: '34px' }}
              >
                <span className="fw-bold text-dark fs-6" style={{ fontSize: '11px', lineHeight: '1.1' }}>
                  <span style={{ color: '#008000' }}>1</span>LINK
                </span>
              </div>

              {/* Mastercard */}
              <div
                className="bg-white rounded-2 d-flex align-items-center justify-content-center px-2 py-1 shadow-sm"
                style={{ width: '52px', height: '34px' }}
              >
                <svg width="34" height="22" viewBox="0 0 36 24">
                  <circle cx="13" cy="12" r="10" fill="#EB001B" />
                  <circle cx="23" cy="12" r="10" fill="#F79E1B" fillOpacity="0.88" />
                </svg>
              </div>

              {/* VISA */}
              <div
                className="bg-white rounded-2 d-flex align-items-center justify-content-center px-2 py-1 shadow-sm"
                style={{ width: '52px', height: '34px' }}
              >
                <span className="fw-black italic text-primary fs-5" style={{ fontWeight: '900', fontStyle: 'italic', color: '#1A1F71' }}>
                  VISA
                </span>
              </div>

              {/* HBL */}
              <div
                className="bg-white rounded-2 d-flex align-items-center justify-content-center px-2 py-1 shadow-sm"
                style={{ width: '52px', height: '34px' }}
              >
                <span className="fw-bold" style={{ color: '#008358', fontSize: '14px', letterSpacing: '-0.5px' }}>
                  HBL
                </span>
              </div>

              {/* Cash on Delivery */}
              <div
                className="bg-white rounded-2 d-flex align-items-center justify-content-center px-1 py-1 shadow-sm text-center"
                style={{ width: '65px', height: '34px' }}
              >
                <span className="fw-bold text-secondary" style={{ fontSize: '8px', lineHeight: '1', color: '#333' }}>
                  CASH ON<br />DELIVERY
                </span>
              </div>
            </div>

            {/* Google Play Badge */}
            <div>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="d-inline-block text-decoration-none"
              >
                <div
                  className="bg-black text-white rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2 border border-secondary shadow-sm"
                  style={{ cursor: 'pointer' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 1.8L13.8 12 3.6 22.2C3.2 21.8 3 21.1 3 20.3V3.7C3 2.9 3.2 2.2 3.6 1.8Z" fill="#2196F3" />
                    <path d="M17.4 8.4L14.7 11.1L13.8 12L14.7 12.9L17.4 15.6L20.6 13.8C21.4 13.3 21.4 12.7 20.6 12.2L17.4 8.4Z" fill="#FFC107" />
                    <path d="M13.8 12L3.6 1.8C4.1 1.3 4.8 1.1 5.6 1.5L17.4 8.4L13.8 12Z" fill="#4CAF50" />
                    <path d="M13.8 12L17.4 15.6L5.6 22.5C4.8 22.9 4.1 22.7 3.6 22.2L13.8 12Z" fill="#F44336" />
                  </svg>
                  <div className="text-start">
                    <div className="text-uppercase" style={{ fontSize: '9px', letterSpacing: '0.5px', opacity: 0.8 }}>
                      GET IT ON
                    </div>
                    <div className="fw-bold" style={{ fontSize: '15px', lineHeight: '1.1', fontFamily: 'sans-serif' }}>
                      Google Play
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-top border-white border-opacity-25 row align-items-center gy-3">
          {/* Copyright */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mb-0 fw-medium fs-6 opacity-90">
              Copyright © 2026 SastaHay.pk
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-inline-flex gap-2 justify-content-center">
              <Link
                to="/youtube"
                className="bg-white rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition hover-scale"
                style={{ width: '36px', height: '36px' }}
                aria-label="YouTube"
              >
                <i className="bi bi-youtube fs-5 text-primary"></i>
              </Link>

              <Link
                to="/facebook"
                className="bg-white rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition hover-scale"
                style={{ width: '36px', height: '36px' }}
                aria-label="Facebook"
              >
                <i className="bi bi-facebook fs-5 text-primary"></i>
              </Link>

              <Link
                to="/instagram"
                className="bg-white rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition hover-scale"
                style={{ width: '36px', height: '36px' }}
                aria-label="Instagram"
              >
                <i className="bi bi-instagram fs-5 text-primary"></i>
              </Link>

              <Link
                to="/tiktok"
                className="bg-white rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition hover-scale"
                style={{ width: '36px', height: '36px' }}
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok fs-5 text-primary"></i>
              </Link>

              <Link
                to="/linkedin"
                className="bg-white rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition hover-scale"
                style={{ width: '36px', height: '36px' }}
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-5 text-primary"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .transition {
          transition: all 0.2s ease-in-out;
        }
        .hover-opacity-100:hover {
          opacity: 1 !important;
          text-decoration: underline !important;
        }
        .hover-scale:hover {
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
}