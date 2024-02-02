import Main from './components/Main'
import Navbar from './components/Navbar'
import SocialList from './components/SocialList'

function App() {
  return (
    <div className="container">
      <SocialList />
      <Navbar />
      <Main />
      <footer>footer</footer>
    </div>
  )
}

export default App
