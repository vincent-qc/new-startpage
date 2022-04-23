const r = Math.ceil(Math.random() * 6);

const bg =  document.getElementById('background').style;

if(r >= 6) {
    bg.background = `url(assets/${r}.png)`;
} else if(r >= 5) {
    bg.background = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url(assets/${r}.png)`;
}else {
    bg.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7) ), url(assets/${r}.png)`;
}

//bg.backgroundImage = `url(assets/${r}.jpg)`;
bg.backgroundSize = 'cover';
bg.backgroundRepeat = 'no-repeat';