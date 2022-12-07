import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Type Alias
type AppProps = {
  name: string;
  age?: number;
}

function App(props: AppProps) {
  // useState Type -  Generic
  const [list, setList] = useState<number[]>([]);

  return (
    <div className="App">
      { props.name}
    </div>
  );
}

export default App;
