import { useState, useEffect } from 'react';

const useTheme = (showAlert) => {
  const [appTheme, setAppTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setAppTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = appTheme === 'light' ? 'dark' : 'light';
    setAppTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    showAlert('success', `${newTheme} mode is enabled..!`);
  };

  return [appTheme, toggleTheme];
};

export default useTheme;
