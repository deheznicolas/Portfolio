const canvas = document.getElementById("mycanvas");
const c = canvas.getContext("2d");
let width;
let height;

//Responsive Canvas for different screen size

const canvasToResponsive = () => {
  width = document.getElementById("star-transition").clientWidth;
  height = document.getElementById("star-transition").clientHeight;
  canvas.width = width;
  canvas.height = height;
};

canvasToResponsive();

window.onresize = () => {
  canvasToResponsive();
};




//Building stars in the field

const makeStars = count => {
  const out = [];
  for (let i = 0; i < count; i++) {
    const s = {
      x: Math.random() * 1600 - 800,
      y: Math.random() * 900 - 450,
      z: Math.random() * 10000
    };
    out.push(s);
  }
  return out;
};

let stars = makeStars(10000);

const clear = () => {
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
};

const putPixel = (x, y, brightness) => {
  const intensity = brightness * 255;
  const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
  c.fillStyle = rgb;
  c.fillRect(x, y, 1, 1); //Utiliser drawCircle pour générer des ronds des x pixel de rayon, pour avoir des étoiles de différentes tailles
};


//Moving stars from template
const moveStars = distance => {
  const count = stars.length;
  for (var i = 0; i < count; i++) {
    const s = stars[i];
    s.z -= distance;
    while (s.z <= 1) {
      s.z += 1;
    }
  }
};

let prevTime;
const init = time => {
  prevTime = time;
  requestAnimationFrame(tick);
};

const tick = time => {
  let elapsed = time - prevTime;
  prevTime = time;

  moveStars(elapsed * 0.05);

  clear();

  const cx = width / 2;
  const cy = height / 2;

  const count = stars.length;
  for (var i = 0; i < count; i++) {
    const star = stars[i];

    const x = cx + star.x / (star.z * 0.001);
    const y = cy + star.y / (star.z * 0.001);

    if (x < 0 || x >= width || y < 0 || y >= height) {
      continue;
    }

    const d = star.z / 1000.0;
    const b = 1 - d * d;

    putPixel(x, y, b);
  }

  requestAnimationFrame(tick);
};

requestAnimationFrame(init);