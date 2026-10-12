import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShopMoreCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        const products = data.products || [];

        // Extract unique categories and map them with a representative image and formatted title
        const uniqueCategoriesMap = new Map();

        products.forEach((product) => {
          const slug = product.category; // e.g., 'smartphones'
          if (!uniqueCategoriesMap.has(slug)) {
            // Capitalize and format category name (e.g., 'smartphones' -> 'Smartphones')
            const formattedName = slug
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            uniqueCategoriesMap.set(slug, {
              id: slug,
              name: formattedName,
              image: product.thumbnail || product.images[0],
            });
          }
        });

        // Convert Map to array and take the first 4 or desired amount to match the layout
        setCategories(Array.from(uniqueCategoriesMap.values()).slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5" style={{ backgroundColor: '#f4f5f7' }}>
        <div className="spinner-border text-purple" role="status" style={{ color: '#7b1fa2' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error}</div>;
  }

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f4f5f7' }}>
      {/* Section Header */}
      <div className="container mb-4">
        <h3 className="fw-bold text-dark" style={{ fontSize: '1.75rem' }}>
          Shop More Categories
        </h3>
      </div>

      {/* Light Purple Banner Section */}
      <div 
        className="py-5" 
        style={{ backgroundColor: '#f3e6ff' }}
      >
        <div className="container">
          <div className="row justify-content-center g-4">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              >
                <Link
                  to={`/products?category=${encodeURIComponent(category.id)}`}
                  className="card text-center border-0 shadow-sm w-100"
                  style={{ 
                    borderRadius: '12px', 
                    overflow: 'hidden',
                    border: '2px solid #800080',
                    maxWidth: '180px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {/* Category Image Box */}
                  <div className="bg-white p-3 d-flex align-items-center justify-content-center" style={{ height: '130px' }}>
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="img-fluid object-fit-contain"
                      style={{ maxHeight: '100px' }}
                    />
                  </div>

                  {/* Category Title Footer */}
                  <div 
                    className="text-white py-2 px-1 d-flex align-items-center justify-content-center"
                    style={{ 
                      backgroundColor: '#7b1fa2', // Rich purple theme matching screenshot
                      minHeight: '48px',
                      fontSize: '0.95rem',
                      fontWeight: '600'
                    }}
                  >
                    {category.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMoreCategories;