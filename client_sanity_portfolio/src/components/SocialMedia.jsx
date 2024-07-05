import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
    return (
        <div className="app__social__media-icons">
            {[FaTwitter, FaFacebookF, FaInstagram].map(Icon => {
                return (
                    <motion.div
                        initial={{
                            backgroundColor: '#fff',
                            color: 'var(--black-color)',
                            display: 'block'
                        }}
                        whileHover={{
                            backgroundColor: 'var(--secondary-color)',
                            color: 'var(--white-color)',
                            display: 'block'
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                            type: 'tween'
                        }}
                        onClick={() => window.location = 'https://www.linkedin.com/in/kehinde-adams-oyedepo-946665185/'}
                        key={Icon}
                    >
                        <Icon />
                    </motion.div>
                )
            })}
        </div>
    )
}

export default SocialMedia;