import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
              <h3 className="fw-bold text-dark mb-1">Create An Account</h3>
              <p className="text-muted small">Please enter your details to register</p>
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

              {/* Submit Button */}
              <button className="btn btn-primary w-100 py-2.5 rounded-3 fw-semibold shadow-sm mb-3" type="submit">
                Register
              </button>

              {/* Footer */}
              <div className="text-center">
                <p className="text-muted small mb-0">
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-none text-primary fw-medium">
                    Login
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

export default RegisterPage;
