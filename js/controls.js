var vid = document.querySelector('.video')
var FRAME_RATE = 24;
var currFrame = 0;
var getFrame = function() {
    currFrame = parseInt(vid.currentTime * FRAME_RATE);
    if(!vid.paused) document.querySelector('.gotoVal').value = currFrame;
    return setTimeout(getFrame, 1000/FRAME_RATE);
}

var anim = {};

var useFrameInfo = function() {
    if(anim[parseInt(currFrame)]) anim[parseInt(currFrame)]();
    return setTimeout(useFrameInfo, 1);
};

var start = function() {
    var gotoFrameNum = document.querySelector('.gotoVal').value;
    if(gotoFrameNum) gotoFrame(gotoFrameNum);
    vid.play();
}

var pause = function() {
    vid.pause();
}

var gotoFrame = function(val) {
    var currTime = parseFloat(val / FRAME_RATE);
    vid.pause();
    vid.currentTime = currTime;
    for(var i=0; i<=val; i++) {
        if(anim[i]) anim[i]();
    }
}

getFrame();
useFrameInfo();

document.querySelector('.start').onclick = start;
document.querySelector('.pause').onclick = pause;
document.querySelector('.goto').onclick = (function(){
    gotoFrame(document.querySelector('.gotoVal').value);
});
