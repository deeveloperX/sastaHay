import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import banner from "../assets/buy-now-pay-later.jpg";
import askariBank from "../assets/askari-bank-logo.webp";
import bankAlfalah from "../assets/bank-alfalah.webp";
import faysalBank from "../assets/faysal-bank-logo.webp";
import hbl from "../assets/habib-bank-logo.webp";
import jsBank from "../assets/js-bank-logo.webp";
import mcbBank from "../assets/mcb-bank-logo.webp";
import silkBank from "../assets/silk-bank-logo.webp";
import ubl from "../assets/ubl-logo.webp";
import standardChartered from "../assets/standard-charted.webp";

const banks = [
  { name: "Askari Bank", image: askariBank, url: "#" },
  { name: "Bank Alfalah", image: bankAlfalah, url: "#" },
  { name: "Faysal Bank", image: faysalBank, url: "#" },
  { name: "HBL", image: hbl, url: "#" },
  { name: "JS Bank", image: jsBank, url: "#" },
  { name: "MCB Bank", image: mcbBank, url: "#" },
  { name: "Silkbank", image: silkBank, url: "#" },
  { name: "UBL", image: ubl, url: "#" },
  {
    name: "Standard Chartered",
    image: standardChartered,
    url: "#",
  },
];

export default function BuyNowPayLater() {
  return (
    <div className="container py-4" style={{ maxWidth: "1100px" }}>
      {/* Promotional banner */}
      <div className="mb-3">
        <img
          src={banner}
          alt="Buy Now and Pay Later"
          className="img-fluid w-100"
        />
      </div>

      {/* Page title */}
      <h1 className="text-center fs-5 fw-bold mb-3">
        Buy Now &amp; Pay Later | Easy Monthly Installments at SastaHay
      </h1>

      {/* Description */}
      <p className="small mb-4" style={{ fontSize: "11.5px" }}>
        SastaHay offers Easy Monthly Installments with an easy interest-free
        payment plan to enable its customers to access and purchase the items
        they want and need while managing their finances during the turbulent
        economy. With multiple payment tenures and easy interest-free
        installments it intends to help people spend responsibly without
        incurring interest or extended debt. Easy Monthly Installment plan
        (EMI) is available for credit card holders. EMI plan applies for all
        products with a value of PKR 10,000 or above. Please click the links
        below to reach terms and conditions of the specific plan.
      </p>

      {/* Bank policy heading */}
      <h2 className="fs-5 fw-bold mb-4">
        Related Policies and Procedures
      </h2>

      {/* Responsive bank cards */}
      <div className="row g-3">
        {banks.map((bank) => (
          <div
            key={bank.name}
            className="col-6 col-sm-4 col-md-3 col-lg-custom"
          >
            <a
              href={bank.url}
              aria-label={`${bank.name} policies and procedures`}
              className="d-flex align-items-center justify-content-center
                bg-white rounded-4 shadow-sm p-3 text-decoration-none
                h-100"
              style={{
                minHeight: "138px",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={bank.image}
                alt={bank.name}
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "105px",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Five cards per row on large screens */}
      <style>{`
        @media (min-width: 992px) {
          .col-lg-custom {
            flex: 0 0 20%;
            max-width: 20%;
          }
        }
      `}</style>
    </div>
  );
}