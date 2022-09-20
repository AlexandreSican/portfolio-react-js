import './styles/global.scss'
import './App.scss'
import { Sidebar } from './components/sidebar'
import { MainContent } from './components/mainContent'

function App() {
  return (
    <div className='container'>
      
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
