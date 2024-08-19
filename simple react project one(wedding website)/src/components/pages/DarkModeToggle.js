import React from 'react';

const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
