export class freakyMenuStart {
  constructor() {
    const freakyMenu = new Audio("../../assets/shared/music/freakyMenu.ogg");
    freakyMenu.play();
  }
}

export class freakyMenuStop {
  constructor() {
    const freakyMenu = new Audio("../../assets/shared/music/freakyMenu.ogg");
    freakyMenu.pause;
    freakyMenu.currentTime = 0;
  }
}
