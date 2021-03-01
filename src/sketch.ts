// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "Random_Seed",0, 255, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------
let premierX=0
let premierY=0
let precedentX=0
let precedentY=0

function draw() {
    randomSeed(params.Random_Seed)
    background("white")
    strokeWeight(1)
    for(let i=1; i<16; i++){
        for(let j=1; j<20; j++){
            for(let k=0; k<8; k++){
                let X=random((i-1)*(width/14),(i)*(width/14))
                let Y=random((j-1)*(height/19),(j)*(height/19))
                if(k==0){
                    premierX=X
                    premierY=Y
                    precedentX=premierX
                    precedentY=premierY
                }else{
                    line(X, Y, precedentX, precedentY)
                    if(k==8){
                        line(X, Y, premierX, premierY)
                    }
                    precedentX=X;
                    precedentY=Y;
                }
            }
        }
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