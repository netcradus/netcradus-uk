import React, { useState, useRef, useEffect } from 'react';
import gbFlag from '../assets/flags/gb.svg';
import inFlag from '../assets/flags/in.svg';
import auFlag from '../assets/flags/au.svg';

const COUNTRIES = [
  { id: 'gb', code: 'GB', name: 'United Kingdom', flag: gbFlag },
  { id: 'in', code: 'IN', name: 'India', flag: inFlag, url: 'https://www.netcradus.in/' },
  { id: 'au', code: 'AU', name: 'Australia', flag: auFlag, url: 'https://aus.netcradus.com/' },
];

export default function CountryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]); // Default: United Kingdom
  const [searchQuery, setSearchQuery] = useState('');
  
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  // Select country handler
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
    
    if (country.code === 'AU') {
      window.location.href = 'https://aus.netcradus.com/';
      return;
    }
    
    if (country.url) {
      window.location.href = country.url;
    }
  };

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Filter countries based on search query
  const filteredCountries = COUNTRIES.filter(country =>
    country.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="country-dropdown-wrapper" ref={dropdownRef}>
      <button
        type="button"
        className={`country-selector-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Country or Region"
      >
        <span className="country-btn-left">
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.name} flag`}
            className="country-flag-img"
          />
          <span className="country-name">{selectedCountry.name}</span>
        </span>
        <svg
          className={`country-chevron ${isOpen ? 'open' : ''}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="#FF6B00"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="country-dropdown-menu"
          role="listbox"
          aria-label="Countries list"
        >
          <div className="country-search-container">
            <input
              ref={searchInputRef}
              type="text"
              className="country-search-input"
              placeholder="Find a country or region"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Find a country or region"
            />
          </div>

          <div className="country-list-scroll">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const isSelected = country.id === selectedCountry.id;
                return (
                  <button
                    key={country.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={`country-list-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectCountry(country)}
                  >
                    <span className="country-item-left">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="country-flag-img"
                      />
                      <span className="country-item-name">{country.name}</span>
                    </span>
                    {isSelected && (
                      <span className="country-checkmark" aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })
            ) : (
              <div className="country-no-results">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
