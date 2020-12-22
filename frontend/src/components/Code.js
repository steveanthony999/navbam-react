import CodeText from './CodeText';

const Code = (props) => {
  return (
    <div>
      <CodeText
        id={'html-code'}
        title={'HTML'}
        textSelectId={'html-select'}
        theCode={`<nav>
  <div id="nav-container">
    <div id="nav-logo">
      <!-- YOUR LOGO HERE -->
    </div>
    <div id="nav-links">
      <a href="#"><!-- YOUR LINKS --></a>
      <a href="#"><!-- WILL GO HERE --></a>
      <a href="#"><!-- ADD OR REMOVE --></a>
      <a href="#"><!-- AS MANY AS --></a>
      <a href="#"><!-- YOU'D LIKE --></a>
    </div>
    <div id="nav-links-mobile">
      <div id="nav-icon">
        <span class='nav-icon-span'></span>
        <span class='nav-icon-span'></span>
        <span class='nav-icon-span'></span>
        <span class='nav-icon-span'></span>
      </div>
    </div>
  </div>
  <div id="nav-mobile-menu">
    <div id="nav-mobile-links">
      <a href="#"><!-- THE SAME LINKS --></a>
      <a href="#"><!-- FROM ABOVE --></a>
      <a href="#"><!-- WILL GO HERE --></a>
      <a href="#"><!-- AS WELL --></a>
      <a href="#"><!-- YOUR LINKS --></a>
    </div>
  </div>
</nav>`}
      />

      <CodeText
        id={'css-code'}
        title={'CSS'}
        textSelectId={'css-select'}
        theCode={`nav { 
  background-color: ${props.location.state.navBackground} 
  width: 100%;
  position: ${props.location.state.navbarPosition};
}

#nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${props.location.state.navbarWidth}; 
  margin: 0 auto; 
  padding: ${props.location.state.storedNavbarHeight} 0;
}

#nav-links a {
  text-decoration: none;
  display: inline-block;
  margin-left: 16px;
  color: ${props.location.state.linkColor};
  transition: 0.2s;
}

${
  props.location.state.linkHoverState === 'scale'
    ? `#nav-links a:hover {
  transform: scale(1.2);
}`
    : props.location.state.linkHoverState === 'color'
    ? `#nav-links a:hover {
  color: ${props.location.state.hoverLinkColor};
}`
    : props.location.state.linkHoverState === 'scaleandcolor'
    ? `#nav-links a:hover {
  transform: scale(1.2);
  color: ${props.location.state.hoverLinkColor};
}`
    : ''
}
#nav-links-mobile {
  display: none;
}

#nav-icon {
  width: 30px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 10;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: ${props.location.state.linkColor};
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 9px;
}

#nav-icon span:nth-child(4) {
  top: 18px;
}

#nav-icon.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-mobile-menu {
  width: 100%;
  height: 500px;
  background: ${props.location.state.mobileNavDrawerBackground};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: top;
  transform: scaleY(0);
  transition: 0.2s;
}

#nav-mobile-links {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#nav-mobile-links a {
  text-decoration: none;
  color: ${props.location.state.mobileNavDrawerLinkColor};
}`}
      />

      <CodeText
        id={'javascript-code'}
        title={'JAVASCRIPT'}
        textSelectId={'javascript-select'}
        theCode={`
const navIcon = document.getElementById('nav-icon');

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('open');
});

const navMobileMenu = document.getElementById('nav-mobile-menu');
const body = document.querySelector('body');

navIcon.onclick = () => {
  openCloseNav(navIcon.classList.value);
};

function openCloseNav(navOpen) {
  if (navOpen === 'open') {
    navMobileMenu.style.transform = 'scaleY(1)';
    body.style.overflow = 'hidden';
  } else {
    navMobileMenu.style.transform = 'scaleY(0)';
    body.style.overflow = 'scroll';
  }
}

${
  props.location.state.navbarShrink
    ? `const nav = document.querySelector('nav');

window.onscroll = () => scrollNav();

function scrollNav() {
  if (window.pageYOffset > 50) {
    nav.style.padding = '0 32px';
  } else {
    nav.style.padding = '${props.location.state.storedNavbarHeight} 32px';
  }
}
          `
    : ''
}`}
      />
    </div>
  );
};

export default Code;
