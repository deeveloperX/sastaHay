import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import heroBanner from "../assets/seller-regestration-hero.webp";

const initialFormData = {
  date: new Date().toISOString().slice(0, 10),
  name: "",
  mobileNumber: "",
  email: "",
  cnic: "",
  businessName: "",
  businessAddress: "",
  businessCategory: "",
  experience: "",
  socialMediaPresence: "",
  ntnStrn: "",
  additionalInfo: "",
};

const businessCategories = [
  "Mobile Phones",
  "Earbuds",
  "Smart watches",
  "Mobile Accessories",
];

const experienceOptions = [
  "0-1 Year",
  "1-2 Years",
  "3-4 Years",
  "5+ Years",
];

export default function SellerRegistration() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect your API here to save the seller registration.
    console.log("Seller Registration:", formData);

    setSubmitted(true);
  };

  const inputClass =
    "form-control form-control-lg border rounded-3";

  const labelClass = "form-label fw-semibold mb-2";

  return (
    <main className="seller-registration-page bg-light min-vh-100 pb-5">
      {/* Full-width hero banner */}
      <section className="w-100">
        <img
          src={heroBanner}
          alt="SastaHay Seller Registration"
          className="img-fluid w-100 d-block mb-5"
          style={{
            objectFit: "cover",
          }}
        />
      </section>

      {/* Registration form container */}
      <div
        className="container"
        style={{ maxWidth: "850px", marginTop: "-30px" }}
      >
        <div className="bg-white rounded-4 shadow-sm overflow-hidden">
          {/* Form header */}
          <div
            className="p-4 p-md-5 border-bottom"
            style={{
              borderTop: "8px solid rgb(32, 106, 138)",
            }}
          >
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "#eaf2ff",
                  color: "#0d6efd",
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-shop fs-3" aria-hidden="true" />
              </div>

              <div>
                <h1 className="h3 fw-bold mb-1">
                  SastaHay Seller Onboarding
                </h1>
                <p className="text-secondary mb-0">
                  Register your business and start selling with SastaHay.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-2 text-secondary small">
              <i className="bi bi-person-circle" aria-hidden="true" />
              <span>{formData.email || "Your email address"}</span>
              <span className="mx-1">·</span>
              <span>Seller Registration</span>
            </div>

            <hr className="my-4" />

            <p className="mb-2">
              Please fill out the form below with your correct business
              details.
            </p>

            <p className="text-danger small mb-0">
              * Indicates required question
            </p>
          </div>

          {/* Form fields */}
          <form onSubmit={handleSubmit}>
            <div className="p-4 p-md-5">
              <div className="row g-4">
                {/* Date */}
                <div className="col-12">
                  <label htmlFor="date" className={labelClass}>
                    Date <span className="text-danger">*</span>
                  </label>

                  <input
                    type="date"
                    id="date"
                    name="date"
                    className={inputClass}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Name */}
                <div className="col-12 col-md-6">
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={inputClass}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                {/* Mobile number */}
                <div className="col-12 col-md-6">
                  <label htmlFor="mobileNumber" className={labelClass}>
                    Mobile Number <span className="text-danger">*</span>
                  </label>

                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    className={inputClass}
                    placeholder="e.g. 03XX XXXXXXX"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    autoComplete="tel"
                    pattern="[0-9+\-\s()]{7,20}"
                    title="Enter a valid phone number."
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-12 col-md-6">
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-danger">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* CNIC */}
                <div className="col-12 col-md-6">
                  <label htmlFor="cnic" className={labelClass}>
                    CNIC <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    id="cnic"
                    name="cnic"
                    className={inputClass}
                    placeholder="XXXXX-XXXXXXX-X"
                    value={formData.cnic}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[0-9]{5}-?[0-9]{7}-?[0-9]{1}"
                    title="Enter a 13-digit CNIC, with or without hyphens."
                    required
                  />
                  <div className="form-text">
                    Enter your 13-digit CNIC number.
                  </div>
                </div>

                {/* Business name */}
                <div className="col-12">
                  <label htmlFor="businessName" className={labelClass}>
                    Business Name <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    className={inputClass}
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={handleChange}
                    autoComplete="organization"
                    required
                  />
                </div>

                {/* Business address */}
                <div className="col-12">
                  <label htmlFor="businessAddress" className={labelClass}>
                    Business Address <span className="text-danger">*</span>
                  </label>

                  <textarea
                    id="businessAddress"
                    name="businessAddress"
                    className="form-control form-control-lg rounded-3"
                    rows="3"
                    placeholder="Enter your complete business address"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    autoComplete="street-address"
                    required
                  />
                </div>

                {/* Business category */}
                <div className="col-12 col-md-6">
                  <label htmlFor="businessCategory" className={labelClass}>
                    Select Business Category{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <select
                    id="businessCategory"
                    name="businessCategory"
                    className={inputClass}
                    value={formData.businessCategory}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Choose a category
                    </option>

                    {businessCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div className="col-12 col-md-6">
                  <label htmlFor="experience" className={labelClass}>
                    Experience in Selected Business Category{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <select
                    id="experience"
                    name="experience"
                    className={inputClass}
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select experience
                    </option>

                    {experienceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Social media / online store */}
                <div className="col-12">
                  <label
                    htmlFor="socialMediaPresence"
                    className={labelClass}
                  >
                    Social Media Presence (Online Store){" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    id="socialMediaPresence"
                    name="socialMediaPresence"
                    className={inputClass}
                    placeholder="Instagram, Facebook, website URL, etc."
                    value={formData.socialMediaPresence}
                    onChange={handleChange}
                    required
                  />

                  <div className="form-text">
                    Share your online store or social media profile links.
                  </div>
                </div>

                {/* NTN / STRN */}
                <div className="col-12">
                  <label htmlFor="ntnStrn" className={labelClass}>
                    NTN Number / STRN Number{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    id="ntnStrn"
                    name="ntnStrn"
                    className={inputClass}
                    placeholder="Enter your NTN or STRN number"
                    value={formData.ntnStrn}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Additional information */}
                <div className="col-12">
                  <label htmlFor="additionalInfo" className={labelClass}>
                    Any Specific Information{" "}
                    <span className="text-secondary fw-normal">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    className="form-control form-control-lg rounded-3"
                    rows="4"
                    placeholder="Tell us anything else we should know..."
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submission feedback */}
              {submitted && (
                <div
                  className="alert alert-success mt-4 mb-0"
                  role="status"
                >
                  <i className="bi bi-check-circle-fill me-2" />
                  Form validated successfully. Connect your backend API
                  to complete registration.
                </div>
              )}

              {/* Submit button */}
              <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mt-5">
                <p className="text-secondary small mb-0">
                  Please review your information before submitting.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-3 px-5 fw-semibold"
                >
                  Submit Registration
                  <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
                </button>
              </div>
            </div>
          </form>
        </div>

        <p className="text-center text-secondary small mt-4">
          SastaHay Seller Onboarding
        </p>
      </div>
    </main>
  );
}