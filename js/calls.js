var showFloor = function() {
    var txt = document.querySelector('#floor');
    txt.className = "floor";
}

var hideFloor = function() {
    var txt = document.querySelector('#floor');
    txt.className = "hidden";
}

var a1 = function() {
    var txt = document.querySelector('#a1');
    txt.className = "textDrop";
}

var a2 = function() {
    var txt = document.querySelector('#a2');
    txt.className = "textDrop";
}

var a3 = function() {
    var txt = document.querySelector('#a3');
    txt.className = "textDrop";
}

var hideA = function() {
    var txt = document.querySelectorAll('#a1, #a2, #a3');
    txt[0].className = "hidden";
    txt[1].className = "hidden";
    txt[2].className = "hidden";
}

var hideB = function() {
    var txt = document.querySelectorAll('#b1, #b2, #b3');
    txt[0].className = "hidden";
    txt[1].className = "hidden";
    txt[2].className = "hidden";
}

var b1 = function() {
    var txt = document.querySelector('#b1');
    txt.className = "b1";
}

var b2 = function() {
    var txt = document.querySelector('#b2');
    txt.className = "b2";
}

var b3 = function() {
    var txt = document.querySelector('#b3');
    txt.className = "b3";
}

var c1 = function() {
    var txt = document.querySelector('#c1');
    txt.className = "c1";
}

var c2a = function() {
    var txt = document.querySelector('#c2a');
    txt.className = "c2a";
}

var c2b = function() {
    var txt = document.querySelector('#c2b');
    txt.className = "c2b";
}
var c2c = function() {
    var txt = document.querySelector('#c2c');
    txt.className = "c2c";
}
var c3 = function() {
    var txt = document.querySelector('#c3');
    txt.className = "c3";
}
var c4 = function() {
    var txt = document.querySelector('#c4');
    txt.className = "c4";
}

var showC1 = function() {
    var txt = document.querySelectorAll('#c1, #c2a, #c2b, #c2c, #c2d, #c3, #c4');
    txt[0].className = "c1";
    txt[1].className = "c2a";
    txt[2].className = "c2b";
    txt[3].className = "c2c";
    txt[4].className = "c2d";
    txt[5].className = "c3";
    txt[6].className = "c4";
}

var hideC = function() {
    var txt = document.querySelectorAll('#c1, #c2, #c2a, #c2b, #c2c, #c3, #c4');
    txt[0].className = "hidden";
    txt[1].className = "hidden";
    txt[2].className = "hidden";
    txt[3].className = "hidden";
    txt[4].className = "hidden";
    txt[5].className = "hidden";
}

var oc1Show = function() {
    var txt = document.querySelector('#oc1');
    txt.className = "oc1";
}

var oc1Hide = function() {
    var txt = document.querySelector('#oc1');
    txt.className = "hidden";
}

var oc2Show = function() {
    var txt = document.querySelector('#oc2');
    txt.className = "oc2";
}

var oc2Hide = function() {
    var txt = document.querySelector('#oc2');
    txt.className = "hidden";
}

var showD = function() {
    var txt = document.querySelectorAll('#d1, #d2')
    txt[0].className = "d1";
    txt[1].className = "d2";
}

var stopper = function() {
    pause();
}

var anim = {
    "1": showFloor
    , "188": hideFloor
    , "270": a1
    , "280": a2
    , "290": a3
    , "304": hideA
    , "318": b1
    , "330": b2
    , "342": b3
    , "357": hideB
    , "400": c1
    , "410": c2a
    , "420": c2b
    , "430": c2c
    , "440": c3
    , "450": c4
    , "480": hideC
    , "498": oc1Show
    , "537": oc1Hide
    , "538": oc2Show
    , "555": showD
}
