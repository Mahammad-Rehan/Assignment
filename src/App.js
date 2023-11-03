import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import { useState } from 'react';
import bulbon from './bulb-on.png';
import bulboff from'./bulb-off.png';

function App() 
{

  const [counter, setCounter] = useState(0)

  const [mountFirst, setmountFirst] = useState(true)
  const [mountSecond, setmountSecond] = useState(false)


  const handleMountFirst = () =>
  {
    setmountSecond(false)
    setmountFirst(true)
  }

  const handleMountsecond = () => 
  {
    setmountSecond(true)
    setmountFirst(false)
  }


  return (
    <div className="App">
        <h1>Counter : {counter}</h1>
        <div>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <br></br>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>

          {(counter % 2) === 0 ? (
          <h1 className='bulboffpic'><img src={bulbon}></img></h1>
            ) : (
          <h1 className='bulbon'><img src={bulboff}></img></h1>
          )}
        </div>
        
        {mountFirst && <FirstComponent/>}
        {mountSecond && <SecondComponent/>}

        <div>
          <button onClick={handleMountFirst}>Toggle First Component</button> 
          <button onClick={handleMountsecond}>Toggle Second Component</button>
        </div>
    </div>
  );
}

export default App;

