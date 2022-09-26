import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Assets from './components/Assets';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Assets />
      <Footer />
    </>
  );
}

export default App;
