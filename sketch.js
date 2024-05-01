let l;
let p;
let x = 101;
let speed;
let video;
let barFrame;
let barBG;
let fish;
let winCount;
const winNum = document.querySelector("#win-num");
winNum.innerHTML = `<span>0</span>`;
let button = document.querySelector("#btn-reset");


//p5 setup
function setup() {
  const canvas=createCanvas(800,800);
  canvas.parent("sketch-holder");

  video = createVideo('assets/standby.mp4', handleVideo);
  video.parent("sketch-holder");
  video.hide();

  gif = loadImage('assets/standby.gif')

  barFrame = loadImage('assets/bar-frame.png');
  barBG = loadImage('assets/bar-bg.png');
  fish = loadImage('assets/bar-fish.png');

  rewardFish = loadImage('assets/bar-fish.png');

  button.addEventListener("click",reset);
//  buttonReset = createButton("reset");
//  buttonReset.mousePressed(reset);
//  buttonReset.hide();

//  buttonNext = createButton("continue");
//  buttonNext.mousePressed(nextLevel);
//  buttonNext.hide();


  speed =10
  l = int(random(40,100));
  p = int(random(100,600));

  winCount=0;

  canvas.mousePressed(getFish);
  
}

function draw() {
  
  // let vid = video.get();
  image(gif,-2,2);
  gif.resize(800,800);
  
  fill(139,240,74);
  rect(p,50,l,30);

  image(fish,x-40,35);
  fish.resize(80,60);
  

  image(barFrame,58,-1);
  barFrame.resize(680,120);


  x = x + speed;
  if(x>= 690 || x <= 100){
    speed = speed*-1;
  }

    noStroke();
}

function getFish(){
 
    if (x>= p-10 && x<= p+l+10){
    
    if (winCount === 3){
       //gold fish 
       speed = 0; 
       winCount = 0;
       button.style.display = "block";
    }
    else{
        //nomral fish
        speed = 0; 
        winCount=winCount+1;
        button.style.display = "block";
    }
  }
  else{
      //no fish
      speed = 0; 
      winCount = 0;
      button.style.display = "block";
      }
  winNum.innerHTML = `<span>${winCount}</span>`;
  
}

function handleVideo(){
    video.size(800,800);
    video.autoplay();
    video.loop();
}


function reset() {
    x=101;
  speed =10;
  l = int(random(40,100));
  p = int(random(100,600));
  button.style.display = "none";
}

// function nextLevel() {
//     x=101;
//   speed=10+winCount*2;
//   l = int(random(40,100));
//   p = int(random(100,600));
//   buttonNext.hide();
//   buttonReset.hide();
// }


