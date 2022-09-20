import React from 'react';

import avatar from '../../img/foto.png'
import { InformationContainer } from '../informationContainer';
import { SocialNetworks } from '../socialNetworks';
import './styles.scss'
// import { Container } from './styles';
import file from '../../files/cvalexandre.pdf'

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <img src={avatar} alt="Foto" />
      <div className='self'>
        <h1 className='name-self'>Alexandre Sicchieri Cancian</h1>
        <p className='description-self'>27 anos - Solteiro</p>
      <p className='title'>Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={file} className='button' download>Download Currículo</a>
      </div>
    </aside>
  )
}
