import { useState } from 'react';

export function useLazyLoading(callback) {
  const [isVisible, setIsVisible] = useState(null);
 

    const observerCallback = (entries, observer) => {
      entries.forEach(async (entry) => {

        if (entry.isIntersecting) {
          await callback()
        }
      })
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 1 })
    const observe = (element) => {
      if(isVisible) {
        //unobserve last element
        observer.unobserve(isVisible);
      }
      // observe the new element
      observer.observe(element);
      setIsVisible(element);

    }

  

  return {
    observe,
  };

 
};


