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
      <p className='title'>Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href={file} className='button' download>Download Currículo</a>
    </aside>
  )
}
