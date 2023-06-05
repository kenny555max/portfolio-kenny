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
                            color: 'var(--black-color)'
                        }}
                        whileHover={{
                            backgroundColor: 'var(--secondary-color)',
                            color: 'var(--white-color)'
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                            type: 'tween'
                        }}
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