import React,{useRef,useState} from 'react'
import { images } from '../../constants'
import './Footer.css'
import emailjs from '@emailjs/browser'
import AppWrap from '../../wrapper/AppWrap'
import { SocialMedia } from '../../components'
const Footer = () =>{
  const [isFormSubmitted, setIsFormSubmitted] = useState(true);
  const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7pvj1rs', 'template_kxwglvq', form.current, 'U-V4veFiqzLce3aOn')
      .then((result) => {
          console.log(result.text);
          console.log("messese sent")
          setIsFormSubmitted(false);
      }, (error) => {
          console.log(error.text);
      });
  };
  
 


  
 return (
    <>
    <h2 className="head-text" style={{marginTop:"3rem"}}>Take a <span>coffee </span><br></br>&<br></br> <span>chat</span>  with me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={images.email} alt="email" />
        <a href="mailto:rafiTech19@gmail.com" className="p-text">rafiTech19@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href="tel:+91 (629) 500-0285" className="p-text">+91 (629) 500-0285</a>
      </div>
    </div>
{isFormSubmitted?(<form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" 
          type="text"
           placeholder="Your Name"
            name="user_name"
           
             />
         
        </div>
        <div className="app__flex">
          <input className="p-text"
           type="email"
            placeholder="Your Email"
             name="user_email"
       
               />

        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
           />
        </div>
        <button type="submit" className="p-text" value="send" >Send</button> 
       
      </form>):(<div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
         
        </div>

      )
      }
     <div className="copyright" style={{marginTop:"-50px"}}>
     <SocialMedia />
            <p className="p-text">@2023 Rafi Ahmed Khan</p>
            <p className="p-text">All rights reserved</p>
          </div>
      

     
   
  </>
  )
}

export default AppWrap(Footer,"contact");