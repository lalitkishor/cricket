import React, { useState } from 'react';
import Schedule from './component/schedule';

const App = () => {

  const [type, setType] = useState('"All"');
  const [status, setStatus] = useState('"upcoming"');

  return (
    <div className="tabs mw8 center mt0">
      <div className="tabs__menu flex">
        <button
          className={`tabs__menu-item w-third tc pt2 pb2 bg-animate hover-bg-white pointer ${status == '"upcoming"' && 'bg-white red'}`}
          onClick={() => setStatus('"upcoming"')}
        >
          UPCOMING
        </button>
        <button
          className={`tabs__menu-item w-third tc pt2 pb2 bg-animate hover-bg-white pointer ${status == '"running"' && 'bg-white red'}`}
          onClick={() => setStatus('"running"')}
        >
          RUNNING
        </button>
        <button
          className={`tabs__menu-item w-third tc pt2 pb2 bg-animate hover-bg-white pointer ${status == '"completed"' && 'bg-white red'}`}
          onClick={() => setStatus('"completed"')}
        >
          COMPLETED
        </button>
      </div>
      <div className="tabs__menu flex bb b--black-20">
        <button
          className={`bn  tabs__menu-item w-third tc pt2 pb2 bg-animate hover-bg-white pointer bg-white ${type == '"All"' && ' red'}`}
          onClick={() => setType('"all"')}
        >
          ALL
          </button>
        <button
          className={`bn tabs__menu-item w-third tc pt2 pb2 bg-animate hover-bg-white pointer bg-white ${type == '"international"' && ' red'}`}
          onClick={() => setType('"international"')}
        >
          INTERNATIONAL
          </button>
        <button
          className={`bn tabs__menu-item w-third tc pt2 pb2 bg-animate hover-bg-white pointer bg-white ${type == '"domestic"' && ' red'}`}
          onClick={() => setType('"domestic"')}
        >
          DOMESTIC
          </button>
      </div>
      <div className="tabs__content">
        <div className="tabs__content__info">
          <Schedule status={status} type={type} />
        </div>
      </div>
    </div>
  )
}
export default App
