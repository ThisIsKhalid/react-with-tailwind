import './App.css';
import Assignment from './components/Assignment/Assignment';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl font-medium font-mono underline'>Welcome to BIG BAZAR</h1>
      <p className='text-xl font-medium'>Choose Your Plan.</p>
      <Pricing></Pricing>
      <Assignment></Assignment>
    </div>
  );
}

export default App;
