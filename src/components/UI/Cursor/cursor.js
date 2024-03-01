import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const checkDeviceType = () => {
      try {
        document.createEvent('TouchEvent');
        setDeviceType('touch');
      } catch (e) {
        setDeviceType('mouse');
      }
    };
    checkDeviceType();
  }, []);

  const defaults = {
    color: 'var(--text-color)',
    size: 10,
    trailColor: 'var(--text-color)',
    trailTime: 300,
    showTrail: false,
    clickAnimation: true,
  };

  const [config, setConfig] = useState(defaults);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event.touches ? event.touches[0] : event;;
    setCursorPos({ x: clientX, y: clientY });

    if (config.showTrail) {
      const trail = document.createElement("div");
      trail.style.backgroundColor = config.trailColor;
      trail.style.width = `${config.size * 0.4}px`;
      trail.style.height = `${config.size * 0.4}px`;
      trail.style.position = "fixed";
      trail.style.borderRadius = "50%";
      trail.style.top = `${clientY - (config.size * 0.4) / 2}px`;
      trail.style.left = `${clientX - (config.size * 0.4) / 2}px`;
      trail.style.pointerEvents = "none";
      document.body.appendChild(trail);
      setTimeout(() => {
        document.body.removeChild(trail);
      }, config.trailTime);
    }
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleElementEnter = () => {
      setIsHovered(true);
    };

    const handleElementLeave = () => {
      setIsHovered(false);
    };

    const elements = document.querySelectorAll('button, a');

    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleElementEnter);
      element.addEventListener('mouseleave', handleElementLeave);
      element.style.cursor = 'none';
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleElementEnter);
        element.removeEventListener('mouseleave', handleElementLeave);
        element.style.cursor = 'auto';
      });
    };
  }, []);

  const cursorSize = isHovered ? 20 : 20;
  // const dotSize = isHovered ? 20 : 3;
  const cursorStyle = {
    position: 'fixed',
    top: cursorPos.y - cursorSize / 2,
    left: cursorPos.x - cursorSize / 2,
    width: cursorSize,
    height: cursorSize,
    borderRadius: '50%',
    border: '2px solid var(--text-color)',
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'width 0.2s ease, height 0.2s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  const dotStyle = {
    mixBlendMode:'difference',
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    backgroundColor: 'var(--text-color) ',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.1s'
  };
  
  if (deviceType === 'touch') {
    return null;
  }

  return (
    <div id="cursor-border"
      style={cursorStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={dotStyle}></div>
    </div>
  );
};

export default Cursor;