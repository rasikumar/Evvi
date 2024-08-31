import { useState } from 'react';
import axios from 'axios';
import { ContactUs } from "../../constant";

const Contact = () => {
  const { title, heading, button } = ContactUs[0];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/contact', formData);
      if (response.status === 200) {
        setSuccess('Your message has been sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          details: ''
        });
      } else {
        setError('There was an issue sending your message. Please try again.');
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-t-primary p-8 gap-6 w-full rounded-xl">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-white">{heading}</h1>
        <p className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold text-white">{title}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4 max-mobile:flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"
              required
            />
          </div>
          <div className="flex gap-4 max-mobile:flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"
              required
            />
          </div>
          <input
            type="text"
            name="details"
            placeholder="Details here"
            value={formData.details}
            onChange={handleChange}
            className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-6 px-6 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75"
            required
          />
          <button type="submit" className="btn-secondary text-white w-60 max-mobile:w-full">
            {loading ? 'Sending...' : button}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default Contact;
