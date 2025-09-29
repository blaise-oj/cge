import React from 'react'
import './Contact.css'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import whatsapp from '../../assets/whatsapp.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "88783ec1-b5dc-4ce6-84bd-808151faf7a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className='contact'>
        <div className='contact-col'>
          <h3>Send Us a Message</h3>
          <p>We are here to help and answer any question you might have</p>
          <ul>
            <li>
              <img src={mail_icon} alt='' />
              <a href="mailto:info@aurumarkenterprise.com">
                info@aurumarkenterprise.com
              </a>
            </li>

            <li>
              <img src={phone_icon} alt='' />
              <a href="tel:+254102913538">
                +254102913538
              </a>
            </li>

            <li>
              <img src={location_icon} alt='' />
              <a href="https://www.google.com/maps/place/Lusaka+Rd,+Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer">
                Lusaka Rd, Nairobi, Kenya
              </a>
            </li>

            {/* Social Media */}
            <li>
              <img src={whatsapp} alt="WhatsApp" />
              <a href="https://wa.me/254102913538" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>

            <li>
              <img src={facebook} alt="Facebook" />
              <a href="https://www.facebook.com/share/1JXQAN34Rh/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>

            <li>
              <img src={twitter} alt="Twitter" />
              <a href="https://x.com/@AurumarkE15952" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>

            <li>
              <img src={instagram} alt="Instagram" />
              <a href="https://instagram.com/aurumarkenterprise" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>


        </div>

        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type='text' name='phone' placeholder='Enter your phone number' required />
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>


      <div className="map-col">
        <h3 className="map-title">Our Location</h3>
        <iframe
          title="Coska Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.79707246046!2d36.836707210093664!3d-1.2963907356308497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111648341cf7%3A0xefeff333f8c93995!2sLusaka%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1756479894112!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}

export default Contact

