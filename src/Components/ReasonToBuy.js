import React from 'react';
import Reason1 from '../assets/reason-img1.svg';
import Reason2 from '../assets/reason-img2.svg';
import Reason3 from '../assets/reason-img3.svg';
import Reason4 from '../assets/reason-img4.svg';

const ReasonToBuy = () => {
  const reasons = [
    {
      id: 1,
      title: 'SastaHay\nExtended Warranty',
      image: Reason1,
      buttonText: 'Know More',
      link: '#',
    },
    {
      id: 2,
      title: 'Packaging\nVideo',
      image: Reason2,
      buttonText: 'Know More',
      link: '#',
    },
    {
      id: 3,
      title: 'Open Parcel\n(ISB - LHR - KHI)',
      image: Reason3,
      buttonText: 'Know More',
      link: '#',
    },
    {
      id: 4,
      title: 'Easy\nInstallments',
      image: Reason4,
      buttonText: 'Know More',
      link: '#',
    },
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f4f5f7' }}>
      {/* Section Header */}
      <div className="container mb-4">
        <h3 className="fw-bold text-dark" style={{ fontSize: '1.75rem' }}>
          Reason To Buy
        </h3>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="row g-4">
          {reasons.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <div 
                className="card border-0 text-white p-4 h-100 shadow-sm"
                style={{ 
                  background: 'radial-gradient(25.65% 62.25% at 27.62% 50.2%, #48afff 21.57%, #0078d5 100%)',
                  borderRadius: '16px',
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {/* Left Side: Image / Illustration */}
                <div className="d-flex align-items-center justify-content-center" style={{ width: '45%' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid object-fit-contain" 
                    style={{ maxHeight: '130px', maxWidth: '140px' }}
                  />
                </div>

                {/* Right Side: Title & Action Button */}
                <div className="d-flex flex-column align-items-start justify-content-center ps-3" style={{ width: '55%' }}>
                  <h4 
                    className="fw-bold mb-3" 
                    style={{ 
                      fontSize: '1.25rem', 
                      lineHeight: '1.4', 
                      whiteSpace: 'pre-line' 
                    }}
                  >
                    {item.title}
                  </h4>
                  <a 
                    href={item.link} 
                    className="btn fw-semibold px-4 py-2 text-dark shadow-sm text-decoration-none"
                    style={{ 
                      backgroundColor: '#ffb74d', 
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffa726'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffb74d'}
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonToBuy;