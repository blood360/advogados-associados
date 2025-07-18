import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="dropdown-container" onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="dropdown-toggle" 
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)} // Abre ao passar o mouse
      >
        {title} <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {React.Children.map(children, child => (
            <li onClick={() => setIsOpen(false)}>{child}</li> // Fecha ao clicar em um item
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;