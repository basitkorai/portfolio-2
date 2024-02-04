import Main from './components/Main'
import Navbar from './components/Navbar'
import SocialList from './components/SocialList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <SocialList />
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
