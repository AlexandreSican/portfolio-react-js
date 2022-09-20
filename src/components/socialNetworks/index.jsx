import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import './styles.scss'

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedinIn/>, url:'https://www.linkedin.com/in/alex-sicchieri/'},
  {name: "github", icon: <FaGithub/>, url: 'https://github.com/AlexandreSican'},
  {name: "instagram", icon: <FaInstagram/>, url: 'https://www.instagram.com/alesicchieri/'},

]

export const SocialNetworks = () => {
  return (
    <section className='socialNetworks'>
      {socialNetworks.map((network) => (
        <a href={network.url} className='socialButton' id={network.name} key={network.name} target='blank'>
          {network.icon}
        </a>
      ))}
    </section>
  )
}