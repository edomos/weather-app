import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavButtons from './components/NavButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="mx-auto max-w-[1200px] mt-4 py-6 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <NavButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;
