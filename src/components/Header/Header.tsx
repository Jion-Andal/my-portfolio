import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="logo">
          <h1 className="navbar-brand mb-0">Jion's Portfolio</h1>
        </div>
        <nav className="navbar-collapse">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${isOpen ? 'show' : ''}`}>
            <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacts">Contacts</a></li>
          </ul>
          <button className="btn btn-outline-light ms-3" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </header>
  );
}
