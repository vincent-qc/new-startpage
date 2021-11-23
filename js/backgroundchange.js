const r = Math.ceil(Math.random() * 4)

console.log(r)

const bg =  document.getElementById('background').style;

bg.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(assets/${r}.jpg)`;
bg.backgroundSize = 'cover';