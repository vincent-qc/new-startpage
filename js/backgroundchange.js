const r = Math.ceil(Math.random() * 4)

const bg =  document.getElementById('background').style;

bg.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7) ), url(assets/${r}.jpg)`;
//bg.backgroundImage = `url(assets/${r}.jpg)`;
bg.backgroundSize = 'cover';
bg.backgroundRepeat = 'no-repeat'