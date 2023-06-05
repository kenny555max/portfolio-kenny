import { useState, useEffect } from 'react';
import Wrap from '../../Wrap/Wrap';
import { client, urlFor } from '../../client/client';
import { motion } from 'framer-motion';

import './Skill.scss';

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async function () {
      try {
        const result = await client.fetch('*[_type=="skills"]');

        setSkills(result);
      } catch (error) {
        console.log(error);
      }
    }

    getSkills();
  }, []);
  

    return (
      <div className='app__skill__experience'>
        <div className="app__skill-title app__title">
            <h1>skill & experience</h1>
        </div>
        <div className='app__skill-display app__container'>
          <motion.div
            className="app__skill-logo"
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              staggerChildren: 15
            }}
          >
            {skills.map((skill) => {
              const { name, icon, bgColor } = skill;

              return (
                <motion.div
                  initial={{
                    y: 100,
                    opacity: 0
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                  }}
                  key={name}
                  style={{
                    backgroundColor: `${bgColor}`
                  }}
                >
                  <img src={urlFor(icon)} alt={name} />
                </motion.div>
              )
            })}
          </motion.div>
          <div className="app__experiences">
            <motion.div
              initial={{
                y: 100,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              style={{
                display: 'flex',
                columnGap: '2rem',
                marginBottom: '2rem'
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut'
              }}
            >
              <h3>2022</h3>
              <div>
                <h3>seniro product designer</h3>
                <small>amazon inc</small>
              </div>
            </motion.div>
            <motion.div
              initial={{
                y: 100,
                opacity: 0
              }}
              style={{
                display: 'flex',
                columnGap: '2rem',
                marginBottom: '2rem'
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut'
              }}
            >
              <h3>2020</h3>
              <div>
                <div>
                  <h3>seniro product designer</h3>
                  <small>amazon inc</small>
                </div>
                <div>
                  <h3>seniro product designer</h3>
                  <small>amazon inc</small>
                </div>
                <div>
                  <h3>seniro product designer</h3>
                  <small>amazon inc</small>
                </div>
               </div> 
            </motion.div>
            <motion.div
              initial={{
                y: 100,
                opacity: 0
              }}
              style={{
                display: 'flex',
                columnGap: '2rem'
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut'
              }}
            >
              <h3>2022</h3>
              <div>
                <h3>seniro product designer</h3>
                <small>amazon inc</small>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Wrap(Skill, 'skills');