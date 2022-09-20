import { useEffect } from 'react'
import './styles.scss'

export const PowerKnowledge = (props) => {
  const level =  props.level 
  return(
    <span className='power-container'>
      <h3>Nível</h3>
      <progress className='progress-box' max={3} value={level}/>
    </span>
  )
}