import './styles.scss'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
export const InformationContainer = () => {
  return (
    <section className='information-container'>
      <div className="info-card">
        <AiFillPhone className='phone-icon'/>
        <div>
          <h3>Telefone</h3>
          <p>(16) 9 9265-6120</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail className='email-icon'/>
        <div>
          <h3>E-mail</h3>
          <p>alexsicchieri@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment className='pin-icon'/>
        <div>
          <h3>Localização</h3>
          <p>Ribeirão Preto - SP</p>
        </div>
      </div>
    </section>
  )
}