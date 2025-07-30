import { useEffect } from 'react';
import { gsap } from 'gsap';

// This is our custom hook
export default function useMagneticEffect(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(element, {
        x: x * 0.4, // Adjust the multiplier for more/less effect
        y: y * 0.4,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    // Cleanup function
    return () => {
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref]); // Rerun effect if the ref changes
}