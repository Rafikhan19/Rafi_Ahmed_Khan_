import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href='https://github.com/Rafikhan19' alt='image1' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/rafikhan5114/' alt='image2' target='_blank' rel='noopener noreferrer'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/rafikhan5114/' alt='image3' target='_blank' rel='noopener noreferrer'>
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
