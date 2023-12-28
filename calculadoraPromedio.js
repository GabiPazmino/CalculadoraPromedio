let nombre = prompt( "Hola! Cuál es tu nombre?");
let materia = prompt( "Qué materia estás cursando?");
let nota1 = Math.round(prompt( "Cuál es tu primera nota?"));
let nota2 = Math.round(prompt( "Cuál es tu segunda nota?"));
let nota3 = Math.round(prompt( "Cuál es tu tercera nota?"));

if (0 <= nota1 && nota1 <= 10 && 0 <= nota2 && nota2 <= 10 && 0 <= nota3 && nota3 <= 10){
    let promedio = Math.round((nota1+nota2+nota3)/3)
    if (promedio>=7){
    alert(`${nombre}, ¡felicidades! Has aprobado la materia de ${materia} con un promedio de ${promedio}.`)
    } else{
        alert(`${nombre}, gracias por tu esfuerzo. Nos vemos pronto en la clase de ${materia} . El promedio obtenido fue ${promedio}.`)
    }
} else {
    alert("Por favor, ingresa notas válidas en el rango de 0 a 10.");
}