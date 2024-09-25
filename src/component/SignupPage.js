import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Signup.css';
import '../forgot/ForgotPassword.css';

const SignupPage = () => {
  const [verified, setVerified] = useState(false);

  // Your site key from Google reCAPTCHA admin
  const siteKey = 'YOUR_VALID_SITE_KEY';

  const handleRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setVerified(true);  // Set state to true once reCAPTCHA is verified
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verified) {
      alert('Please verify the captcha.');
      return;
    }
    
    // Handle signup logic
    console.log(formData);
    // Handle form submission logic
    alert('Form submitted!');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm password</label>
          <input
            type="password"
            id="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* reCAPTCHA widget */}
        <div className="form-group recaptcha-container">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={handleRecaptchaChange}
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className='already-account'>
          <p>Already have an account? <span>Sign in</span></p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
