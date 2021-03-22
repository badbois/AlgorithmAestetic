var gui = new dat.GUI();
gui.close();
var params = {
    Random_Seed: 0,
    nb_Lines: 19,
    nb_Columns: 14,
    Download_Image: function () { return save(); },
};
gui.add(params, "nb_Lines", 1, 100, 1);
gui.add(params, "nb_Columns", 1, 100, 1);
gui.add(params, "Random_Seed", 0, 255, 1);
gui.add(params, "Download_Image");
var MENU = 0;
var img;
function preload() {
    img = loadImage('Assets/8ecke.jpg');
}
function menu() {
    background(234, 234, 234);
    textSize(50);
    fill(0);
    textAlign(CENTER);
    text('Recoding project', windowWidth / 2, 50);
    textSize(14);
    text('For this project, i had to recode an artwork from a pioneer artist from the 60’s, 70’s.', windowWidth / 2, 100);
    text('I choose an artwork made by Georg Nees : "8-Ecke" that you can see below', windowWidth / 2, 125);
    image(img, (windowWidth / 2) - 150, 150);
    text('Click on the image to see my recoding of this work', windowWidth / 2, 575);
}
function mouseClicked() {
    if (MENU == 0) {
        if (mouseX > (windowWidth / 2) - 150 && mouseX < (windowWidth / 2) + 156) {
            if (mouseY < 550 && mouseY > 150) {
                MENU = 1;
                p6_canvasStyle = 1;
            }
        }
    }
}
var premierX = 0;
var premierY = 0;
var precedentX = 0;
var precedentY = 0;
function draw() {
    p6_ResizeCanvas();
    rect(0, 0, width, height);
    if (p6_canvasStyle == 0) {
        menu();
    }
    else if (p6_canvasStyle == 1) {
        randomSeed(params.Random_Seed);
        background("white");
        strokeWeight(1);
        noFill();
        for (var x = 1; x < (params.nb_Columns + 2); x++) {
            for (var y = 1; y < (params.nb_Lines + 2); y++) {
                beginShape();
                for (var i = 0; i < 8; i++) {
                    var X = random((x - 1) * (width / params.nb_Columns), (x) * (width / params.nb_Columns));
                    var Y = random((y - 1) * (height / params.nb_Lines), (y) * (height / params.nb_Lines));
                    vertex(X, Y);
                }
                endShape(CLOSE);
            }
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 0.84;
var __MARGIN_SIZE = 25;
var p6_canvasStyle = 0;
function __desiredCanvasWidth() {
    if (p6_canvasStyle == 1) {
        var windowRatio = windowWidth / windowHeight;
        if (__ASPECT_RATIO > windowRatio) {
            return windowWidth - __MARGIN_SIZE * 2;
        }
        else {
            return __desiredCanvasHeight() * __ASPECT_RATIO;
        }
    }
    else {
        return windowWidth;
    }
}
function __desiredCanvasHeight() {
    if (p6_canvasStyle == 1) {
        var windowRatio = windowWidth / windowHeight;
        if (__ASPECT_RATIO > windowRatio) {
            return __desiredCanvasWidth() / __ASPECT_RATIO;
        }
        else {
            return windowHeight - __MARGIN_SIZE * 2;
        }
    }
    else {
        return windowHeight;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map