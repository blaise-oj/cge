import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideFoward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideFoward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Christine Maldives</h3>
                                    <span>Houston, USA</span>
                                </div>
                            </div>
                            <p>"We’ve partnered with this company for more than three years and the
                                experience has been nothing short of excellent. The minerals we receive
                                are always of consistent, premium quality, carefully processed, and
                                delivered according to schedule. Their ability to maintain such high
                                standards across multiple international shipments gives us confidence
                                to keep expanding our business with them."</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Blaise Frankline</h3>
                                    <span>Nairobi, Kenya</span>
                                </div>
                            </div>
                            <p>"This company has proven to be one of the most reliable suppliers we
                                have worked with in the global minerals trade. They maintain a high
                                level of transparency and take ethical sourcing very seriously, which
                                is extremely important for our clients and regulators. Their
                                professionalism makes every transaction smooth, and their team is
                                always available to address questions or provide updates."</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>David Mensah</h3>
                                    <span>Accra, Ghana</span>
                                </div>
                            </div>
                            <p>"I have dealt with many suppliers over the years, but what stands out
                                about this company is their dedication to quality control and customer
                                satisfaction. From the moment we place an order to the time the shipment
                                arrives, their process is organized and efficient. The minerals are
                                always of the highest grade, and the level of communication they provide
                                gives us confidence that we are working with true professionals."</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Isabella Rossi</h3>
                                    <span>Milan, Italy</span>
                                </div>
                            </div>
                            <p>"We’ve built a strong business relationship with this company because
                                of their integrity, attention to detail, and consistent results. The
                                minerals they supply are carefully prepared for transportation and
                                always arrive in excellent condition. Their commitment to international
                                standards and their willingness to adapt to our needs make them a
                                valuable partner for the long term."</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
