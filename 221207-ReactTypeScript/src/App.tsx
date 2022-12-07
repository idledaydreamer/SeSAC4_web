import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw, reset } from './modules/bank';

import Bank from './components/Bank';

//*  react redux hooks : Component에 Redux 적용하기

// Type Alias
type AppProps = {
  name: string;
  age?: number;
}

function App() {

  //? useState Type -  Generic
  // const [list, setList] = useState<number[]>([]);


  return (
    <div className="App">
      <Bank />
    </div>
  );
}

export default App;

