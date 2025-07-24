
import React, { useState } from 'react';
import BgImage from '../../assets/images/Background.png';
import { color } from '../../components/Color';
import Button from '../../components/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ message: '', show: false, success: false });

  const showToast = (message, success) => {
    setToast({ message, show: true, success });
    setTimeout(() => {
      setToast({ message: '', show: false, success: false });
    }, 3000);
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      showToast('Please enter your email.', false);
      return;
    }

    try {
      const response = await fetch('https://educationalwebsite.pythonanywhere.com/education/email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        showToast('Your message has been sent successfully!', true);
        setEmail('');
      } else {
        showToast('Failed to send your message.', false);
      }
    } catch (error) {
      showToast('An error occurred. Please try again later.', false);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex items-center justify-center px-4 py-12 sm:py-16 lg:py-0 relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
     
      {toast.show && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-md text-white z-50 transition-all duration-300 ${
            toast.success ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="flex flex-col items-center text-center w-full max-w-[1000px]">
        <h2
          style={{ color: color.Blue }}
          className="block text-[24px] sm:text-[28px] lg:text-[30px] font-medium leading-snug"
        >
          JOIN OUR NEWSLETTER <br className="hidden sm:block" /> AND BE THE FIRST TO KNOW!
        </h2>

        <input
          type="email"
          placeholder="Enter your email to receive our newsletter"
          className="w-full sm:w-[600px] lg:w-[900px] h-[60px] sm:h-[70px] lg:h-[80px] p-[20px] rounded-[5px] text-black border-[2px] border-[#80C4D3] mt-[30px] mb-[10px] text-sm sm:text-base"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
          style={{
            width: '129px',
            height: '50px',
            borderRadius: '5px',
            margin: 'auto',
          }}
          text="Submit"
        />
      </div>
    </div>
  );
};

export default Newsletter;
