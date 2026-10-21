export async function gfshow() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // 画像の読み込み
  const img = new Image();
  img.src = "../../preload/image/gfDanceTitle.png";
  await img.decode();

  // XMLの読み込み
  const res = await fetch("../../preload/image/gfDanceTitle.xml");
  const text = await res.text();
  const doc = new DOMParser().parseFromString(text, "application/xml");

  // コマ情報を配列にする
  const frames = [...doc.querySelectorAll("SubTexture")].map(s => ({
    x: Number(s.getAttribute("x")),
    y: Number(s.getAttribute("y")),
    width: Number(s.getAttribute("width")),
    height: Number(s.getAttribute("height")),
    frameX: Number(s.getAttribute("frameX") || 0),
    frameY: Number(s.getAttribute("frameY") || 0),
  }));

  // アニメ開始
  const fps = 24;
  const posX = 100; // 表示位置(好きな値に)
  const posY = 100;
  const start = performance.now();

  function loop(now) {
    const i = Math.floor((now - start) / (1000 / fps)) % frames.length;
    const f = frames[i];

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      f.x, f.y, f.width, f.height,          // 切り出し
      posX - f.frameX, posY - f.frameY,     // 位置補正
      f.width, f.height
    );

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}
