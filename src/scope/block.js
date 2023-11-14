function fruits() {
    if (true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banana"; //block scope
    }
    console.log(fruit1); // Apple
    console.log(fruit2); // error
    console.log(fruit3); // error
}

fruits();