import { useState, useEffect } from 'react';
import firebase from '../firebase';

function HomePage() {
  const [ledValue, setLedValue] = useState('');

  useEffect(() => {
    const ledRef = firebase.ref('LED');
    ledRef.on('value', (snapshot) => {
      const data = snapshot.val();
      setLedValue(data);
    });
  }, []);

  const handleLedToggle = () => {
    const ledRef = firebase.ref('LED');
    const newValue = ledValue === 'OFF' ? 'ON' : 'OFF';
    ledRef.set(newValue);
  };

  return (
    <div>
      <p>Valor do LED: {ledValue}</p>
      <button onClick={handleLedToggle}>Toggle LED</button>
    </div>
  );
}

export default HomePage;
