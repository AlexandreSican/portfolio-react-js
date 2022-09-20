import React from 'react';
import { About } from '../About';
import { Projects } from '../Projects';
import { Tecnologies } from '../Tecnologies';

import './styles.scss'

// import { Container } from './styles';

export const MainContent = () => {
  return (
    <div className='mainContent'>
        <About/>
        <Tecnologies/>
        <Projects/>      
    </div>
  )
}
