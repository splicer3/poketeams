import { useEffect } from 'react';
import useViewportStore from './useViewPortStore';

const useViewport = () => {
  const setIsMobile = useViewportStore(state => state.setIsMobile);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640); // 640px is the sm breakpoint in Tailwind CSS
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [setIsMobile]);

  return useViewportStore(state => state.isMobile);
};

export default useViewport;