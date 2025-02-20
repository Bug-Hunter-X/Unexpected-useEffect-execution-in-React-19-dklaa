```javascript
import { useState, useEffect, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Use useMemo to prevent unnecessary re-renders
  const memoizedCount = useMemo(() => count, [count]);

  useEffect(() => {
    console.log('Effect runs!');
  }, [memoizedCount]); // Only runs when memoizedCount changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```