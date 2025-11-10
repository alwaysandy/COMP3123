import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserSignupForm = () => {
  const provinceList = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    addresstwo: "",
    city: "",
    province: "",
    postalCode: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!formData.fullName.trim()) formErrors.fullName = "Full name is required";
    if (!formData.address.trim()) formErrors.address = "Address is required";
    if (!formData.addresstwo.trim()) formErrors.addresstwo = "Address 2 is required";
    if (!formData.city.trim()) formErrors.city = "City is required";
    if (!formData.province) formErrors.province = "Province is required";
    if (!formData.postalCode.trim()) formErrors.postalCode = "Postal code is required";
    if (!formData.termsAccepted) formErrors.termsAccepted = "You must accept the terms";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="container mt-5">
      {submitted ? (
        <div className="alert alert-success">
          <h4>Signup Successful!</h4>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Full Name:</strong> {formData.fullName}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Address 2:</strong> {formData.addresstwo}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Province:</strong> {formData.province}</p>
          <p><strong>Postal Code:</strong> {formData.postalCode}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-4"
        >
          <h3 className="mb-4 text-center">User Signup Form</h3>

          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-2">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-12 col-md-6 mb-2">
              <label className="form-label">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              name="address"
              type="text"
              placeholder="1234 Main St"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Address 2</label>
            <input
              name="addresstwo"
              type="text"
              placeholder = "Apartment, studio, or floor"
              className={`form-control ${errors.addresstwo ? "is-invalid" : ""}`}
              value={formData.addresstwo}
              onChange={handleChange}
            />
            {errors.addresstwo && <div className="invalid-feedback">{errors.addresstwo}</div>}
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-4 mb-2">
              <label className="form-label">City</label>
              <input
                name="city"
                type="text"
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <div className="invalid-feedback">{errors.city}</div>}
            </div>

            <div className="col-12 col-md-4 mb-2">
              <label className="form-label">Province</label>
              <select
                name="province"
                className={`form-select ${errors.province ? "is-invalid" : ""}`}
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Select Province</option>
                {provinceList.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.province && <div className="invalid-feedback">{errors.province}</div>}
            </div>

            <div className="col-12 col-md-4 mb-2">
              <label className="form-label">Postal Code</label>
              <input
                name="postalCode"
                type="text"
                className={`form-control ${errors.postalCode ? "is-invalid" : ""}`}
                value={formData.postalCode}
                onChange={handleChange}
              />
              {errors.postalCode && <div className="invalid-feedback">{errors.postalCode}</div>}
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
          <div className="form-check mb-3">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              className={`form-check-input ${errors.termsAccepted ? "is-invalid" : ""}`}
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label htmlFor="termsAccepted" className="form-check-label">
              Agree Terms & Condition?
            </label>
            {errors.termsAccepted && (
              <div className="invalid-feedback d-block">{errors.termsAccepted}</div>
            )}
          </div>
        </div>

          <div className="d-flex justify-content-center mt-3">

          <button type="submit" className="btn btn-success">
            Submit
          </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserSignupForm;
