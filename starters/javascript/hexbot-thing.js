let canvas;
let ctx;
let appWidth;
let appHeight;

let columns;
let rows;

let offsetX;
let offsetY;

// called by NOOPBOT on window.onload

function start_app() {
  draw();
}


function draw() {
  //get the data!
  NOOPBOT_FETCH({
    API: 'hexbot',
    count: 100
  }, drawBackground);
}

function drawBackground(responseJson) {
  console.log({responseJson})
  let i = 0
  setInterval(() => {
    if (i >= 100) i = 0
    document.body.style.backgroundColor = responseJson.colors[i].value
    i++
  }, Math.floor(Math.random() * (200 - 100)) + 100);
}