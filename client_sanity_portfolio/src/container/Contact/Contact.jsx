import './Contact.scss';

import Wrap from '../../Wrap/Wrap';
import { client } from '../../client/client';
import { email, mobile } from '../../constants';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const submitForm = async () => {
        setIsLoading((isLoading) => !isLoading);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        try {
            await client.create(contact);

            setIsLoading((isLoading) => !isLoading);
            setFormIsSubmitted((formIsSubmitted) => !formIsSubmitted);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='app__contact'>
            <div className="title">
                <h1>take a coffee & chat with me</h1>
            </div>
            <div className="app__contact-method">
                <div className="mail">
                    <img src={email} alt="send us a mail" />
                    <a href="mailto:oyedepokehinde2016@gmail.com">oyedepokehinde2016@gmail.com</a>
                </div>
                <div className="tel">
                    <img src={mobile} alt="call us" />
                    <a href="tel:+2347065539202">+2347065539202</a>
                </div>
            </div>
            <div className="app__contact-form">
                {formIsSubmitted ? (
                    <div className = 'thank-you-message'>
                        <h1>Thank You For Reaching Out To Us. We Will Revert Shortly!</h1>        
                    </div>
                ): (
                    <>
                        <div className='name'>
                            <input
                                type="text"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                name='name'
                                placeholder='Your Name'
                            />
                        </div>
                        <div className='email'>
                            <input
                                type="email"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                name='email'
                                placeholder='Your Email'
                            />
                        </div>
                        <div className='message'>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                type="text"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                placeholder='Your Name'
                            ></textarea>
                        </div>
                        <div className="submit-btn">
                            <button type='button' onClick={submitForm}>{isLoading ? 'sending' : 'send a message'}</button>
                        </div>
                    </>
                )}
            </div>
        </div>
  )
}

export default Wrap(Contact, 'contact');