var gui = new dat.GUI();
var params = {
    Random_Seed: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "Random_Seed", 0, 255, 1);
gui.add(params, "Download_Image");
var premierX = 0;
var premierY = 0;
var precedentX = 0;
var precedentY = 0;
function draw() {
    randomSeed(params.Random_Seed);
    background("white");
    strokeWeight(1);
    for (var i = 1; i < 16; i++) {
        for (var j = 1; j < 20; j++) {
            for (var k = 0; k < 8; k++) {
                var X = random((i - 1) * (width / 14), (i) * (width / 14));
                var Y = random((j - 1) * (height / 19), (j) * (height / 19));
                if (k == 0) {
                    premierX = X;
                    premierY = Y;
                    precedentX = premierX;
                    precedentY = premierY;
                }
                else {
                    line(X, Y, precedentX, precedentY);
                    if (k == 8) {
                        line(X, Y, premierX, premierY);
                    }
                    precedentX = X;
                    precedentY = Y;
                }
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
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
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