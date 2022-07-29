import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavButtons from './components/NavButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';

function App() {
  return (
    <div className="mx-auto max-w-[1200px] mt-4 py-6 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <NavButtons />
      <Inputs />
      <TimeAndLocation />
    </div>
  );
}

export default App;
