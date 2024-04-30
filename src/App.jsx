import './App.css'
import Banner from './assets/Home/Banner/Banner'
import Home from './assets/Home/Home'

function App() {

  return (
    <div>
      <div id='banner'>
        <Banner />
      </div>
      <div id='home' className='hidden'>
        <Home />
      </div>
    </div>
  )
}

export default App
