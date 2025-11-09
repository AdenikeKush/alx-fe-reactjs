import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid gray', borderRadius: '10px', width: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
