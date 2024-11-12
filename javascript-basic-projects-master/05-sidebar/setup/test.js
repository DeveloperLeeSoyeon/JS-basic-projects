var x = 10;
let y = 20;

function outer() {
    var x = 30;
    let y = 40;

    if (true) {
        var x = 50;
        let y = 60;
        const z = 70;
        console.log("x", x);
        console.log("y", y);
        console.log("z", z);
    }
    console.log("x", x);
    console.log("y", y);
    console.log("z", z);

    function inner() {
        var x = 80;
    }

    inner();
}

outer();

console.log("x", x);
console.log("y", y);
