
import React from 'react';

import './Skills.css';

import  AppWrap from '../../wrapper/AppWrap'

const Skills = () => {
  return (
    <>

    <h2 className="head-text">  <span className='blue'>Skills</span> are the <span > helpline</span><br></br> for  survival</h2>
    
    <div class="skills-circle-wrap" style={{marginTop:"3rem"}}>
      <div class="skills-circle">
          <div class="skill-orbit">
              <div class="skill-planet"><span>Jv</span></div>
          </div>
          <div class="skill-orbit">
              <div class="skill-planet"><span>R</span></div>
          </div>
          <div class="skill-orbit">
              <div class="skill-planet"><span>Dsa</span></div>
          </div>
          <div class="skill-orbit"> 
              <div class="skill-planet"><span>Py</span></div>
          </div>
          <div class="skill-orbit">
              <div class="skill-planet"><span>JS</span></div>
          </div>
      </div>
      <div class="skills-top-circle panel p-text"><span></span></div>
  </div>
   
   
  </>
  );
};

export default AppWrap(Skills,'skills');

