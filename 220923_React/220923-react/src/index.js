import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import EventClass from './EventClass';
// import EventFunction from './EventFunction';
import StateClass2 from './StateClass2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass name='우왕' />
    <StateFunction />
    <EventClass />
    {/* <EventFunction /> */}
    <StateClass2 />
  </React.StrictMode>
);

