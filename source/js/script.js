// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import form from './modules/form.js';
import social from './modules/social.js';
import pageLoaded from './modules/page-loaded.js';
import FullPageScroll from './modules/full-page-scroll';
import animateText from './modules/animate-text';
import animateSvg from "./modules/animate-svg"
import {Game} from './modules/game.js';

// init modules
pageLoaded();
mobileHeight();
slider();
menu();
footer();
chat();
form();
social();
animateText();
animateSvg();

const game = new Game();
game.init();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
