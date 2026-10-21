export async function gfshow() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const gf = new Sprite("../../assets/shared/images/gfDanceTitle.png", "../../assets/shared/images/gfDanceTitle.xml");
  await gf.load();
  gf.x = canvas.width / 2;
  gf.y = canvas.height / 2;
  gf.play("gfDance", 30, true);

  let last = performance.now();
  function loop(now) {
    const dt = (now - last) / 1000;
    last = now;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gf.update(dt);
    gf.draw(ctx);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}
