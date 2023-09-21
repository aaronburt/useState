# useState
This module provides simple state management similar to React's useState

## Usage

### Installation

To use this module, install it via npm or yarn:


```js
import useState from '@aaronburt/usestate';

const [count, setCount] = useState(0);

console.log('Current count:', count);  // Output: Current count: 0

setCount(count + 1);

console.log('Updated count:', count);  // Output: Updated count: 1
```