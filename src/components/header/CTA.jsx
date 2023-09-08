import React from 'react';
// import { ReactDOM } from 'react';
import CV from '../../assets/images/CV_H.pdf';


function CTA() {

    return(
        <div className='cta'>
            <a href={CV} download className='btn'>Télécharger CV</a>
            <a href="#contact" className='btn btn-primary'>Se connecter</a>
            
        </div>
    )
}
export default CTA;