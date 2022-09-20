import './styles/global.scss'
import './App.scss'
import { Sidebar } from './components/sidebar'
import { MainContent } from './components/mainContent'

function App() {
  return (
    <div className='container'>
      <h1>Alexandre Sicchieri Cancian</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
