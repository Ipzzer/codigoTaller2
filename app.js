//Variables
var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

//Dibujando un arco
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "orange";
//Parametros X, Y, Radio, 
ctx.arc(400, 300, 20, 0.79, Math.PI, false);
ctx.stroke();
//ctx.fill();
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
//Parametros X, Y, Radio, 
ctx.arc(200, 300, 20, Math.PI, 0.79, false);
ctx.stroke();
//ctx.fill();
ctx.closePath();

//Dibujando texto
ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "25pt Arial";
//Parametros X y Y
ctx.fillText("El mundo en una canvas...", 200, 100);
ctx.closePath();



var assetManager = new AssetManager();
assetManager.queueDownload("./imagenes/vaca_normal.png","vacanormal");

assetManager.downloadAll(function() {
    var imagen = assetManager.getAsset("vacanormal");
    ctx.drawImage(imagen, 500,225);
	
	var juego = new Juego(ctx);
    var circulo = new Circulo(juego, 0, 225);
	juego.addEntidad(circulo);
    juego.iniciar();
});