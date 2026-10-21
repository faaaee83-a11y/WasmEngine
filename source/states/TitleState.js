import { playMusic } from "./audio.js";
import { gfshow } from "./gfshow.js";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export class TitleState {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.init();   // 非同期の処理は別メソッドで
  }

  // 文字を中央に描く(毎回消してから)
  drawText(text) {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "32px VCR";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  async init() {
    // フォント読み込み(ファイル名まで指定)
    const titlefont = new FontFace("VCR", "url(assets/shared/fonts/vcr-bold.ttf)");
    await titlefont.load();
    document.fonts.add(titlefont);

    playMusic();   // audio.js の export 関数

    const lines = [
      ["This is Friday Night Funk1n", 2500],
      ["Made By SelvenaDev", 2500],
      ["This Fr1day n1ght funk1n made by ninjamuffin99", 2500],
      ["Port By newground(this isnt port by newground)", 500],
      ["Friday", 250],
      ["Friday Night", 250],
      ["Friday Night Funkin", 0],
    ];

    for (const [text, wait] of lines) {
      this.drawText(text);
      await sleep(wait);
    }
  }
}
