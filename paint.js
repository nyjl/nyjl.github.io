var mouseDown = false;
var canvas = document.getElementById('paint-canvas');
var context = canvas.getContext('2d');

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

function onMouseDown(e) {
    mouseDown = true;
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    context.moveTo(x, y);
}

function onMouseUp(e) {
    mouseDown = false;
    context.strokeStyle = '#000';
    context.stroke();
}

function onMouseMove(e) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    if (mouseDown) {
        context.lineTo(x, y);
        context.strokeStyle = '#000';
        context.stroke();
    }
}