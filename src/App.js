import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
   <>
     <div className='overflow-hidden bg-slate-950'>
     <Navbar/>
     <Home/>
     </div>
   </>
  );
}

export default App;
