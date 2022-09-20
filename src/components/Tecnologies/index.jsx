import './styles.scss'

import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di'
import { SiTypescript, SiStyledcomponents } from 'react-icons/si'
import { PowerKnowledge } from '../powerKnowledge'

const tech = [
  {id: 'html', name: 'HTML5', icon: <DiHtml5/>, power: 3},
  {id: 'css', name: 'CSS3', icon: <DiCss3/>, power: 3},
  {id: 'react', name: 'REACT', icon: <DiReact/>, power: 2},
  {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>, power: 2},
  {id: 'ts', name: 'TypeScript', icon: <SiTypescript/>, power: 2},
  {id: 'styled-components', name: 'Styled Components', icon: <SiStyledcomponents/>, power: 1}
]

export const Tecnologies = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="tech-grid">
        {tech.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <PowerKnowledge level={tech.power}/>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}