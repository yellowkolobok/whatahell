var frontBtn = document.getElementById('front').onclick;

document.getElementById('back').onclick = function () {
    document.getElementById("result1").innerHTML = "ЗАД: " + euBack[Math.floor(Math.random()*euBack.length)];
}

document.getElementById('front').onclick = function () {
    document.getElementById("result2").innerHTML = "ПЕРЕД: " + euFront[Math.floor(Math.random()*euFront.length)];
}
