import React, { useState, useRef, useEffect } from 'react';
import NavItem from './NavItem';
import Menu from './Menu';
import FeatureList from './FeatureList';
import Link from 'next/link'; 
import './header.css';
import { useRouter } from 'next/router';
import NV1 from './Navbar_new';
import FeatureLayout from './FeatureLayout';
import zIndex from '@mui/material/styles/zIndex';
import FeatureLayoutNew from '../../SComponents/FeatureLayout';
import FeatureLayoutMax from '../../CComponents/FeatureLayout';
import EducationDashboard from '../../RComponents/EducationDashboard';
const navItems = [
  { label: 'HOME', layerName: 'home', href: '/center_home' },
  { label: 'PRODUCTS', layerName: 'products' },
  { label: 'SERVICES', layerName: 'services' },
  { label: 'PRICING', layerName: 'aboutus', href: '/pricing' },
  { label: 'RESOURCES', layerName: 'resources' },
];
const dropdownData = {
  PRODUCTS: [
  { label: "Career", href: "/career" },
  { label: "About Us", href: "/aboutus" },
  { label: "Resources", href: "/resources" },
  ],
};
function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    zIndex: 1000,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDropdownPosition({
        top: buttonRefs.current[activeDropdown]?.getBoundingClientRect().bottom + window.scrollY+12,
        left: buttonRefs.current[activeDropdown]?.getBoundingClientRect().left + window.scrollX-50,
        zIndex: 1000,
      });
    }
  }, [activeDropdown]);

  const handleClick = () => {
    router.push('/contactGlobal');
  };
  const handleClickHome = () => {
      router.push("/"); 
    };
  const handleDropdownToggle = (layerName) => {
    setActiveDropdown(layerName);
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null);
    setDropdownPosition({
      top: 0,
      left: 0,
      zIndex: 1000,
      transform: "translateX(-4%)",
    });
  };
  const handleLeftMenuHover = (id) => {
    if (id === 1 || id === 2 || id === 3 || id === 4 || id === 5 || id === 6) {
      setDropdownPosition({
        top: 50,
        left: "11%",
        transform: "translateX(-4%)",
        zIndex:1000
      });
    } else {
      if (typeof window !== 'undefined') {
        setDropdownPosition({
          top: buttonRefs.current[activeDropdown]?.getBoundingClientRect().bottom + window.scrollY,
          left: buttonRefs.current[activeDropdown]?.getBoundingClientRect().left + window.scrollX,
          zIndex: 1000,
          transform: "translateX(-4%)",
        });
      }
    }
  };
  const handleLeftMenuHoverNew = (id) => {
    if (id === 1 || id === 2 || id === 3 || id === 4 || id === 5 || id === 6) {
      setDropdownPosition({
        top: 50,
        left: "13%",
        transform: "translateX(-4%)",
        zIndex:1000
      });
    } else {
      setDropdownPosition({
        top: 50,
        left: "46%",
        transform: "translateX(-4%)",
        zIndex:1000
      });
    }
  };
  
  return (
    <>
      {/* Large Screens (lg) */}
      <header className="hidden lg:flex md:flex overflow-hidden flex-wrap font-intermedium gap-5 justify-between px-16 py-1 w-full bg-gradient-to-r from-[rgb(42,62,92)] to-[rgb(42,62,92)]" style={{
      boxShadow: '0 8px 10px 0px rgba(42, 62, 92, 0.5)',
    }}>
        <img
          loading="lazy"
          src="/center_home_images/Group 190 (1).png"
          alt=""
          className="object-contain shrink-0 w-28 max-w-full aspect-[2.67]"
          onClick={handleClickHome}
        />
        <nav className="flex flex-wrap gap-10 items-center my-auto text-white">
          {navItems.map((item) => (
            item.href ? (
              <Link key={item.layerName} href={item.href}>
                <button
                  ref={(el) => (buttonRefs.current[item.layerName] = el)}
                  onMouseEnter={() => handleDropdownToggle(item.layerName)}
                  className="relative z-10 text-white"
                >
                  <NavItem label={item.label} layerName={item.layerName} />
                </button>
              </Link>
            ) : (
              <button
                key={item.layerName}
                ref={(el) => (buttonRefs.current[item.layerName] = el)}
                onMouseEnter={() => handleDropdownToggle(item.layerName)}
                className="relative z-10 text-white"
              >
                <NavItem label={item.label} layerName={item.layerName} />
              </button>
            )
          ))}
          <button className="contact-button gap-2 self-stretch px-1 py-1 text-white bg-sky-500 rounded-xl min-h-[10px]" onClick={handleClick}>
            Contact Us
          </button>
        </nav>
      </header>

      {/* Medium Screens (md) */}
      <header className="lg:hidden md:hidden sm2:flex overflow-hidden flex-wrap">
        {/* Future content for medium screens (md) */}
        <NV1 dropdownDataType="headerNavbar" className="flex-shrink-0 max-w-full"/>
        <div className="hidden"> {/* Placeholder or future header content for md screens */} </div>
      </header>

      {/* Small Screens (sm)
      <header className="lg:hidden md:hidden sm:flex overflow-hidden">
        Future content for small screens (sm)
        <NV1 />
        <div className="hidden"> Placeholder or future header content for sm screens  </div>
      </header>
       */}
      {/* Dropdown Content (Products / Services) */}
      {(activeDropdown === 'products' || activeDropdown === 'services' || activeDropdown === 'company') && (
        <div
          ref={dropdownRef}
          className="absolute transition-all duration-300 ease-in-out fade-in"
          style={dropdownPosition}
        >
          {activeDropdown === 'products' && (
            <div onMouseLeave={handleMouseLeaveDropdown}>
              <FeatureLayout onLeftMenuHover={handleLeftMenuHover} />
            </div>
          )}
          {activeDropdown === 'services' && (
            <div onMouseLeave={handleMouseLeaveDropdown}>
              <FeatureLayoutNew onLeftMenuHover={handleLeftMenuHoverNew} />
            </div>
          )}
          {activeDropdown === 'company' && (
            <div onMouseLeave={handleMouseLeaveDropdown}>
              <FeatureLayoutMax/>
            </div>
          )}
        </div>
      )}
      {(activeDropdown === 'resources') && (
        <div
        ref={dropdownRef}
        className={`absolute transition-all duration-300 ease-in-out fade-in`}
        style={{
          top: 50,
          left: '8%', 
          transform: 'translateX(-4%)', 
          zIndex: 1000,
        }}
      >
        {activeDropdown === 'resources' && (
          <div onMouseLeave={handleMouseLeaveDropdown}>
                  <EducationDashboard  />
          </div>
        )}
      </div>
      )}
    </>
  );
}

export default NavBar;
