import React from 'react';
import About from './about';
import Project from './project';
import Contact from './contact';

function Home() {
  return (
    <div className="" >
      <section id="home"> ... </section>
    <div className="pg-1">
      <div className="row">
         <div className="col">
      <h2>Hello, I'm</h2>
      <h1>Ayegbajeje Jadesola</h1>
      <p className="mb-5">Frontend Developer based in Nigeria, specializing in building responsive, 
        visually appealing, and user-friendly websites that help businesses and individuals 
        establish a strong online presence.</p>
       <a href="/jadesola cv.pdf" target="_blank" rel="noopener noreferrer">
  <button className='hire-btn'>Hire Me</button>
</a>
    </div>
        <div className="col">
          <img src="images/jade3.png" alt="jadesola" className="jay-img" />
          </div>
         
    </div>
  </div>
  <About />
   <Project />
   <Contact />
    </div>    
  );
}

export default Home;
