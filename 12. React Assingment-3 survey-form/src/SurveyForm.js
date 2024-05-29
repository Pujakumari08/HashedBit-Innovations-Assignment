import React, { useState } from 'react';
import './App.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    feedback: '',
    maritalStatus: '',
    gender: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true); // Set the submission state to true
    // Add form submission logic here, like sending data to a server
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        <div className="success-message">
          <h2>Thank you for your feedback!</h2>
        </div>
      ) : (
        <form className="survey-form" onSubmit={handleSubmit}>
          <h2>Survey Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
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
            <label>Marital Status:</label>
            <div className="radio-group">
              <input
                type="radio"
                id="married"
                name="maritalStatus"
                value="Married"
                checked={formData.maritalStatus === 'Married'}
                onChange={handleChange}
                required
              />
              <label htmlFor="married">Married</label>
              <input
                type="radio"
                id="unmarried"
                name="maritalStatus"
                value="Unmarried"
                checked={formData.maritalStatus === 'Unmarried'}
                onChange={handleChange}
                required
              />
              <label htmlFor="unmarried">Unmarried</label>
            </div>
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-group">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
                required
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
