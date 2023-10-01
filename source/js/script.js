// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import form from './modules/form.js';
import social from './modules/social.js';
import pageLoaded from './modules/page-loaded.js';
import FullPageScroll from './modules/full-page-scroll.js';
import animateTypography from './modules/animate-typography.js';
import awardAnimation from './modules/award-animation.js';
import {Game} from './modules/game.js';
import {scene3dStory} from './modules/3d/scene-3d-story.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
form();
social();
animateTypography();
awardAnimation();

const game = new Game();
game.init();
scene3dStory.init();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
pageLoaded();

window.scene3dStory = scene3dStory;

