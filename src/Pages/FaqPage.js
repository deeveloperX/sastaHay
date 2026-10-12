import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQ() {
  // Track open section by key (defaulting to 'shipping')
  const [openSection, setOpenSection] = useState('shipping');

  const toggleSection = (sectionKey) => {
    setOpenSection(openSection === sectionKey ? null : sectionKey);
  };

  // FAQ Data structured into left and right columns
  const faqData = {
    left: [
      {
        key: 'shipping',
        title: 'SHIPPING, ORDER TRACKING & DELIVERY',
        qaList: [
          {
            q: 'How Much Does SastaHay Charge For Delivering Products?',
            a: 'Our delivery charges is between Rs.249 and Rs.399 is added in case of choosing Open Parcel as delivery method.'
          },
          {
            q: 'Does SastaHay Ship Internationally?',
            a: 'We only deliver in the cities of Pakistan currently.'
          },
          {
            q: 'How Can I Track My Order From SastaHay Online?',
            a: (
              <>
                You can track your order now by logging into your SastaHay Account.{' '}
                <a href="https://sastahay.pk/account" target="_blank" rel="noreferrer" className="text-primary text-decoration-none d-block mt-1">
                  https://sastahay.pk/account
                </a>
              </>
            )
          },
          {
            q: 'How Can I View My Order Packaging Video?',
            a: (
              <>
                You can now view the order packaging video once your order is in transit by visiting your SastaHay.pk Account. Click the Order ID to view the desired video.{' '}
                <a href="https://sastahay.pk/account/orders" target="_blank" rel="noreferrer" className="text-primary text-decoration-none d-block mt-1">
                  https://sastahay.pk/account/orders
                </a>
              </>
            )
          }
        ]
      },
      {
        key: 'cancellations',
        title: 'CANCELLATIONS AND MODIFICATIONS',
        qaList: [
          {
            q: 'How can I cancel or modify my order?',
            a: 'You can request order cancellation or modifications by contacting our customer support before your order is dispatched for shipping.'
          }
        ]
      },
      {
        key: 'signup',
        title: 'SIGN UP AND LOGIN',
        qaList: [
          {
            q: 'How do I create or log into my account?',
            a: 'To sign up or log in, use your phone number or email address to receive a verification code and access your order history.'
          }
        ]
      },
      {
        key: 'returns',
        title: 'RETURNS AND REPLACEMENT',
        qaList: [
          {
            q: 'What is the policy for returns and replacements?',
            a: 'Returns and replacements are accepted within 7 days of delivery if the product received is faulty, damaged, or incomplete.'
          }
        ]
      }
    ],
    right: [
      {
        key: 'payments',
        title: 'PAYMENTS',
        qaList: [
          {
            q: 'What payment methods do you accept?',
            a: 'We accept Cash on Delivery (COD), Credit/Debit cards (Visa/Mastercard), 1LINK online banking, and Bank Transfers (HBL).'
          }
        ]
      },
      {
        key: 'coupons',
        title: 'COUPONS',
        qaList: [
          {
            q: 'How do I redeem a discount coupon?',
            a: 'You can apply discount coupons on the checkout page before placing your order to redeem promotional discounts.'
          }
        ]
      },
      {
        key: 'installments',
        title: 'BUY NOW PAY LATER AT INSTALLMENTS',
        qaList: [
          {
            q: 'How do installment plans work?',
            a: 'We offer easy installment plans on eligible credit cards from partner banks. Check the installment calculator on product pages for details.'
          }
        ]
      },
      {
        key: 'openparcel',
        title: 'OPEN PARCEL DELIVERY',
        qaList: [
          {
            q: 'What is Open Parcel Delivery?',
            a: 'Open parcel delivery allows you to open and inspect your parcel in front of the courier rider before making payment.'
          }
        ]
      }
    ]
  };

  return (
    <div className="container py-5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Page Title */}
      <h2 className="text-center fw-bold mb-5" style={{ fontSize: '2rem', color: '#222' }}>
        Frequently Asked Questions
      </h2>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-12 col-lg-6">
          {faqData.left.map((section) => (
            <div key={section.key} className="mb-4">
              <div 
                className="d-flex align-items-center justify-content-between py-3 border-bottom border-dark"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleSection(section.key)}
              >
                <h5 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '13px', letterSpacing: '0.8px', color: '#111' }}>
                  {section.title}
                </h5>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openSection === section.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>

              {/* Mapped Questions and Answers inside section */}
              {openSection === section.key && (
                <div className="pt-3 pb-2 d-flex flex-column gap-3">
                  {section.qaList.map((item, idx) => (
                    <div key={idx}>
                      <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '16px' }}>
                        {item.q}
                      </h6>
                      <div className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-6">
          {faqData.right.map((section) => (
            <div key={section.key} className="mb-4">
              <div 
                className="d-flex align-items-center justify-content-between py-3 border-bottom border-dark"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleSection(section.key)}
              >
                <h5 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '13px', letterSpacing: '0.8px', color: '#111' }}>
                  {section.title}
                </h5>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openSection === section.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>

              {/* Mapped Questions and Answers inside section */}
              {openSection === section.key && (
                <div className="pt-3 pb-2 d-flex flex-column gap-3">
                  {section.qaList.map((item, idx) => (
                    <div key={idx}>
                      <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '16px' }}>
                        {item.q}
                      </h6>
                      <div className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}