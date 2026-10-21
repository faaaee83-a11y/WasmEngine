const canvas = document.createElement("canvas");
canvas.id = "canvas";                 // TitleState が探すための id
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const mod = await import("./states/TitleState.js");
new mod.TitleState();
