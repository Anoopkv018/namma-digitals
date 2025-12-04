import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top whenever route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // 👈 this adds the animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
