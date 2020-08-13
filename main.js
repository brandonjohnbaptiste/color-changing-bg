// function for generating a random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - (min + 1) )) + min;
}

const btn = document.getElementById('btn');



btn.onclick = function () {
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
    console.log('changed colour'); 

};