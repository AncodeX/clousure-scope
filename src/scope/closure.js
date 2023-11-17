function myFunction() {
    let name = "Danilo";

    function greeting() {
        console.log(`Hola ${name}`);
    }
    return greeting;
}

let g = myFunction();
console.log(g);
g();