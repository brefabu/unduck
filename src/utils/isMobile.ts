import { useState, useEffect } from 'react';

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return isMobile;
};

export default useMobile;