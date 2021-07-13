import { useEffect, useState } from 'react';
import './App.scss';
import Counters from './components/counters';
import Navbar from './components/navbar';

function App() {
  const dataCounter = [
    { id: 1, value: 3 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ];
  const [counters, setCounters] = useState(dataCounter);

  const handleDelete = (id: number) => {
    const newData = counters.filter(item => item.id !== id);
    setCounters(newData);
  }

  const handleIncrement = (counter: any) => {
    const cloneCounters = [...counters];
    const index = cloneCounters.indexOf(counter);
    cloneCounters[index] = { ...counter };
    cloneCounters[index].value++;
    setCounters(cloneCounters);
  }

  const handleResetData = () => {
    const resetData = counters.map(item => {
      item.value = 0;
      return item;
    })
    setCounters(resetData);
  }

  const handleRevertData = () => {
    setCounters(dataCounter);
  }

  useEffect(() => {
    console.log("ngOnInit()");
  }, []);

  return (
    <>
      <Navbar totalCounters={counters.filter(item => item.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onReset={handleResetData}
          onRevert={handleRevertData} />
      </main>
    </>
  );
}

export default App;
