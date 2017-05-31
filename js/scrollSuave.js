/*en vez de hacerlo desde el html con el evento onclick*/
// $(window).load(function(){ /*cuando carguen todos los elementos de la ventana,usa la sig. funcion*/
//		document.getElementById("ir-a-sobre").onclick = moveTo(position('menuSobre'),1000);
//			document.getElementById("ir-a-trabajos").onclick = moveTo(position('menuNegro'),1000);

//});




/*
Esta función es para moverse a una determinada posición de la página expresada en pixels
que le pasamos a la función con el parámetro 'pos' ( pos=0 nos moveremos al inicio de la página),
el parametro 'velocidad' indicará la velocidad a la que haremos el desplazamiento, a menor valor irá más rápido.
También podemos usar las palabras "slow"(lento) o "fast"(rápido).
*/

function moveTo(pos,velocidad){
	$('html, body').animate({scrollTop: pos}, velocidad);
}

/*
Función que  devuelve la posición de cualquier elemento de nuestra página,
para ello hay que darle un valor ID al elemento al crearlo.
Por ejemplo, asociar la función 'moveTo()' al eveto 'onclick' funciones dentro de la etiqueta que deseemos.
Como no conocemos la posición en pixel del elemento al que nos queremos desplazar y que es necesario en la
función 'moveTo(pos,velocidad)' lo que hacemos es pasarle al parámetro 'pos' la función 'position(elem)'
que calculará la posición en pixels del elemento que le pasemos como argunmento.
*/
function position(elem){
	var offset = $('#'+elem).offset();
	return(offset.top);
}

