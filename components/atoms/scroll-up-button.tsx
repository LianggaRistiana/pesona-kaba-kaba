'use client'

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolled 200px down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top when clicked
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button size="icon" onClick={scrollToTop} className={`fixed p-4 md:p-6 2xl:p-8 bottom-6 rounded-full right-6  shadow-lg transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            <ArrowUp className='h-8 w-8' />
        </Button>
    );
};

export default ScrollUpButton;
