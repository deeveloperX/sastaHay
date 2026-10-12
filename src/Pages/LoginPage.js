import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center py-5">
      <div className="row justify-content-center w-100">
        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-sm-5 bg-white">
            
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="fw-bold text-dark mb-1">Welcome Back</h3>
              <p className="text-muted small">Please enter your details to sign in</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              
              {/* Email Field */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingEmail"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={formData.email ? undefined : "floatingEmail"}>Email address</label>
              </div>

              {/* Password Field */}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={formData.password ? undefined : "floatingPassword"}>Password</label>
              </div>

              {/* Utilities */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label text-muted small" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="#forgot" className="text-decoration-none small text-primary fw-medium">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button className="btn btn-primary w-100 py-2.5 rounded-3 fw-semibold shadow-sm mb-3" type="submit">
                Sign In
              </button>

              {/* Footer */}
              <div className="text-center">
                <p className="text-muted small mb-0">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-decoration-none text-primary fw-medium">
                    Register
                  </Link>
                </p>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
