import { useState } from 'react';



const App = () => {

  const [v, setV] = useState(0);




  const hacerCosas = () => {
    setV(v + 1);
    console.log(v)
  }

  return (
    <div >

      {v}
      <button onClick={hacerCosas}> Pulsar</button >
    </div >
  );
}

export default App;
