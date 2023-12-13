import { useState, useEffect } from 'react';

const localStorageKullan = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);

return [value, setValue];
};

export default localStorageKullan