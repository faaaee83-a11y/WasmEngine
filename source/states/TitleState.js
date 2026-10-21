export class TitleState {
  constructor() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const titlefont = new FontFace("VCR", "url(assets/shared/fonts)");
    await titlefont.load();
    document.fonts.add(titlefont);
  }
}
