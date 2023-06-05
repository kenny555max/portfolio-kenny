import { motion } from "framer-motion";
import AppWrapper from "../../Wrap/Wrap";
import './About.scss';
import { client, urlFor } from "../../client/client";
import { useEffect, useState } from "react";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    async function getAbout() {
      const result = await client.fetch('*[_type == "abouts"]');
      
      setAbouts([...result]);
    }

    getAbout();
  }, []);


  return (
    <div className="app__about">
      <div className="app__about-title app__title">
        <h1>i know that <span>good design</span> <br /> means <span>good business</span></h1>
      </div>

      <div className="app__about-display app__container">
        {abouts.map((about, index) => {
          return (
            <motion.div
              key={index}
              initial={{
                scale: 0.9
              }}
              whileHover={{
                scale: 1
              }}
              transition={{
                ease: 'easeOut',
                duration: 0.5
              }}
            >
              <div className="app__about-image">
                <img src={urlFor(about.imgUrl.asset._ref)} alt="about" />
              </div>
              <div className="app__about-desc">
                <h2>{about.title}</h2>
                <p>{about.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default AppWrapper(About, 'about');