const stickyNavbar = () => {
  const navbarHeader = document.querySelector('#primary-header');
  const scrollDetector = document.createElement('div');

  scrollDetector.setAttribute('data-scroll-detector', '');
  navbarHeader.before(scrollDetector);

  const navObserver = new IntersectionObserver((entries) => {
    navbarHeader.classList.toggle('sticking', !entries[0].isIntersecting);
  }, {rootMargin: "150px 0px 0px 0px"});

  navObserver.observe(scrollDetector);
};

export default stickyNavbar;