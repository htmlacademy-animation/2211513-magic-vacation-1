const targets =
  [{
    animateTarget: `primaryAwardAppear`,
    parent: `journeys`,
  },
  {
    animateTarget: `secondaryAwardAppear`,
    parent: `cases`,
  }];

class AnimateSvg {
  constructor({animateTarget, parent}) {
    this._animateTarget = animateTarget;
    this._parent = parent;
    this._isPlayed = false;

    this.beginAnimation = this.beginAnimation.bind(this);
  }

  beginAnimation() {
    if (this._isPlayed) {
      return;
    }
    const element = document.getElementById(this._animateTarget);
    element.beginElement();
    this._isPlayed = true;
  }

  init() {
    const node = document.getElementById(this._parent);
    node.addEventListener(`transitionstart`, this.beginAnimation);
  }
}

export default () => {
  targets.forEach(({animateTarget, screenName, parent}) => {
    const svgAnimation = new AnimateSvg({animateTarget, screenName, parent});
    svgAnimation.init();
  });
};
