import React from 'react';
import { 
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons'

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°</p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={20} className="mr-2" />
            Real feel:
            <span className="font-medium ml-2">34°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={20} className="mr-2" />
            Humidity:
            <span className="font-medium ml-2">72%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={20} className="mr-2" />
            Wind:
            <span className="font-medium ml-2">11 mph</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-2">06:45 AM</span>
        </p>
        <p className="font-light">|</p>


        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-2">07:24 PM</span>
        </p>
        <p className="font-light">|</p>


        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-2">92°</span>
        </p>
        <p className="font-light">|</p>


        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-2">64°</span>
        </p>
      </div>

    </div>
  );
};

export default TemperatureAndDetails;
