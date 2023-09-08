import React from 'react';
import './index.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Service from './components/services/service';
import Experience from './components/experience/experience';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonials/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';



function App() {
    return(
        <>
        <Header />
        <Nav />
        <About />
        <Service />
        <Experience />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
        
        
       </>
    )
}
export default App;