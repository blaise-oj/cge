import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const testimonials = [
  {
    id: 1,
    name: "Christine Maldives",
    location: "Houston, USA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "We've partnered with this company for more than three years, and the experience has been nothing short of excellent. The minerals we receive are always of consistent, premium quality, carefully processed, and delivered according to schedule. Their ability to adapt to our specific requirements while maintaining strict quality standards has given us confidence to expand our operations, knowing we can rely on their expertise. Communication is always professional, timely, and solution-oriented, which makes them a truly outstanding partner."
  },
  {
    id: 2,
    name: "Blaise Frankline",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "This company has proven to be one of the most reliable suppliers we have worked with in the global minerals trade. They maintain a high level of transparency and take ethical sourcing very seriously, something that is rare in this industry. Over the years, we have benefited not only from the quality of their products but also from their commitment to building long-term, mutually beneficial relationships. Their professionalism and integrity have allowed us to consistently meet our business goals with peace of mind."
  },
  {
    id: 3,
    name: "David Mensah",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "I have dealt with many suppliers over the years, but what stands out about this company is their dedication to quality control and customer satisfaction. Every shipment we have received has met the highest industry standards, and they are always proactive in resolving any issues before they even arise. Their team takes time to understand our unique business needs, which gives us the confidence to scale our operations without worrying about disruptions. This level of commitment is truly commendable."
  },
  {
    id: 4,
    name: "Isabella Rossi",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "We've built a strong business relationship with this company because of their integrity, attention to detail, and consistent results. They always deliver on time, keep us updated throughout the process, and never compromise on quality. Their approach to client partnerships feels more like a collaboration than a transaction, which makes working with them a truly positive experience. For us, they have become more than just a supplier — they are a trusted partner we can count on."
  }
];


  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => {
      if (isMobile) {
        return (prevIndex + 1) % testimonials.length;
      } else {
        // For larger screens, move by 2 testimonials
        return Math.min(prevIndex + 2, testimonials.length - 2);
      }
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => {
      if (isMobile) {
        return (prevIndex - 1 + testimonials.length) % testimonials.length;
      } else {
        // For larger screens, move by 2 testimonials
        return Math.max(prevIndex - 2, 0);
      }
    });
  };

  // Determine which testimonials to show
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      // Show two testimonials on larger screens
      return testimonials.slice(currentIndex, currentIndex + 2);
    }
  };

  return (
    <div className='testimonials'>
      <h2>What Our Clients Say</h2>
      <p className='testimonials-subtitle'>Hear from businesses around the world that trust our mining and trading services</p>
      
      <div className='testimonials-container'>
        <button className='nav-btn back-btn' onClick={prevTestimonial}>
          <FaArrowLeft />
        </button>
        
        <div className='testimonials-slider'>
          {getVisibleTestimonials().map((testimonial) => (
            <div key={testimonial.id} className='testimonial-card'>
              <div className='user-info'>
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.location}</span>
                </div>
              </div>
              <p>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <button className='nav-btn next-btn' onClick={nextTestimonial}>
          <FaArrowRight />
        </button>
      </div>
      
      <div className='dots'>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${isMobile 
              ? index === currentIndex ? "active" : "" 
              : (index === currentIndex || index === currentIndex + 1) ? "active" : ""}`}
            onClick={() => setCurrentIndex(isMobile ? index : Math.max(0, Math.min(index, testimonials.length - 2)))}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;