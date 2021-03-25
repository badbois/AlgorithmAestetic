// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
gui.close()
const params = {
    Random_Seed: 0,
    nb_Lines: 19,
    nb_Columns: 14,
    Download_Image: () => save(),
}
gui.add(params, "nb_Lines",1, 100, 1)
gui.add(params, "nb_Columns",1, 100, 1)
gui.add(params, "Random_Seed",0, 255, 1)
gui.add(params, "Download_Image")


// -------------------
//       Menu
// -------------------
let MENU=0
let img


function preload() {
    img = loadImage('Assets/8ecke.jpg');
  }

function menu(){
    background(234,234,234);
    textSize(50)
    fill(0);
    textAlign(CENTER)
    text('Recoding project', windowWidth/2, 50);
    textSize(14)
    text('For this project, i had to recode an artwork from a pioneer artist from the 60’s, 70’s.', windowWidth/2, 100);
    text('I choose an artwork made by Georg Nees : "8-Ecke" that you can see below', windowWidth/2, 125);  
    image(img, (windowWidth/2)-150, 150);
    text('Click on the image to see my recoding of this work', windowWidth/2, 575);
    let link= createA("https://github.com/badbois/Recoding_Project",
"click here to see the github page", "_blank");
   // link.size(14);
    link.position(windowWidth/2-100, 600);
    

}

function mouseClicked() {
    if (MENU == 0) {
      if (mouseX > (windowWidth/2)-150 && mouseX < (windowWidth/2)+156 ) {
        if (mouseY < 550 && mouseY > 150) {
          MENU = 1
          p6_canvasStyle=1;
          gui.open()
        }
      }
    }
  }

// -------------------
//       Drawing
// -------------------
let premierX=0
let premierY=0
let precedentX=0
let precedentY=0

function draw() {
    p6_ResizeCanvas();
    rect(0,0 ,width, height)
    if(p6_canvasStyle==0){
        menu()
    }else if(p6_canvasStyle==1){
        randomSeed(params.Random_Seed)
        background("white")
        strokeWeight(1)

        //Second code
        noFill()
        for(let x=1; x<(params.nb_Columns+2); x++){
            for(let y=1; y<(params.nb_Lines+2); y++){
                beginShape()
                for(let i=0; i<8; i++){
                    //Picking a point
                    let X=random((x-1)*(width/params.nb_Columns),(x)*(width/params.nb_Columns))
                    let Y=random((y-1)*(height/params.nb_Lines),(y)*(height/params.nb_Lines))
                    //Draw a line between point
                    vertex(X, Y)
                }
                //Closing shape
                endShape(CLOSE)

            }
        }
        
        //first code
       /* for(let x=1; x<(params.nb_Columns+2); x++){
            for(let y=1; y<(params.nb_Lines+2); y++){
                for(let k=0; k<8; k++){
                    //picking a random point
                    let X=random((x-1)*(width/params.nb_Columns),(x)*(width/params.nb_Columns))
                    let Y=random((y-1)*(height/params.nb_Lines),(y)*(height/params.nb_Lines))
                    if(k==0){
                        premierX=X
                        premierY=Y
                        precedentX=premierX
                        precedentY=premierY
                    }else{
                        //Draw a line between points
                        line(X, Y, precedentX, precedentY)
                        //Closing the shape
                        if(k==7){
                            line(X, Y, premierX, premierY)
                        }
                        precedentX=X;
                        precedentY=Y;
                    }
                }
            }
        }*/

        
    }
			
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}