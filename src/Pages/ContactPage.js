import React, { useState } from 'react';
import { 
  FiPlus, 
  FiMinus, 
  FiPhone, 
  FiMail 
} from 'react-icons/fi';
import { 
  HiOutlineBuildingOffice2, 
  HiOutlineBuildingStorefront 
} from 'react-icons/hi2';

export default function ContactPage() {
  // Track open accordion item by index or unique key
  const [openItem, setOpenItem] = useState('left-0');

  const toggleItem = (key) => {
    setOpenItem(openItem === key ? null : key);
  };

  // Left column FAQ data array
  const leftFaqData = [
    {
      key: 'left-0',
      question: 'HOW CAN I TRACK MY ORDER?',
      answer: (
        <>
          You can track your order now by logging into your SastaHay Account.{' '}
          <a href="https://sastahay.pk/account" target="_blank" rel="noreferrer" className="text-primary text-decoration-none">
            Account
          </a>
        </>
      ),
    },
    {
      key: 'left-1',
      question: 'HOW CAN I REGISTER A COMPLAINT?',
      answer: 'You can register a complaint by contacting our customer support hotline or emailing us through your registered account.',
    },
    {
      key: 'left-2',
      question: 'WHAT CAN I DO IF MY DESIRED PRODUCT IS OUT OF STOCK?',
      answer: 'You can click on the "Notify Me" button on the product page to receive an alert as soon as the item is restocked.',
    },
    {
      key: 'left-3',
      question: "WHAT IS SASTAHAY'S RETURN POLICY?",
      answer: 'We accept returns within 7 days of delivery for defective, damaged, or incorrect products received.',
    },
    {
      key: 'left-4',
      question: 'HOW MANY DAYS WILL IT TAKE FOR MY PAYMENT TO BE REFUNDED?',
      answer: 'Refunds are typically processed and credited back within 3 to 7 working days after the returned item is inspected.',
    },
    {
      key: 'left-5',
      question: 'CAN I CHANGE THE COLOUR AND STORAGE OF MY RECENTLY PLACED ORDER?',
      answer: 'You can request changes before the order is dispatched by contacting customer support immediately.',
    },
    {
      key: 'left-6',
      question: 'WHY ARE THERE NO ACCESSORIES IN THE BOX?',
      answer: 'Many manufacturers no longer include chargers or earphones in the box as part of standard environmental policies.',
    },
    {
      key: 'left-7',
      question: 'WHERE CAN I FIND THE REFUND FORM?',
      answer: 'The refund request form can be accessed through your user account under the returns section.',
    },
    {
      key: 'left-8',
      question: 'HOW TO DEACTIVATE YOUR SASTAHAY APP ACCOUNT?',
      answer: 'You can request account deactivation by reaching out directly to our customer support team.',
    },
  ];

  // Right column FAQ data array
  const rightFaqData = [
    {
      key: 'right-0',
      question: 'HOW CAN I CANCEL MY ORDER?',
      answer: 'Orders can be canceled before dispatch by logging into your account or calling support.',
    },
    {
      key: 'right-1',
      question: "HOW CAN I FIND THE LOCATION OF MY BRAND'S WARRANTY CENTRE?",
      answer: 'Warranty cards included with your product list the authorized service centers across major cities.',
    },
    {
      key: 'right-2',
      question: 'HOW DO I CHANGE THE SHIPPING ADDRESS ON A PREVIOUSLY PLACED ORDER?',
      answer: 'Address updates can be made prior to shipment by contacting our customer support team.',
    },
    {
      key: 'right-3',
      question: 'WHY IS THERE NO WARRANTY CARD IN THE BOX?',
      answer: 'Many modern electronics come with digital or IMEI-based warranty activated upon purchase.',
    },
    {
      key: 'right-4',
      question: 'HOW CAN I GET MORE DETAILS ABOUT THE INSTALLMENT PLAN?',
      answer: 'You can check partner bank options and rates using the installment calculator on any eligible product page.',
    },
    {
      key: 'right-5',
      question: 'WHAT IS OPEN PARCEL DELIVERY?',
      answer: 'Open parcel delivery lets you inspect your ordered product in front of the delivery rider before paying.',
    },
    {
      key: 'right-6',
      question: 'HOW CAN I VIEW MY ORDER PACKAGING VIDEO?',
      answer: 'Packaging videos are accessible once your order is in transit by visiting your account orders page.',
    },
  ];

  return (
    <div className="container py-5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-2" style={{ fontSize: '2rem', color: '#111' }}>
          Got Any Questions? We'd Love To Hear.
        </h2>
        <p className="text-secondary" style={{ fontSize: '15px' }}>
          Whether you're curious about our service, your order status, or returns – we're ready to answer any and all questions
        </p>
      </div>

      {/* Two-Column FAQ Accordion */}
      <div className="row g-4 mb-5">
        
        {/* Left Column Mapped */}
        <div className="col-12 col-lg-6">
          {leftFaqData.map((item) => (
            <div key={item.key} className="border-bottom py-3">
              <div 
                className="d-flex align-items-center justify-content-between" 
                style={{ cursor: 'pointer' }}
                onClick={() => toggleItem(item.key)}
              >
                <h6 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.8px', color: '#111' }}>
                  {item.question}
                </h6>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openItem === item.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>
              {openItem === item.key && (
                <div className="pt-3 pb-1 text-secondary" style={{ fontSize: '14px' }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column Mapped */}
        <div className="col-12 col-lg-6">
          {rightFaqData.map((item) => (
            <div key={item.key} className="border-bottom py-3">
              <div 
                className="d-flex align-items-center justify-content-between" 
                style={{ cursor: 'pointer' }}
                onClick={() => toggleItem(item.key)}
              >
                <h6 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.8px', color: '#111' }}>
                  {item.question}
                </h6>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openItem === item.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>
              {openItem === item.key && (
                <div className="pt-3 pb-1 text-secondary" style={{ fontSize: '14px' }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Get In Touch Header */}
      <div className="text-center my-5">
        <h3 className="fw-bold text-primary" style={{ fontSize: '2rem' }}>
          Get In Touch
        </h3>
      </div>

      {/* Still Need Help & Our Locations Section */}
      <div className="row g-5 align-items-start">
        
        {/* Left Side: Still Need Help */}
        <div className="col-12 col-lg-6">
          <h4 className="fw-bold mb-4" style={{ fontSize: '1.25rem' }}>Still Need Help?</h4>
          
          <div className="mb-3 fw-bold text-dark" style={{ fontSize: '14px' }}>
            Contact Us:
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="text-primary fs-3">
              <FiPhone />
            </div>
            <div>
              <div className="fw-bold text-dark" style={{ fontSize: '15px' }}>051-111-693-693</div>
              <div className="text-secondary" style={{ fontSize: '13px' }}>9:00AM to 9:00PM [Mon-Sun]</div>
            </div>
          </div>

          <div className="mb-2 fw-bold text-dark" style={{ fontSize: '14px' }}>
            Email:
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="text-primary fs-3">
              <FiMail />
            </div>
            <div>
              <div className="fw-bold text-dark" style={{ fontSize: '15px' }}>hello@sastahay.pk</div>
              <div className="text-secondary" style={{ fontSize: '13px' }}>9:00AM to 5:00PM [Mon-Sat]</div>
            </div>
          </div>
        </div>

        {/* Right Side: Our Locations */}
        <div className="col-12 col-lg-6">
          <h4 className="fw-bold mb-4" style={{ fontSize: '1.25rem' }}>Our Locations</h4>
          
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <div className="p-4 bg-white border rounded-4 shadow-sm text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '140px' }}>
                <div className="mb-2 text-primary fs-2">
                  <HiOutlineBuildingOffice2 />
                </div>
                <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>
                  3 Offices &amp; Expanding
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="p-4 bg-white border rounded-4 shadow-sm text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '140px' }}>
                <div className="mb-2 text-primary fs-2">
                  <HiOutlineBuildingStorefront />
                </div>
                <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>
                  3 Warehouses across Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Updates Section */}
      <div className="mt-5 pt-4 border-top">
        <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>Updates</h5>
        <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>
          To stay up to date on what's new, please subscribe to our social media channels{' '}
          <a href="#instagram" className="text-primary text-decoration-none">Instagram</a>,{' '}
          <a href="#youtube" className="text-primary text-decoration-none">Youtube</a> and{' '}
          <a href="#facebook" className="text-primary text-decoration-none">Facebook</a>.
        </p>
      </div>

    </div>
  );
}