import * as THREE from 'three';
import {Scene3d} from './scene-3d';
import {setup3d} from './setup-3d';
import {SCREEN_NAMES, STORY_SLIDE_NAMES} from '../../constants';
import {getRawShaderMaterial} from './shaders';

const IMAGES = Object.freeze({
  [SCREEN_NAMES.TOP]: {
    image: `img/module-5/scenes-textures/scene-0.png`,
    hueShift: 0.0,
  },
  [STORY_SLIDE_NAMES.DOG_AND_SUITCASE]: {
    image: `img/module-5/scenes-textures/scene-1.png`,
    hueShift: 0.0,
  },
  [STORY_SLIDE_NAMES.PYRAMID_AND_CACTUS]: {
    image: `img/module-5/scenes-textures/scene-2.png`,
    hueShift: -0.25,
  },
  [STORY_SLIDE_NAMES.SNOWMAN_AND_COMPASS]: {
    image: `img/module-5/scenes-textures/scene-3.png`,
    hueShift: 0.0,
  },
  [STORY_SLIDE_NAMES.AI_SONYA]: {
    image: `img/module-5/scenes-textures/scene-4.png`,
    hueShift: 0.0,
  },
});

const SCENE_INDEX_BY_NAME = Object.freeze({
  [SCREEN_NAMES.TOP]: 0,
  [STORY_SLIDE_NAMES.DOG_AND_SUITCASE]: 1,
  [STORY_SLIDE_NAMES.PYRAMID_AND_CACTUS]: 2,
  [STORY_SLIDE_NAMES.SNOWMAN_AND_COMPASS]: 3,
  [STORY_SLIDE_NAMES.AI_SONYA]: 4,
});

const IMAGE_WIDTH = 2048;

class Scene3dStory extends Scene3d {
  constructor() {
    super();
    this.mainScreen = SCREEN_NAMES.TOP;
    this.storyScreen = STORY_SLIDE_NAMES.DOG_AND_SUITCASE;
    this.updateScreen = this.updateScreen.bind(this);
    this.updateSlide = this.updateSlide.bind(this);
  }

  getSceneIndex(name) {
    return SCENE_INDEX_BY_NAME[name];
  }

  setCameraPosition(screenName) {
    const sceneName = screenName === SCREEN_NAMES.STORY ? this.storyScreen : screenName;
    const sceneIndex = this.getSceneIndex(sceneName);
    this.camera.position.x = IMAGE_WIDTH * sceneIndex;
    this.render();
  }

  updateScreen({detail}) {
    const {screenName} = detail;
    if (screenName !== SCREEN_NAMES.TOP && screenName !== SCREEN_NAMES.STORY) {
      return;
    }
    this.mainScreen = screenName;
    this.setCameraPosition(screenName);
  }

  updateSlide({detail}) {
    this.setCameraPosition(detail.slideName);
  }

  setListener() {
    document.body.addEventListener(`screenChanged`, this.updateScreen);
    document.body.addEventListener(`slideChanged`, this.updateSlide);
  }

  initTexture() {
    const geometry = new THREE.PlaneBufferGeometry(2048, 1024);
    const loadManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadManager);
    const textures = Object.entries(IMAGES).map(([_, {image, hueShift}]) => ({
      map: textureLoader.load(image),
      hueShift
    }));

    loadManager.onLoad = () => {
      textures.forEach((texture, index) => {
        const material = getRawShaderMaterial({map: {value: texture.map}, hueShift: {value: texture.hueShift}});
        const plane = new THREE.Mesh(geometry, material);
        plane.position.x = IMAGE_WIDTH * index;
        this.scene.add(plane);
      });
      this.render();
    };
  }

  init() {
    super.init();
    this.initTexture();

    const {
      renderer,
      scene,
      camera
    } = setup3d({initialWidth: this.width, initialHeight: this.height});
    camera.position.z = 1000;
    scene.add(camera);
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.appendRendererToDOMElement(this.renderer, document.getElementById(`animation-screen`));
    this.setListener();
  }

  resize() {
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export const scene3dStory = new Scene3dStory();