import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import {images} from '../../constants'
import "./Testimonials.css";



const Testimonials = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
   

  return (
    <div className='main_test'><ReactSimplyCarousel
   
    activeSlideIndex={activeSlideIndex}
    onRequestChange={setActiveSlideIndex}
    itemsToShow={1}
    itemsToScroll={1}
    forwardBtnProps={{
       
      //here you can also pass className, or any other button element attributes
      style: {
        alignSelf: 'center',
        background: 'white',
        border: 'none',
        borderRadius: '50%',
        color: 'blue',
        cursor: 'pointer',
        fontSize: '20px',
        height: 30,
        lineHeight: 1,
        textAlign: 'center',
        width: 30,
        margin:40,
        // marginLeft:100,

      },
      children: <span>{`>`}</span>,
    }}
    backwardBtnProps={{
        className:"back",
      //here you can also pass className, or any other button element attributes
      style: {
        alignSelf: 'center',
        background: 'white',
        border: 'none',
        borderRadius: '50%',
        color: 'black',
        cursor: 'pointer',
        fontSize: '20px',
        height: 30,
        // lineHeight: 1,
        textAlign: 'center',
        width: 30,
       margin:40,
      },
      children: <span>{`<`}</span>,
    }}
    responsiveProps={[
      {
        itemsToShow: 1,
        itemsToScroll: 1,
        minWidth: 768,

      },
    ]}
    speed={300}
    easing="linear"
  >
    {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
    <div className='testi_items' >
   
     <img className='image_test' src={images.mobile}alt='image1'></img>
     <div className='t-text'>
        <h3 className='test_name'>Arabh hussain</h3>
        <p className='test_qt' ><q> An exceptional Java developer who turned our ideas into flawless code, delivering solutions that exceeded our expectations </q></p>
     </div>
    </div>
    <div className='testi_items'  >
     <img className='image_test' src={images.spotify}alt='image1'></img>
     <div className='t-text'>
    <h3 className='test_name'>Pritam sah</h3>
    
        <p className='test_qt'><q>Their attention to detail, efficient communication, and technical proficiency made the entire process seamless.</q></p>
     </div>
    </div>
    <div className='testi_items'  >
     <img className='image_test' src={images.html}alt='image1'></img>
     <div className='t-text'>
    <h3 className='test_name'>Shyam Singh</h3>
        
        <p className='test_qt'><q> Highly recommended for anyone seeking a top-notch web development experience! </q></p>
     </div>
    </div>
    <div className='testi_items'  >
     <img className='image_test' src={images.css}alt='image1'></img>
     <div className='t-text'>
    <h3 className='test_name'>Sumit</h3>
        
        <p className='test_qt'><q>Transformed our vision into a captivating digital masterpiece</q></p>
     </div>
    </div>
    <div className='testi_items'  >
     <img className='image_test' src={images.python}alt='image1'></img>
     <div className='t-text'>
        
    <h3 className='test_name'>Yastik sharma</h3>
        <p className='test_qt'><q>Transformed our ideas into reality with MERN stack mastery – a seamless and remarkable experience!</q></p>
     </div>
    </div>
    <div className='testi_items'  >
     <img className='image_test' src={images.node}alt='image1'></img>
     <div className='t-text'>
        <h3 className='test_name'>Anshuman shaw</h3>
        
        <p className='test_qt'><q>Your backend developer's expertise transformed our ideas into a seamlessly functioning reality. Their code is the backbone of our success</q></p>
     </div>
    </div>
  </ReactSimplyCarousel></div>
  )
}


export default Testimonials;