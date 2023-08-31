
import React from 'react';
import './Work.scss';

import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';


const Works=[
  {title:'RK SERVICE',description:'delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.',imgUrl:images.webimage01,link:'https://rkservices-n1fdthqyk-rafikhan19.vercel.app/'},
  {title:'MOTOPARTS',description:'The automotive parts ecommerce website serves as the opportunity to allow sellers and customers to interact at the virtual platform for the purchase and sale of autoparts ',imgUrl:images.webimage02,link:'https://rkservices-n1fdthqyk-rafikhan19.vercel.app/'},
  {title:'SIKHSHA_"O"_SAHYOG', description:'A website where the students check your assignment and get the best solution and they can also get the best solution and rate there favorite teachers ',imgUrl:images.webimage03,link:'https://rkservices-n1fdthqyk-rafikhan19.vercel.app/'},
 
];

const Work = () => {
  return (
    <>
   
       <h2  className="head-text" >My<span> creative</span> <br />websites <span className='blue'>on React</span></h2>
       <div className="app__profiles_Work" >
      {Works.map((Works, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item_work"
          key={Works.title + index}
        >
         <a href={Works.link} target="_blank" rel="noopener noreferrer">
          <img src={Works.imgUrl} alt={Works.title} />
        </a>
          
          <h2 className="bold-text " style={{ marginTop: 20 }}>{Works.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{Works.description}</p>
        </motion.div>
      ))}

    
    </div>
  
    </>
  );
};

export default AppWrap(Work,'work');
