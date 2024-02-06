import Main from './components/Main'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Snowflakes from './components/Snowflakes.jsx'

function App() {
  return (
    <div className="container">
      <Snowflakes />
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
