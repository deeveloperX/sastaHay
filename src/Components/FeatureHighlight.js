import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon1 from '../assets/feature-pta.svg'; // Replace with your PTA approved icon path
import Icon2 from '../assets/feature-warranty.svg'; // Replace with your 1 year warranty icon path
import Icon3 from '../assets/feature-packaging.svg'; // Replace with your packaging video icon path
import Icon4 from '../assets/feature-delivery.svg'; // Replace with your fast delivery icon path

const FeaturesHighlight = () => {
  const features = [
    {
      id: 1,
      title: 'PTA Approved',
      subtitle: 'Mobile Phone',
      icon: Icon1,
    },
    {
      id: 2,
      title: '1 Year',
      subtitle: 'Brand Warranty',
      icon: Icon2,
    },
    {
      id: 3,
      title: 'Packaging Video',
      subtitle: 'See Your Product',
      icon: Icon3,
    },
    {
      id: 4,
      title: 'Fast Delivery',
      subtitle: 'All Over Pakistan',
      icon: Icon4,
    },
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row text-center justify-content-between g-4">
          {features.map((item) => (
            <div key={item.id} className="col-6 col-md-3 d-flex flex-column align-items-center">
              {/* Icon Container */}
              <div 
                className="mb-3 d-flex align-items-center justify-content-center" 
              >
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="img-fluid object-fit-contain" 
                  style={{ width: '80px', maxWidth: '80px' }}
                />
              </div>

              {/* Title */}
              <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1.1rem' }}>
                {item.title}
              </h5>

              {/* Subtitle / Description */}
              <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesHighlight;