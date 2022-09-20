import './styles.scss'

export const Projects = () => {
  return (
    <section className='projects-container'>
      <h2>Projetos</h2>
      <p>Clique no botão para acessar meu GitHub, lá você encontrará meus projetos que desenvolvi para tangibilizar meus conhecimentos teóricos.</p>
      <a href="https://github.com/AlexandreSican?tab=repositories" className='button' target='blank'>Ver Projetos</a>
    </section>
  )
}