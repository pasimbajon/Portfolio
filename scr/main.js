import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/mobile-nav.css'
import '../styles/components/project.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/utils.css'

import stickyNavbar from './utils/sticky-navbar';
stickyNavbar();
import mobileNav from './utils/mobile-nav';
mobileNav();
import inputTxt from './utils/input-txt';
inputTxt();
import switchTheme from './utils/dark-theme';