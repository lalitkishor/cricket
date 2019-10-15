import React from 'react';
import Completed from './component/completed';

const App = () => {
  return (
    <div className="tabs mw8 center mt0">
      <div className="tabs__menu flex">
        <button  className="tabs__menu-item w-third tc bg-white pt4 pb4 bg-animate hover-bg-white pointer red">UPCOMING</button>
        <button  className="tabs__menu-item w-third tc pt4 pb4 bg-animate hover-bg-white pointer">
          RUNNING
        </button>
        <button  className="tabs__menu-item w-third tc pt4 pb4 bg-animate hover-bg-white pointer">
          COMPLETED 
        </button>
      </div>
      <div className="tabs__menu flex mb5 bb b--black-20">
        <label for="section1" className="tabs__menu-item w-third tc bg-white pt4 pb4 bg-animate hover-bg-white pointer red">ALL</label>
        <label for="section2" className="tabs__menu-item w-third tc pt4 pb4 bg-animate hover-bg-white pointer">
          INTERNATIONAL
        </label>
        <label for="section3" className="tabs__menu-item w-third tc pt4 pb4 bg-animate hover-bg-white pointer">
          DOMESTIC  
        </label>
      </div>
      <div className="tabs__content">
        <div>
          <div className="tabs__content__info">
            <Completed/>
          </div>
        </div>
        <div>
          <div className="tabs__content__info">
           
          </div>
        </div>
        <div>

          <div className="tabs__content__info">
           
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
