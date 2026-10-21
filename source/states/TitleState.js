export class TitleState {
  constructor() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const titlefont = new FontFace("VCR", "url(assets/shared/fonts)");
    await titlefont.load();
    document.fonts.add(titlefont);
    
    ctx.font = "32px VCR";
    ctx.fillStyle = "white";
    let text = "This is Friday Night Funk1n";
    let width = ctx.measureText(text).width;
    let height = ctx.measureText(text).height;
    await sleep(2500);
    text = "Made By SelvenaDev";
    width = ctx.measureText(text).width;
    height = ctx.measureText(text).height;
    await sleep(2500);
    text = "This Fr1day n1ght funk1n made by ninjamuffin99";
    width = ctx.measureText(text).width;
    height = ctx.measureText(text).height;
    text = "Made By SelvenaDev";
    width = ctx.measureText(text).width;
    height = ctx.measureText(text).height;
  }
}
