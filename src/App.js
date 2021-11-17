import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='app__wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}


export default App;
