// -------------------------------------------------
/* 
Exercise #2

Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

 */

  for(let i = 1; i <= 5; i++){ //Se comienza el patro inicial con 1 y se limita con <= 5 para que llegue nuestro patron de asteriscos hasta 5 o se pueden tambien con <6 para que el limite sea 5
    let patron= ''; //Se muestra un resultado vacio 
    
    for(let j = 1; j <= i; j++){ //Se agrega un for anidado en donde "i" represanta la altura que va a tener el patron y "j" la anchura.
        patron += '* '; //Se acumula los valores del patron en asterisco hasta llegar al 5
    }
    console.log(patron); //Se muestra el patron 
} 



for(let i=0; i < 5; i++){

console.log("For principal " + i);
    for(let j=0; j < i; j++){
        console.log("For interno " + j);
    }

}