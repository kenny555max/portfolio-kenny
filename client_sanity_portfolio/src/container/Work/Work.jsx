import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import Wrap from '../../Wrap/Wrap';

import { client, urlFor } from '../../client/client';
import { FaGithub, FaEye } from 'react-icons/fa';

import './Work.scss';

const Work = () => {
    const [active, setActive] = useState('Mobile App');
    const [works, setWorks] = useState([]);
    const [animate, setAnimate] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        async function getWorks() {
            const result = await client.fetch('*[_type == "works"]');
            
            setWorks([...result]);
        }
        
        getWorks();
    }, []);

    useEffect(() => {
        setFilterActive(active);
    },[active]);
    
    async function setFilterActive(codeLink) {
        const result = await client.fetch('*[_type == "works"]');
            
        setWorks(result.filter(active => active.tags.includes(codeLink)));
        setAnimate([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimate([{ y: 0, opacity: 1 }]);
        }, 500);
        setActive(codeLink);
    }

    return (
        <div className='app__work'>
            <div className='app__work-title app__title'>
                <h1>my creative <span>portfolio</span> section</h1>
            </div>
            <ul className='app__work-lists app__list-style'>
                {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map(workLink => {
                    return(
                        <li
                            className={active === workLink ? 'item-active' : ''}
                            onClick={() => setFilterActive(workLink)}
                            key={workLink}
                        >
                           {workLink}
                        </li>
                    )
                })}
            </ul>
            <div className='app__work-display app__container'>
                {works.map(({ codeLink, projectLink, title, description, imgUrl }, index) => {
                    return (
                        <motion.div
                            className='app__work__card'
                            key={index}
                            whileHover={{
                                boxShadow: '0 0 50px 10px rgba(0,0,0,0.2)',
                                scale: 0.98
                            }}
                            animate={animate}
                            transition={{
                                duration: .5,
                                ease: 'easeInOut'
                            }}
                        >
                            <div className='app__work-image'>
                                <div>
                                    <img src={urlFor(imgUrl.asset._ref)} alt='work' />
                                    <h5 className='app__work-tag'>{codeLink}</h5>
                                    <div className='app__work__icon-links'>
                                        <motion.a
                                            href={projectLink}
                                            className='app__links'
                                            whileInView={{ scale: 1 }}
                                            whileHover={{ scale: [1, 0.90] }}
                                            transition={{
                                                duration: .5,
                                                ease: 'easeInOut'
                                            }}
                                            >
                                            <FaEye />
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            className='app__links'
                                            whileInView={{ scale: 1 }}
                                            whileHover={{ scale: [1, 0.90] }}
                                            transition={{
                                                duration: 0.25
                                            }}
                                        >
                                            <FaGithub />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                            <div className='app__work-desc'>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Wrap(Work, 'work');