export const scrollReveal = () => {
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  const elementInView = (el: Element, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el: Element) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element: Element) => {
    element.classList.add('revealed');
  };

  const hideScrollElement = (element: Element) => {
    element.classList.remove('revealed');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  
  // Initial check on load
  handleScrollAnimation();

  return () => {
    window.removeEventListener('scroll', handleScrollAnimation);
  };
};
