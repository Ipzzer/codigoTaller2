

function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
	this.direccion = "derecha-";
}


//Funcion Actualizar
Circulo.prototype.actualizar = function() {
 
    if (this.x < this.juego.ctx.canvas.width) {
        this.x += 2;
    }
    else {
        this.x = 0;
		
    }
};

//Función Dibujar
Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "orange";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
	
	//ctx.strokeStyle = "black";
	//ctx.fillStyle = "black";
	//ctx.arc(400, 300, 20, Math.PI, 0.79, false);
	//ctx.stroke();
    //ctx.closePath();
	
	//ctx.strokeStyle = "black";
	//ctx.fillStyle = "black";
	//ctx.arc(400, 300, 20, 0.79, Math.PI, false);
	//ctx.stroke();
    ctx.closePath();
};