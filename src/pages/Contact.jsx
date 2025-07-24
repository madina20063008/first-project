
import React, { useEffect, useState } from 'react';
import Newsletter from '../modules/Newsletter/Newsletter';
import PageHeader from '../components/PageHeader';
import BG from '../assets/images/bg.png';
import { color } from '../components/Color';
import Contact1 from '../assets/images/contact1.png';
import Contact2 from '../assets/images/contact2.png';
import Contact3 from '../assets/images/contact3.png';

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [toast, setToast] = useState({ message: '', success: true, show: false });

  useEffect(() => {
    fetch('https://educationalwebsite.pythonanywhere.com/education/education-contact/')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setContactData(data[0]);
        }
      })
      .catch((err) => console.error('Failed to fetch contact data', err));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showToast = (message, success = true) => {
    setToast({ message, success, show: true });
    setTimeout(() => setToast({ ...toast, show: false }), 4000);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://educationalwebsite.pythonanywhere.com/education/contact/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast('Your message has been sent successfully!', true);
        setFormData({ full_name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        const errorMsg = data?.message || 'Failed to send your message. Please try again.';
        showToast(errorMsg, false);
      }
    } catch (error) {
      showToast('An error occurred. Please try again later.', false);
    }
  };

  return (
    <div>
      {toast.show && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg text-white transition-all duration-500
          ${toast.success ? 'bg-green-600' : 'bg-red-600'}`}>
          {toast.message}
        </div>
      )}

      <PageHeader title="Contact us" current="Contact us" bg={BG} />
      <div className="container mx-auto">
        <div className="w-full mb-[50px] overflow-hidden">
          <div className="rounded-[5px] mb-[50px]" style={{ backgroundColor: color.Blue }}>
            <div className="flex flex-wrap justify-between">
              
              <div className="p-[30px] w-full lg:w-1/2 flex justify-center flex-wrap lg:justify-start">
                <div className="max-w-[414px] w-full">
                   <div className="who-we-are mb-[30px] flex items-center justify-center lg:justify-start gap-4 text-white font-medium text-[18px] uppercase" style={{ color: 'white' }}>
                    <span>•</span>
                    <span>Contact Info</span>
                    <span>•</span>
                  </div>

                  <div className="bg-white rounded-[10px] w-full min-h-[180px] p-[30px] flex gap-[18px] flex-wrap">
                    <img src={Contact1} alt="phone" className="max-w-[80px]" />
                    <div>
                      <h2 className="font-semibold text-[20px] mt-[5px]">Call us directly on</h2>
                      {contactData?.phone_numbers?.map((phone) => (
                        <p key={phone.id} className="text-[20px] font-medium mt-[9px]">
                          {phone.phone_number}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-[10px] w-full min-h-[180px] p-[30px] flex gap-[18px] mt-[30px] flex-wrap">
                    <img src={Contact2} alt="email" className="max-w-[80px]" />
                    <div>
                      <h2 className="font-semibold text-[20px] mt-[5px]">Mail us directly on</h2>
                      {contactData?.emails?.map((email) => (
                        <p key={email.id} className="text-[20px] font-medium mt-[9px]">
                          {email.email}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-[10px] w-full min-h-[180px] p-[30px] flex flex-wrap gap-[18px] mt-[30px]">
                    <img src={Contact3} alt="location" className="max-w-[80px]" />
                    <div>
                      <h2 className="font-semibold text-[20px] mt-[5px]">Find us</h2>
                      {contactData?.locations?.map((location) => (
                        <p key={location.id} className="text-[20px] font-medium mt-[9px] max-w-[216px]">
                          {location.location}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-[30px] w-full lg:w-1/2 flex justify-center">
                <div className="flex flex-col items-center lg:items-start max-w-[480px] w-full">
                  <div className="who-we-are mb-[30px] flex items-center justify-center lg:justify-start gap-4 text-white font-medium text-[18px] uppercase" style={{ color: 'white' }}>
                    <span>•</span>
                    <span>Get in Touch</span>
                    <span>•</span>
                  </div>

                  <input
                    type="text"
                    name="full_name"
                    placeholder="Full name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full h-[64px] sm:h-[80px] rounded-[5px] p-[16px] sm:p-[20px]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[64px] sm:h-[80px] rounded-[5px] p-[16px] sm:p-[20px] mt-[30px]"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-[64px] sm:h-[80px] rounded-[5px] p-[16px] sm:p-[20px] mt-[30px]"
                  />
                  <textarea
                    name="message"
                    placeholder="Message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-[140px] sm:h-[185px] rounded-[5px] p-[16px] sm:p-[20px] mt-[30px]"
                  ></textarea>

                  <div className="mt-[30px] w-full flex justify-center lg:justify-end">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-white bg-transparent border-2 border-white py-2 px-4 rounded w-full max-w-[206px]"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d539111.8987128875!2d69.47539407912477!3d41.267160872657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1752955653751!5m2!1sen!2s"
              width="100%"
              height="540"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Contact Location"
              className="max-w-full"
            />
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Contact;


