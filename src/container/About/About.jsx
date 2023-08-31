import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './About.scss'

const abouts=[
  {title:'Java developer',description:'Crafting Java solutions, one line of code at a time, to build a better digital world',imgUrl:images.about01},
  {title:'Web Development',description:'Engineering student turned web wizard, transforming ideas into captivating online realities',imgUrl:images.about02},
  {title:'UI/UX',description:'Weaving intuitive designs and seamless experiences for the digital world as a UI/UX enthusiast',imgUrl:images.about03},
  {title:'Web Design',description:'Shaping digital narratives with a palette of creativity as a web designer',imgUrl:images.about04}
];
const About = () => {

  return (
    <>
    <h2  className="head-text">Developer<span className='blue'> With a great</span> <br />Business<span> Mind</span></h2>

    <div className="app__profiles" >
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={(about.imgUrl)} alt={about.title} />
          <h2 className="p-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}

     
    </div>
  </>
  )
}

export default AppWrap(About,'about');