console.log('Initiating birthday party 🎉')

const name = 'Emily'
let img;
let song;
let red, green, blue;

function preload() {
  img = loadImage(`./faces/${name}-face.png`);
  song = loadSound(`./songs/${name}.mp3`);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    textSize(width/20);
    textAlign(CENTER, CENTER);
    noCursor();
    background(200, 0, 255);
    red = random(0, 255);
    green = random(0, 255);
    blue = random(0, 255);
    img.resize(200, 300);
    getAudioContext().resume()
    userStartAudio().then(function() {
        console.log('Cranking the tunes 🎶');
    });
    song.play();
    document.getElementsByTagName("BODY")[0].click();
}

function draw(){
    fill(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    stroke(51);
    image(img, mouseX-(img.width/2), mouseY-(img.height/2));
    text(`🎉Happy Birthday ${name}🎉`, windowWidth/2, windowHeight/2);
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
