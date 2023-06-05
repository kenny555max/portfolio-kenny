import './Testimonials.scss';

import Wrap from '../../Wrap/Wrap';
import { client, urlFor } from '../../client/client';
import { asus, amazon, skype, nb, spotify, adidas } from '../../constants'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { useEffect, useState } from 'react';

const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filterTestimonial, setFilterTestimonial] = useState({});
    
    useEffect(() => {
        const getTestimonial = async () => {
            try {
                const result = await client.fetch('*[_type == "testimonials"]');

                setTestimonial(result);
                setFilterTestimonial(testimonial[currentIndex]);
            } catch (error) {
                console.log(error);
            }
        }

        getTestimonial();
    }, [currentIndex, testimonial]);

    if (!filterTestimonial) return null;

    return (
        <div className='app__testimonials'>
            <div className="app__testimonials-card">
                <div className="profile">
                    <img src='' alt={filterTestimonial.name} />
                </div>
                <div className="app__testimonials-text">
                    <div className="feedback">
                        <p>
                            {filterTestimonial.feedback}
                        </p>
                    </div>
                    <div className="user">
                        <h4>{filterTestimonial.name}</h4>
                        <h6>{filterTestimonial.company}</h6>
                    </div>
                </div>
            </div>
            <div className="app__testimonials-handler">
                <div className='prev'>
                    <HiChevronLeft onClick={() => setCurrentIndex((currentIndex) => currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1)} />
                </div>
                <div className='next'>
                    <HiChevronRight onClick={() => setCurrentIndex((currentIndex) => currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1)}  />
                </div>
            </div>
            <div className="logos">
                {[ asus, amazon, skype, nb, spotify, adidas ].map((logo, index) => (
                    <img src={logo} key={index} alt="logo" />
                ))}
            </div>
        </div>
    )
}

export default Wrap(Testimonials, 'testimonials');