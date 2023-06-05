import { motion } from 'framer-motion';
import { profile, circle, flutter, sass, redux } from '../../constants';
import Wrap from '../../Wrap/Wrap';
import './Header.scss';

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__profile-title'>
        <motion.div
          initial={{
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            stiffness: 10,
            type: 'spring'
          }}
        >
          <p>Hello I am</p>
          <h1><span>👋</span> Micael</h1>
        </motion.div>
        <motion.div
          initial={{
            x: -100,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            stiffness: 10,
            type: 'spring'
          }}
        >
          <h5>web developer</h5>
          <h5>freelancer</h5>
        </motion.div>
      </div>
      <div className='app__profile-image'>
        <div className="profile">
            <img src={profile} alt="profile" />
        </div>
        <motion.div
          className='circle'
          initial={{
            opacity: 0,
            scale: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
        >
          <img src={circle} alt='circle' />
        </motion.div>
      </div>
      <div className='app__profile-skill'>
        {[flutter, redux, sass].map(skill => {
          return (
            <motion.div
              key={skill}
              initial={{
                opacity: 0,
                scale: 0
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 1000
              }}
            >
              <img src={skill} alt='profile-skill' />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Wrap(Header, 'home');