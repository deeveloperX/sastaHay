import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function TermsAndConditions() {
  // Open 'introduction' section by default as shown in the screenshot
  const [openSection, setOpenSection] = useState('introduction');

  const toggleSection = (sectionKey) => {
    setOpenSection(openSection === sectionKey ? null : sectionKey);
  };

  // Structured terms data separated into two columns
  const termsData = {
    left: [
      {
        key: 'introduction',
        title: 'INTRODUCTION',
        content: (
          <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.7', textAlign: 'justify' }}>
            Welcome to SastaHay.pk also hereby known as “we”, “us” or “SastaHay”. We are an online marketplace and these are the terms and conditions governing your access and use of SastaHay along with its related sub-domains, sites, mobile app, services and tools (the "Platform"). By using the Platform, you hereby accept these terms and conditions (including the linked information herein) and represent that you agree to comply with these terms and conditions (the "User Agreement"). This User Agreement is deemed effective upon your use of the Platform which signifies your acceptance of these terms. If you do not agree to be bound by this User Agreement please do not access, register with or use this Platform. This Platform is owned and operated by SastaHay Technologies Pvt Limited. The Platform reserves the right to change, modify, add, or remove portions of these Terms and Conditions at any time without any prior notification. Changes will be effective when posted on the Platform with no other notice provided. Please check these Terms and Conditions regularly for updates. Your continued use of the Platform following the posting of changes to Terms and Conditions of use constitutes your acceptance of those changes.
          </p>
        )
      },
      {
        key: 'buyer_policy',
        title: 'BUYER POLICY',
        content: (
          <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.7' }}>
            Buyers must provide accurate information when making purchases. All orders are subject to availability, order verification, and acceptance by the seller or platform.
          </p>
        )
      }
    ],
    right: [
      {
        key: 'conditions_of_use',
        title: 'CONDITIONS OF USE',
        content: (
          <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.7' }}>
            You agree not to use the platform for any unlawful purpose, violate intellectual property rights, or engage in activities that harm the platform's security and performance.
          </p>
        )
      }
    ]
  };

  return (
    <div className="container py-5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      
      {/* Title */}
      <h2 className="text-center fw-bold mb-3" style={{ fontSize: '2rem', color: '#111' }}>
        Terms and Conditions
      </h2>

      {/* Subtitle / Intro Paragraph */}
      <p className="text-center text-secondary mb-5 mx-auto" style={{ maxWidth: '900px', fontSize: '14px', lineHeight: '1.6' }}>
        By using SastaHay.pk ('Site') or SastaHay App ('App') collectively referred to as the 'Platform', you agree to these terms and conditions, privacy policy, returns and refund policy of the Platform. Please read the Terms and Conditions carefully before using SastaHay.pk.
      </p>

      {/* Accordion Layout */}
      <div className="row g-4">
        
        {/* Left Column Mapped */}
        <div className="col-12 col-lg-6">
          {termsData.left.map((item) => (
            <div key={item.key} className="mb-4">
              <div 
                className="d-flex align-items-center justify-content-between py-3 border-bottom border-dark"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleSection(item.key)}
              >
                <h5 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '13px', letterSpacing: '0.8px', color: '#111' }}>
                  {item.title}
                </h5>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openSection === item.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>

              {/* Collapsible Content */}
              {openSection === item.key && (
                <div className="pt-3 pb-2">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column Mapped */}
        <div className="col-12 col-lg-6">
          {termsData.right.map((item) => (
            <div key={item.key} className="mb-4">
              <div 
                className="d-flex align-items-center justify-content-between py-3 border-bottom border-dark"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleSection(item.key)}
              >
                <h5 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '13px', letterSpacing: '0.8px', color: '#111' }}>
                  {item.title}
                </h5>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openSection === item.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>

              {/* Collapsible Content */}
              {openSection === item.key && (
                <div className="pt-3 pb-2">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}