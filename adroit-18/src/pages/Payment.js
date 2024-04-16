import React, { useState } from 'react';
import './Payment.css'; // Import CSS file for styling
import axios from 'axios'

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/payment',{cardNumber,expirationDate,cvv,name})
    .then((result) => {
      console.log(result)
      
    }).catch((err) => {
      console.log(err)
      
    });
    console.log('Processing payment...');
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
    console.log('Cardholder Name:', name);

    // Simulate a successful payment for demo purposes
    setPaymentSuccess(true);
    setPaymentError(null);

    // Clear form fields
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
    setName('');
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-number">Card Number:</label>
          <input
            type="text"
            id="card-number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiration-date">Expiration Date:</label>
          <input
            type="text"
            id="expiration-date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Cardholder Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Payment</button>
      </form>
      {paymentError && <p className="error-msg">{paymentError}</p>}
      {paymentSuccess && <p className="success-msg">Payment successful!</p>}
    </div>
  );
};

export default PaymentForm;
